import { siteConfig } from '@/lib/site';
import type { ProjectEntry } from '@/lib/portfolio';
import type { InsightEntry } from '@/lib/insights';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BW',
      addressLocality: siteConfig.location,
    },
    brand: siteConfig.shortName,
    description: siteConfig.description,
  };
}

export function articleSchema(insight: InsightEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.summary,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/insights/${insight.slug}`,
  };
}

export function projectSchema(project: ProjectEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    about: project.sector,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/projects/${project.slug}`,
  };
}

