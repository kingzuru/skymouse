import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: 'Structural shell for Skymouse projects.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <RouteShell
      eyebrow="Projects"
      title="Project route scaffold"
      description="This route is ready for the approved project listings and future detail pages."
    />
  );
}
