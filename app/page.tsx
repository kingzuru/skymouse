import type { Metadata } from 'next';
import Link from 'next/link';

import { RouteShell } from '@/components/route-shell';
import { createPageMetadata } from '@/lib/metadata';
import { navigation, siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Home',
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <RouteShell
      eyebrow="Sprint 0 foundation"
      title={siteConfig.positioning}
      description={siteConfig.support}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-border bg-muted p-6">
          <p className="text-sm font-semibold text-ink">Structure</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            The App Router foundation is in place and ready for the approved content.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-muted p-6">
          <p className="text-sm font-semibold text-ink">Routes</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            All required pages exist as static shells and render in the production build.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-muted p-6 sm:col-span-2 xl:col-span-1">
          <p className="text-sm font-semibold text-ink">Next steps</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Sprint 1 will replace these shells with the shared brand system and reusable components.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink no-underline transition hover:border-green hover:text-green"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </RouteShell>
  );
}
