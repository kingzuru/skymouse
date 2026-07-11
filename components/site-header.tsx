'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { BrandLogo } from '@/components/brand-logo';
import { Container } from '@/components/container';
import { navigation } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container className="flex items-center justify-between gap-4 py-4">
        <BrandLogo variant="horizontal" href="/" />

        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`text-sm font-medium no-underline transition hover:text-green ${
                pathname === item.href ? 'text-green' : 'text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="min-h-11 rounded-md border border-border px-3 py-2 text-sm font-medium text-ink transition hover:border-green hover:text-green md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-border bg-white md:hidden">
          <Container className="py-3">
            <nav id="mobile-navigation" className="flex flex-col" aria-label="Mobile primary">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`rounded-lg px-3 py-3 text-sm font-medium no-underline transition hover:bg-muted hover:text-green ${
                    pathname === item.href ? 'bg-muted text-green' : 'text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
