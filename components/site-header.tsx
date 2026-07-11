import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';
import { Container } from '@/components/container';
import { navigation } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container className="flex items-center justify-between gap-4 py-4">
        <BrandLogo variant="horizontal" href="/" />

        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink no-underline transition hover:text-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-2 text-sm font-medium text-ink">
            Menu
          </summary>
          <div className="absolute right-0 z-20 mt-2 w-56 rounded-xl border border-border bg-white p-2 shadow-soft">
            <nav className="flex flex-col" aria-label="Mobile primary">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink no-underline transition hover:bg-muted hover:text-green"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
