import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    type: z.enum([
      'journal',
      'conference',
      'patent',
      'thesis',
      'preprint',
      'book-chapter',
      'workshop',
      'article',
      'talk',
    ]),
    year: z.number().int().min(2010).max(2100),
    date: z.coerce.date().optional(),
    pdf: z.string().url().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    code: z.string().url().optional(),
    url: z.string().url().optional(),
    youtube: z.string().url().optional(),
    bibtex: z.string().optional(),
    abstract: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    period: z.string(),
    tech: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});


const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    description: z.string().optional(),
    category: z.enum([
      'Telecom',
      'AI',
      'Quantum',
      'GPU',
      'CUDA',
      'Simulation',
      'Startups',
      'Personal',
    ]),
    hasMath: z.boolean().default(false),
  }),
});

export const collections = { publications, projects, blog };
