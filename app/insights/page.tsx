import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Insights',
  description: 'Structural shell for Skymouse insights.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <RouteShell
      eyebrow="Insights"
      title="Insights route scaffold"
      description="Editorial content will be added here from the approved insights source copy in the next sprint."
    />
  );
}
