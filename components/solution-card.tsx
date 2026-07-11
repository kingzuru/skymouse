import Link from 'next/link';

import { Card } from '@/components/card';

type SolutionCardProps = {
  title: string;
  description: string;
  href?: string;
  index?: string;
};

export function SolutionCard({ title, description, href, index }: SolutionCardProps) {
  const content = (
    <Card className="p-6 transition hover:-translate-y-0.5 hover:border-green">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-green text-sm font-semibold text-green">
          {index ?? '01'}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>
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
