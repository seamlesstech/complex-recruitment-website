import 'server-only';

import { CV_MAX_BYTES } from '../forms/cv-rules';

/**
 * Server-side CV validation. The browser's filename and MIME type are treated as
 * claims only; what decides acceptance is the file's actual content:
 *
 *   .pdf   must start with "%PDF-"
 *   .doc   must be an OLE2 compound file (D0 CF 11 E0 A1 B1 1A E1)
 *   .docx  must be a ZIP (PK\x03\x04) that contains "word/document.xml"
 *
 * Extension, declared MIME and content must all agree. Executables, archives,
 * images renamed to .pdf, empty and oversized files are rejected. The stored MIME
 * type is the canonical one for the verified format, never the browser's claim.
 */

type CvFormat = { extension: 'pdf' | 'doc' | 'docx'; mime: string; declared: readonly string[] };

const FORMATS: Record<CvFormat['extension'], CvFormat> = {
  pdf: { extension: 'pdf', mime: 'application/pdf', declared: ['application/pdf', 'application/x-pdf'] },
  doc: { extension: 'doc', mime: 'application/msword', declared: ['application/msword'] },
  docx: {
    extension: 'docx',
    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    declared: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
};

// Some platforms send no type, or a generic one, for Office files; the content
// check below is authoritative in that case.
const GENERIC_DECLARED = ['', 'application/octet-stream'];

export type ValidatedCv = {
  bytes: Uint8Array;
  sizeBytes: number;
  mimeType: string;
  /** Display/download name only. Never used as a Storage path. */
  originalFilename: string;
};

export type CvValidation = { ok: true; cv: ValidatedCv } | { ok: false; message: string };

const INVALID_TYPE = 'Please upload your CV as a PDF, DOC or DOCX file.';

function startsWith(bytes: Uint8Array, signature: number[]): boolean {
  return signature.every((byte, index) => bytes[index] === byte);
}

function contains(bytes: Uint8Array, text: string): boolean {
  const needle = new TextEncoder().encode(text);
  outer: for (let i = 0; i <= bytes.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) if (bytes[i + j] !== needle[j]) continue outer;
    return true;
  }
  return false;
}

function contentMatches(format: CvFormat, bytes: Uint8Array): boolean {
  switch (format.extension) {
    case 'pdf':
      return startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d]); // %PDF-
    case 'doc':
      return startsWith(bytes, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
    case 'docx':
      // A ZIP is only accepted when it is a Word document, not an arbitrary archive.
      return startsWith(bytes, [0x50, 0x4b, 0x03, 0x04]) && contains(bytes, 'word/document.xml');
  }
}

/**
 * Keeps only a safe display name: the last path segment, no control or
 * path-significant characters, bounded length, and the verified extension.
 */
function safeDisplayName(rawName: string, extension: string): string {
  const base = rawName.split(/[\\/]/).pop() ?? '';
  const withoutExtension = base.replace(/\.[^.]*$/, '');
  const cleaned = withoutExtension
    .normalize('NFKC')
    .replace(/[\u0000-\u001f\u007f<>:"|?*\\/]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^[.\s]+/, '')
    .trim()
    .slice(0, 120);
  return `${cleaned || 'CV'}.${extension}`;
}

export async function validateCvFile(file: File): Promise<CvValidation> {
  if (file.size <= 0) return { ok: false, message: 'The selected CV file is empty. Please choose another file.' };
  if (file.size > CV_MAX_BYTES) return { ok: false, message: 'Your CV must be 4 MB or smaller.' };

  const extension = file.name.split(/[\\/]/).pop()?.split('.').pop()?.toLowerCase() ?? '';
  const format = FORMATS[extension as CvFormat['extension']];
  if (!format || !file.name.includes('.')) return { ok: false, message: INVALID_TYPE };

  const declared = (file.type || '').toLowerCase();
  if (!format.declared.includes(declared) && !GENERIC_DECLARED.includes(declared)) {
    return { ok: false, message: INVALID_TYPE };
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  if (bytes.length !== file.size || bytes.length === 0 || bytes.length > CV_MAX_BYTES) {
    return { ok: false, message: INVALID_TYPE };
  }
  if (!contentMatches(format, bytes)) return { ok: false, message: INVALID_TYPE };

  return {
    ok: true,
    cv: { bytes, sizeBytes: bytes.length, mimeType: format.mime, originalFilename: safeDisplayName(file.name, format.extension) },
  };
}
