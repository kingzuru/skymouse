import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Solutions',
  description: 'Structural shell for Skymouse solutions.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <RouteShell
      eyebrow="Solutions"
      title="Solution route scaffold"
      description="This page is a structural placeholder for the approved solutions content and layout work that arrives in later sprints."
    />
  );
}
