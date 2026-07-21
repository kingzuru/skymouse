import type { Metadata } from 'next';

import { siteConfig } from '@/lib/site';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonical = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: '/skymouse_logo.png',
          width: 1200,
          height: 630,
          alt: siteConfig.shortName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/skymouse_logo.png'],
    },
  };
}
