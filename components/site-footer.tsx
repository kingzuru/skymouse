import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';
import { Container } from '@/components/container';
import { navigation, siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <BrandLogo variant="full" />
            <p className="mt-3 text-sm leading-6 text-ink">{siteConfig.footerStatement}</p>
            <p className="mt-4 text-sm leading-6 text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                Explore
              </h2>
              <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-ink no-underline transition hover:text-green"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                Contact
              </h2>
              <div className="mt-4 space-y-2 text-sm text-ink">
                <p>{siteConfig.name}</p>
                <p>{siteConfig.location}</p>
                <a href="mailto:info@skymouse.co.bw" className="text-green">
                  info@skymouse.co.bw
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
