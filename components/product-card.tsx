import Link from 'next/link';

import { Card } from '@/components/card';

type ProductCardProps = {
  title: string;
  description: string;
  href?: string;
  label?: string;
};

export function ProductCard({ title, description, href, label }: ProductCardProps) {
  const content = (
    <Card className="overflow-hidden bg-forest-deep p-6 text-white transition hover:-translate-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{label ?? 'Product'}</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/80">{description}</p>
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
