import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/brand';
import fs from 'fs';
import path from 'path';

function listChildRoutes(group: string): string[] {
  try {
    const groupDir = path.join(process.cwd(), 'app', group);
    if (!fs.existsSync(groupDir)) return [];
    return fs
      .readdirSync(groupDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .filter((d) => {
        const routeDir = path.join(groupDir, d.name);
        const files = fs.readdirSync(routeDir);
        return files.includes('page.tsx') || files.includes('page.ts');
      })
      .map((d) => `/${group}/${d.name}`);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;
  const now = new Date();

  const baseEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
  ];

  const discovered = [
    ...listChildRoutes('services'),
    ...listChildRoutes('locations'),
    ...listChildRoutes('seasonal'),
  ];

  const seen = new Set(baseEntries.map((e) => e.url));
  for (const pathSuffix of discovered) {
    const url = `${base}${pathSuffix}`;
    if (!seen.has(url)) {
      baseEntries.push({
        url,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: pathSuffix.startsWith('/services') ? 0.7 : pathSuffix.startsWith('/locations') ? 0.6 : 0.4,
      });
      seen.add(url);
    }
  }

  return baseEntries;
}
