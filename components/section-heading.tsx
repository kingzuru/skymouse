import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`${className} ${alignClass}`.trim()}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
