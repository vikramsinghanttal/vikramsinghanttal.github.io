import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/site.config';

export async function GET(context: APIContext) {
  const now = new Date();
  const posts = (await getCollection('blog')).filter(
    (post) => new Date(post.data.date) <= now,
  );
  return rss({
    title: `${site.name} · Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: `/blog/${p.id}/`,
      })),
  });
}
