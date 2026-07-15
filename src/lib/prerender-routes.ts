import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

export function getBlogPostPaths(): string[] {
  try {
    const postsDir = resolve(process.cwd(), 'src/content/posts');

    return readdirSync(postsDir)
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => `/blog/${file.replace(/\.mdx$/, '')}`);
  } catch {
    return [];
  }
}

export function getPrerenderPages() {
  const staticPages = ['/', '/blog', '/open-source'];

  return [
    ...staticPages.map((path) => ({ path })),
    ...getBlogPostPaths().map((path) => ({ path })),
  ];
}
