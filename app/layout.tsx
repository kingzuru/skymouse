import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.shortName,
    template: '%s | Skymouse',
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
