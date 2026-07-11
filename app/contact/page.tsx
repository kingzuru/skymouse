import type { Metadata } from 'next';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';
import { contactLinks } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact Skymouse using the approved company details.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <RouteShell
      eyebrow="Contact"
      title="Contact route scaffold"
      description="This page will be expanded with the approved contact details and enquiry flow in the next sprint."
    >
      <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
        <p className="text-sm font-semibold text-ink">Fallback contact</p>
        <a href={contactLinks.email} className="mt-2 inline-block text-sm text-green">
          info@skymouse.co.bw
        </a>
      </div>
    </RouteShell>
  );
}
