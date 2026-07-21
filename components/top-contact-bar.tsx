import type { ReactNode } from 'react';

import { Container } from '@/components/container';

function Icon({ children }: { children: ReactNode }) {
  return <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">{children}</span>;
}

export function TopContactBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-[#08331a] bg-forest-deep text-white">
      <Container className="flex h-8 items-center justify-between gap-4 overflow-hidden text-[12px]">
        <div className="hidden min-w-0 items-center gap-3 md:flex">
          <span className="hidden truncate text-xs font-medium tracking-[0.18em] text-white/80 lg:block">
            Digital Systems. Real Impact.
          </span>
        </div>

        <div className="flex min-w-0 items-center gap-2 text-xs font-medium sm:gap-3">
          <a
            href="tel:+26772233189"
            aria-label="Call Skymouse at +267 7223 3189"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/80 no-underline transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <Icon>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                <path d="M5.1 2.5h2.2c.4 0 .8.3.9.7l.8 3.4c.1.4 0 .8-.3 1.1L7.4 9c.9 1.8 2.4 3.3 4.2 4.2l1.3-1.4c.3-.3.7-.4 1.1-.3l3.4.8c.4.1.7.5.7.9v2.2c0 .5-.4.9-.9 1-8.2.7-14.7-5.9-14-14 .1-.5.5-.9 1-.9Z" />
              </svg>
            </Icon>
            <span className="hidden sm:inline">+267 7223 3189</span>
            <span className="sm:hidden">Tel</span>
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a
            href="mailto:info@skymouse.co.bw"
            aria-label="Email Skymouse at info@skymouse.co.bw"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/80 no-underline transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <Icon>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v11A1.5 1.5 0 0 1 15.5 17h-11A1.5 1.5 0 0 1 3 15.5v-11Zm2 .25v1.9l4.8 3.4 4.8-3.4v-1.9H5Zm9.6 3.2-4.2 3-4.2-3V15h8.4V7.95Z" />
              </svg>
            </Icon>
            <span className="hidden sm:inline">info@skymouse.co.bw</span>
            <span className="sm:hidden">Email</span>
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a
            href="https://www.linkedin.com/company/skymouse/"
            target="_blank"
            rel="noreferrer"
            aria-label="Skymouse on LinkedIn"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/80 no-underline transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <Icon>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                <path d="M4.6 3.7A1.3 1.3 0 1 1 4.6 1a1.3 1.3 0 0 1 0 2.7ZM3.2 18.8V6h2.8v12.8H3.2Zm5.1 0V6h2.7v1.7h.1c.4-.7 1.4-1.9 3.2-1.9 3.4 0 4 2.2 4 5v8h-2.8V12c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.9H8.3Z" />
              </svg>
            </Icon>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
