import type { MetadataRoute } from 'next';

import { siteConfig, navigation } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navigation.map((item) => ({
    url: item.href === '/' ? siteConfig.url : `${siteConfig.url}${item.href}`,
    lastModified: now,
  }));
}
