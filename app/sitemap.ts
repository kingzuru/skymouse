import type { MetadataRoute } from 'next';

import { insights } from '@/lib/insights';
import { siteConfig, navigation } from '@/lib/site';
import { projects } from '@/lib/portfolio';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = navigation.map((item) => ({
    url: item.href === '/' ? siteConfig.url : `${siteConfig.url}${item.href}`,
    lastModified: now,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: now,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
