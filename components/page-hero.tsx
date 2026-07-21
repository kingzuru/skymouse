import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import { InstitutionalGrid } from '@/components/institutional-grid';
import { Section } from '@/components/section';

type Action = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'accent';
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  supportingLine?: string;
  credibilityItems?: string[];
  children?: ReactNode;
  tone?: 'light' | 'dark';
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  supportingLine,
  credibilityItems,
  children,
  tone = 'light',
  compact = false,
}: PageHeroProps) {
  const dark = tone === 'dark';

  return (
    <Section
      paddingClassName={compact ? 'py-12 sm:py-16' : undefined}
      className={dark ? 'relative overflow-hidden bg-forest-deep text-white' : 'relative overflow-hidden bg-white'}
      muted={false}
    >
      <InstitutionalGrid className={dark ? 'opacity-100' : 'opacity-80'} />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${dark ? 'text-gold' : 'text-green'}`}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className={`mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-ink'}`}>
            {title}
          </h1>
          <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${dark ? 'text-white/80' : 'text-muted'}`}>
            {description}
          </p>
          {(primaryAction || secondaryAction) ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                <Button href={primaryAction.href} variant={primaryAction.variant ?? 'primary'}>
                  {primaryAction.label}
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button href={secondaryAction.href} variant={secondaryAction.variant ?? 'secondary'}>
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          ) : null}
          {supportingLine || credibilityItems?.length ? (
            <div className="mt-6 space-y-4">
              {supportingLine ? (
                <p className={`text-sm font-medium tracking-[0.18em] uppercase ${dark ? 'text-white/70' : 'text-green'}`}>
                  {supportingLine}
                </p>
              ) : null}
              {credibilityItems?.length ? (
                <div className="grid gap-2 sm:grid-cols-3">
                  {credibilityItems.map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                        dark ? 'border-white/10 bg-white/5 text-white/80' : 'border-border bg-muted text-ink'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        {children ? <div className="relative">{children}</div> : null}
      </div>
    </Section>
  );
}
