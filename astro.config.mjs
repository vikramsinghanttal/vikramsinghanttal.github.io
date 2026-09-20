import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://vikramsinghanttal.github.io/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': [
          'github',
          'linkedin',
          'googlescholar',
          'orcid',
          'arxiv',
          'rss',
          'x',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
