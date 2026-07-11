import type { ReactNode } from 'react';

import { Container } from '@/components/container';

type RouteShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function RouteShell({ eyebrow, title, description, children }: RouteShellProps) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      </div>

      {children ? <div className="mt-12">{children}</div> : null}
    </Container>
  );
}
