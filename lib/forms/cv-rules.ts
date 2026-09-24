/**
 * CV upload rules shared by the application form (instant feedback) and the
 * server (authoritative checks in lib/server/cv-file.ts).
 *
 * 4 MB, not 5: the site runs on Vercel, where a function's request body is
 * capped at 4.5 MB. A 4 MB file plus the form fields stays safely under it.
 */
export const CV_MAX_BYTES = 4 * 1024 * 1024;
export const CV_MAX_LABEL = '4 MB';
export const CV_EXTENSIONS = ['pdf', 'doc', 'docx'] as const;
export const CV_ACCEPT = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

/** Quick client-side pre-check; the server re-validates the actual file content. */
export function precheckCv(file: File): string | null {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (!file.name.includes('.') || !(CV_EXTENSIONS as readonly string[]).includes(extension)) {
    return 'Please upload your CV as a PDF, DOC or DOCX file.';
  }
  if (file.size <= 0) return 'The selected CV file is empty. Please choose another file.';
  if (file.size > CV_MAX_BYTES) return `Your CV must be ${CV_MAX_LABEL} or smaller.`;
  return null;
}
