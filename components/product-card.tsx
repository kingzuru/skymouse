import Link from 'next/link';

import { Card } from '@/components/card';
import { CardMedia } from '@/components/card-media';

type ProductCardProps = {
  title: string;
  description: string;
  href?: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePriority?: boolean;
};

export function ProductCard({
  title,
  description,
  href,
  label,
  imageSrc,
  imageAlt,
  imagePosition,
  imagePriority,
}: ProductCardProps) {
  const content = (
    <Card className="overflow-hidden bg-forest-deep p-6 text-white transition hover:-translate-y-0.5">
      <CardMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        imagePriority={imagePriority}
        tone="dark"
        className="aspect-[16/10]"
      />
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{label ?? 'Product'}</p>
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
