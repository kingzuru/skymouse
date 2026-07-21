import Link from 'next/link';

import { Card } from '@/components/card';
import { CardMedia } from '@/components/card-media';

type ProjectCardProps = {
  title: string;
  description: string;
  sector: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePriority?: boolean;
};

export function ProjectCard({
  title,
  description,
  sector,
  href,
  imageSrc,
  imageAlt,
  imagePosition,
  imagePriority,
}: ProjectCardProps) {
  const content = (
    <Card className="p-6 transition hover:-translate-y-0.5 hover:border-green">
      <CardMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        imagePriority={imagePriority}
        tone="light"
        className="aspect-[16/10]"
      />
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-green">{sector}</p>
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
