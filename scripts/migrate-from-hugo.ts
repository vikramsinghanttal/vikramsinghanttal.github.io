/**
 * One-shot importer: legacy Hugo/Wowchemy publications → Astro content collection.
 *
 * Reads ../vikramsinghanttal.github.io.legacy-hugo/content/publication/<slug>/{index.md,cite.bib}
 * Writes ./src/content/publications/<slug>.md
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');
const legacyPubDir = join(
  repoRoot,
  '..',
  'vikramsinghanttal.github.io.legacy-hugo',
  'content',
  'publication',
);
const outDir = join(repoRoot, 'src', 'content', 'publications');

// Example/template entries in the Wowchemy starter — skip.
const SKIP_SLUGS = new Set([
  '_index.md',
  'conference-paper',
  'journal-article',
  'preprint',
]);

// Wowchemy publication_types → our schema enum.
const TYPE_MAP: Record<string, string> = {
  '0': 'conference',
  '1': 'conference',
  '2': 'journal',
  '3': 'preprint',
  '4': 'conference',
  '5': 'book-chapter',
  '6': 'book-chapter',
  '7': 'thesis',
  '8': 'patent',
};

const AUTHOR_MAP: Record<string, string> = {
  admin: 'Vikram Singh',
};

function normalizeAuthor(a: string): string {
  return AUTHOR_MAP[a] ?? a;
}

function stripWrappingAsterisks(s: string): string {
  return s.replace(/^\s*\*+\s*/, '').replace(/\s*\*+\s*$/, '').trim();
}

function yamlString(s: string): string {
  // Use folded scalar via single-quoted YAML and escape embedded single quotes.
  return `'${s.replace(/'/g, "''")}'`;
}

function yamlArray(items: string[]): string {
  if (items.length === 0) return ' []';
  return `\n${items.map((i) => `  - ${yamlString(i)}`).join('\n')}`;
}

function yamlBlockScalar(s: string): string {
  // Literal block: preserve newlines, indent every line by 2.
  const trimmed = s.replace(/\s+$/, '');
  const indented = trimmed.split('\n').map((line) => `  ${line}`).join('\n');
  return `|\n${indented}`;
}

interface LegacyFrontmatter {
  title?: string;
  authors?: string[];
  tags?: string[];
  date?: string | Date;
  publication_types?: string[] | string;
  publication?: string;
  abstract?: string;
  links?: { name: string; url: string }[];
  url_pdf?: string;
  doi?: string;
  featured?: boolean;
}

interface OutputFields {
  title: string;
  authors: string[];
  venue: string;
  type: string;
  year: number;
  date?: string;
  pdf?: string;
  doi?: string;
  arxiv?: string;
  url?: string;
  bibtex?: string;
  abstract?: string;
  featured: boolean;
  tags: string[];
}

function pickType(legacy: LegacyFrontmatter): string {
  const raw = Array.isArray(legacy.publication_types)
    ? legacy.publication_types[0]
    : legacy.publication_types;
  if (!raw) return 'conference';
  return TYPE_MAP[String(raw)] ?? 'conference';
}

function extractFromLinks(
  links: { name: string; url: string }[] | undefined,
): {
  pdf?: string;
  doi?: string;
  arxiv?: string;
  extras: { label: string; url: string }[];
} {
  const extras: { label: string; url: string }[] = [];
  let pdf: string | undefined;
  let doi: string | undefined;
  let arxiv: string | undefined;
  for (const l of links ?? []) {
    const n = l.name.toLowerCase();
    if (n.includes('pdf')) pdf = l.url;
    else if (l.url.includes('doi.org')) doi = l.url.replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
    else if (l.url.includes('arxiv.org')) arxiv = l.url;
    else extras.push({ label: l.name, url: l.url });
  }
  return { pdf, doi, arxiv, extras };
}

