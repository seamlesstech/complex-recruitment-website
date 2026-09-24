'use client';

import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';

const labelTextClass = 'text-[9px] font-extrabold tracking-[.1em] text-[#626b70]';

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 15V4M12 4L8 8M12 4L16 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V7a1 1 0 0 0 1 1h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Real drag-and-drop CV upload zone. Purely a UI/interaction upgrade over
 * the previous plain <input type=file> — precheckCv, accept, and the
 * multipart submission it feeds into are all unchanged (see cv-rules.ts /
 * JobApplicationForm.tsx).
 */
export function CvDropzone({
  id,
  file,
  error,
  disabled,
  accept,
  maxLabel,
  onFileSelected,
  onRemove,
}: {
  id: string;
  file: File | null;
  error?: string;
  disabled?: boolean;
  accept: string;
  maxLabel: string;
  onFileSelected: (file: File) => void;
  onRemove: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const dragDepth = useRef(0);
  const errorId = `${id}-error`;

  function openPicker() {
    if (disabled) return;
    inputRef.current?.click();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const next = event.target.files?.[0] ?? null;
    if (next) onFileSelected(next);
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (disabled) return;
    dragDepth.current += 1;
    if (event.dataTransfer.types.includes('Files')) setDragActive(true);
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!disabled && event.dataTransfer.types.includes('Files')) {
      event.dataTransfer.dropEffect = 'copy';
    }
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setDragActive(false);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current = 0;
    setDragActive(false);
    if (disabled) return;
    const dropped = event.dataTransfer.files?.[0];
    if (dropped) onFileSelected(dropped);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPicker();
    }
  }

  return (
    <div>
      <span className={labelTextClass}>UPLOAD CV (OPTIONAL)</span>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-describedby={error ? errorId : undefined}
        onClick={openPicker}
        onKeyDown={handleKeyDown}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-[9px] flex min-h-[110px] cursor-pointer flex-col items-center justify-center gap-2 border border-dashed p-[18px] text-center transition-colors duration-150 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red ${
          disabled ? 'cursor-not-allowed opacity-60' : ''
        } ${
          error
            ? 'border-brand-red bg-white'
            : dragActive
              ? 'border-brand-red bg-[rgba(236,33,37,0.06)]'
              : 'border-[#aeb4b7] bg-surface hover:border-ink/40'
        }`}
      >
        <input
          ref={inputRef}
          id={id}
          name={id}
          className="sr-only"
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={handleChange}
          tabIndex={-1}
        />

        {file ? (
          <>
            <DocumentIcon className="h-6 w-6 text-brand-red" />
            <span className="min-w-0 max-w-full break-all text-[13px] font-medium text-ink">{file.name}</span>
            <span className="text-[10px] text-[#879095]">
              {(file.size / (1024 * 1024)).toFixed(2)} MB · Click or drop to replace
            </span>
          </>
        ) : (
          <>
            <UploadIcon className={`h-6 w-6 ${dragActive ? 'text-brand-red' : 'text-[#879095]'}`} />
            <span className="text-[13px] font-normal text-ink">
              {dragActive ? 'Drop your CV here' : 'Upload your CV'}
            </span>
            <span className="text-[10px] text-[#879095]">PDF, DOC or DOCX · Max {maxLabel}</span>
          </>
        )}
      </div>

      {error && (
        <span id={errorId} className="mt-2 block text-[11px] font-normal tracking-normal text-brand-red">
          {error}
        </span>
      )}

      {file && !disabled && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          className="mt-2 text-[11px] font-normal tracking-normal text-ink underline outline-none focus-visible:outline-2 focus-visible:outline-brand-red"
        >
          Remove file
        </button>
      )}
    </div>
  );
}
