import type { ReactNode } from 'react';

import { Container } from '@/components/container';

type SectionProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
  paddingClassName?: string;
};

export function Section({ children, className = '', muted = false, id, paddingClassName = 'py-16 sm:py-20' }: SectionProps) {
  return (
    <section id={id} className={`${muted ? 'bg-muted' : 'bg-white'} ${paddingClassName} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