async function readBibtex(slugDir: string): Promise<string | undefined> {
  const bibPath = join(slugDir, 'cite.bib');
  if (!existsSync(bibPath)) return undefined;
  const raw = await readFile(bibPath, 'utf-8');
  return raw.trim();
}

function buildFrontmatter(o: OutputFields): string {
  const lines: string[] = ['---'];
  lines.push(`title: ${yamlString(o.title)}`);
  lines.push(`authors:${yamlArray(o.authors)}`);
  lines.push(`venue: ${yamlString(o.venue)}`);
  lines.push(`type: ${o.type}`);
  lines.push(`year: ${o.year}`);
  if (o.date) lines.push(`date: ${o.date}`);
  if (o.pdf) lines.push(`pdf: ${yamlString(o.pdf)}`);
  if (o.doi) lines.push(`doi: ${yamlString(o.doi)}`);
  if (o.arxiv) lines.push(`arxiv: ${yamlString(o.arxiv)}`);
  if (o.url) lines.push(`url: ${yamlString(o.url)}`);
  if (o.abstract) lines.push(`abstract: ${yamlString(o.abstract)}`);
  if (o.bibtex) lines.push(`bibtex: ${yamlBlockScalar(o.bibtex)}`);
  lines.push(`featured: ${o.featured}`);
  lines.push(`tags:${yamlArray(o.tags)}`);
  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

async function migrate() {
  const entries = await readdir(legacyPubDir);
  let written = 0;
  let skipped = 0;

  for (const slug of entries) {
    if (SKIP_SLUGS.has(slug)) {
      skipped++;
      continue;
    }
    const slugDir = join(legacyPubDir, slug);
    const stats = await stat(slugDir);
    if (!stats.isDirectory()) continue;

    const indexPath = join(slugDir, 'index.md');
    if (!existsSync(indexPath)) {
      console.warn(`[skip] ${slug}: no index.md`);
      skipped++;
      continue;
    }

    const raw = await readFile(indexPath, 'utf-8');
    const parsed = matter(raw);
    const fm = parsed.data as LegacyFrontmatter;

    if (!fm.title) {
      console.warn(`[skip] ${slug}: missing title`);
      skipped++;
      continue;
    }

    const dateStr =
      fm.date instanceof Date
        ? fm.date.toISOString().slice(0, 10)
        : (fm.date ?? '');
    const year = Number(dateStr.slice(0, 4));
    if (!Number.isFinite(year) || year < 2010) {
      console.warn(`[skip] ${slug}: bad year (${dateStr})`);
      skipped++;
      continue;
    }

    const authors = (fm.authors ?? []).map(normalizeAuthor);
    const type = pickType(fm);
    let venue = stripWrappingAsterisks(fm.publication ?? '');
    if (!venue) {
      if (type === 'patent') venue = 'U.S. Patent';
      else if (type === 'thesis') venue = 'IIT Kanpur';
      else venue = '—';
    }
    const tags = (fm.tags ?? []).filter((t) => t && t.trim().length > 0);
    const abstract = (fm.abstract ?? '').trim() || undefined;
    const { pdf, doi, arxiv, extras } = extractFromLinks(fm.links);
    const url = extras.length > 0 ? extras[0]?.url : undefined;
    const bibtex = await readBibtex(slugDir);

    const out: OutputFields = {
      title: fm.title.replace(/\s+/g, ' ').trim(),
      authors,
      venue,
      type,
      year,
      date: dateStr,
      pdf: pdf ?? fm.url_pdf,
      doi: doi ?? fm.doi,
      arxiv,
      url,
      bibtex,
      abstract,
      featured: Boolean(fm.featured),
      tags,
    };

    const body = buildFrontmatter(out);
    const outPath = join(outDir, `${slug}.md`);
    await writeFile(outPath, body, 'utf-8');
    written++;
  }

  console.log(`\nDone. Wrote ${written} publications, skipped ${skipped}.`);
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
