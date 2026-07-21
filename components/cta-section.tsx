import { Button } from '@/components/button';
import { Section } from '@/components/section';

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
};

export function CTASection({ eyebrow, title, description, primaryAction, secondaryAction }: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden bg-forest-deep text-white">
      <div className="relative z-10 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="max-w-2xl">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primaryAction.href} variant="accent">
            {primaryAction.label}
          </Button>
          {secondaryAction ? (
            <Button
              href={secondaryAction.href}
              variant="secondary"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
