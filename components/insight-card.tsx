import Link from 'next/link';

import { Card } from '@/components/card';

type InsightCardProps = {
  title: string;
  description: string;
  meta?: string;
  href?: string;
};

export function InsightCard({ title, description, meta, href }: InsightCardProps) {
  const content = (
    <Card className="p-6 transition hover:-translate-y-0.5 hover:border-green">
      {meta ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">{meta}</p> : null}
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
