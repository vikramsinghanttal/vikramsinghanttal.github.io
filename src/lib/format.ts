export function formatDate(d: Date | string | undefined): string {
  if (!d) return '';
  const date = d instanceof Date ? d : new Date(d);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatPublicationDate(date: Date | undefined, year: number): string {
  if (!date) return String(year);
  const d = date.getUTCDate().toString().padStart(2, '0');
  const m = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const y = date.getUTCFullYear();
  return `${d}/${m}/${y}`;
}

export function formatAuthors(authors: readonly string[], me = 'Vikram Singh'): string {
  return authors
    .map((a) => (a === me ? `<strong>${a}</strong>` : a))
    .join(', ');
}

export const PUBLICATION_TYPE_LABEL: Record<string, string> = {
  journal: 'Journal',
  conference: 'Conference',
  patent: 'Patent',
  thesis: 'Thesis',
  preprint: 'Preprint',
  'book-chapter': 'Book Chapter',
  workshop: 'Workshop',
  article: 'Article',
  talk: 'Talk',
};

export function extractYouTubeId(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || undefined;
    if (u.hostname.endsWith('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v') ?? undefined;
      const embedMatch = u.pathname.match(/^\/embed\/([^/]+)/);
      if (embedMatch) return embedMatch[1];
    }
  } catch {
    return undefined;
  }
  return undefined;
}
