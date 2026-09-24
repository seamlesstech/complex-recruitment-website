'use client';

import Script from 'next/script';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TURNSTILE_SITE_KEY as SITE_KEY } from '../../lib/turnstile/config';

/**
 * One shared Cloudflare Turnstile widget, used by all five public write forms
 * (Job Application, Register Interest, Request Staff, Sector Staffing Enquiry,
 * Contact) rather than five separate integrations.
 *
 * `action` is sent to Cloudflare when the token is minted and re-checked
 * server-side in `lib/server/turnstile.ts`, so a token from one form can't be
 * replayed against another.
 *
 * If `NEXT_PUBLIC_TURNSTILE_SITE_KEY` isn't set, the widget renders nothing and
 * reports an empty token immediately — this is the local/preview development
 * fallback. The server independently refuses to skip verification in
 * production (see `verifyTurnstileToken`), so this never weakens production.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  callback: (token: string) => void;
  'error-callback': () => void;
  'expired-callback': () => void;
  'timeout-callback': () => void;
  theme?: 'light' | 'dark' | 'auto';
};

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

export type PublicTurnstileHandle = { reset: () => void };

type Props = {
  /** Matches an enquiry `kind` or 'job_application'; verified server-side. */
  action: string;
  onToken: (token: string) => void;
  className?: string;
};

export const PublicTurnstile = forwardRef<PublicTurnstileHandle, Props>(function PublicTurnstile(
  { action, onToken, className },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [state, setState] = useState<'idle' | 'ready' | 'expired' | 'error'>('idle');
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
      onTokenRef.current('');
      setState('idle');
    },
  }));

  useEffect(() => {
    if (!SITE_KEY) {
      // Local/preview fallback: no site key configured, so nothing to render.
      onTokenRef.current('');
      return;
    }
    if (!scriptReady || !containerRef.current || widgetId.current || !window.turnstile) return;

    widgetId.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      action,
      callback: token => {
        setState('ready');
        onTokenRef.current(token);
      },
      'error-callback': () => {
        setState('error');
        onTokenRef.current('');
      },
      'expired-callback': () => {
        setState('expired');
        onTokenRef.current('');
      },
      'timeout-callback': () => {
        setState('expired');
        onTokenRef.current('');
      },
    });

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [scriptReady, action]);

  if (!SITE_KEY) return null;

  return (
    <div className={className}>
      <Script id="cf-turnstile-script" src={SCRIPT_SRC} strategy="afterInteractive" onReady={() => setScriptReady(true)} />
      <div ref={containerRef} />
      <p role="status" aria-live="polite" className="sr-only">
        {state === 'ready' && 'Verification complete.'}
        {state === 'expired' && 'Verification expired, please try again.'}
        {state === 'error' && 'Verification unavailable.'}
      </p>
      {state === 'expired' && (
        <p role="alert" className="mt-2 text-[11px] font-normal tracking-normal text-brand-red">
          Verification expired — please complete it again before submitting.
        </p>
      )}
      {state === 'error' && (
        <p role="alert" className="mt-2 text-[11px] font-normal tracking-normal text-brand-red">
          Verification is unavailable right now. Please refresh the page and try again.
        </p>
      )}
    </div>
  );
});
