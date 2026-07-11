import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description: 'Learn about Skymouse and the company foundation behind the website.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <RouteShell
      eyebrow="About"
      title="Company foundation and working context"
      description={`${siteConfig.name} is being structured as a static, content-led website. The approved copy will be added in the next sprint.`}
    />
  );
}
