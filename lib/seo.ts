import type { Metadata } from 'next';

/** Page metadata with matching Open Graph title and description. */
export function pageMetadata(title: string, description: string): Metadata {
  return { title, description, openGraph: { title, description } };
}
