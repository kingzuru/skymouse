'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/button';
import { BrandLogo } from '@/components/brand-logo';
import { Container } from '@/components/container';
import { navigation } from '@/lib/site';

function NavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
      className={`border-b pb-1 text-sm font-medium no-underline transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        active ? 'border-green text-green' : 'border-transparent text-ink hover:border-green hover:text-green'
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-8 z-40 border-b border-border bg-white">
      <Container className="flex min-h-[74px] items-center py-3.5">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo variant="horizontal" href="/" />

          <nav className="hidden items-center gap-12 xl:flex" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button href="/contact" variant="accent" className="rounded-lg px-5">
              Discuss a Project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium text-ink transition hover:border-green hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border bg-white xl:hidden">
            <div className="grid gap-6 py-4">
              <nav id="mobile-navigation" className="grid gap-2" aria-label="Mobile primary">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={pathname === item.href}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </nav>

              <div className="grid gap-3 border-t border-border pt-4">
                <Button
                  href="/contact"
                  variant="accent"
                  className="w-full rounded-lg px-5"
                  onClick={() => setMobileOpen(false)}
                >
                  Discuss a Project
                </Button>
                <div className="grid gap-2 text-sm text-ink">
                  <a
                    href="tel:+26772233189"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Call Skymouse at +267 7223 3189"
                    className="text-ink no-underline transition hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    +267 7223 3189
                  </a>
                  <a
                    href="mailto:info@skymouse.co.bw"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Email Skymouse at info@skymouse.co.bw"
                    className="text-ink no-underline transition hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    info@skymouse.co.bw
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
