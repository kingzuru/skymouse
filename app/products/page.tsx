import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Products',
  description: 'Structural shell for Skymouse products.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <RouteShell
      eyebrow="Products"
      title="Product route scaffold"
      description="The product pages will later present approved platform copy and owned product capability."
    />
  );
}
