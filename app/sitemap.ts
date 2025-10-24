import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;
  return [
    { 
      url: `${base}/`,  
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1 
    },
    { 
      url: `${base}/projects`,  
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9 
    },
    { 
      url: `${base}/contact`,  
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8 
    },
    { 
      url: `${base}/privacy`,  
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3 
    },
  ];
}
