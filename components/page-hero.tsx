import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import { CircuitMotif } from '@/components/circuit-motif';
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
  children?: ReactNode;
  tone?: 'light' | 'dark';
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  tone = 'light',
}: PageHeroProps) {
  const dark = tone === 'dark';

  return (
    <Section className={dark ? 'relative overflow-hidden bg-forest-deep text-white' : 'relative overflow-hidden bg-white'} muted={false}>
      <CircuitMotif className={dark ? 'opacity-70' : 'opacity-50'} />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
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
        </div>
        {children ? <div className="relative">{children}</div> : null}
      </div>
    </Section>
  );
}
