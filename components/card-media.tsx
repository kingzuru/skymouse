import Image from 'next/image';

type CardMediaProps = {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePriority?: boolean;
  tone?: 'light' | 'dark';
  className?: string;
};

export function CardMedia({
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
  imagePriority = false,
  tone = 'light',
  className = '',
}: CardMediaProps) {
  const frameClassName =
    tone === 'dark'
      ? 'border-white/10 bg-white/5'
      : 'border-border bg-muted';

  if (imageSrc) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border ${frameClassName} ${className}`.trim()}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          unoptimized
          priority={imagePriority}
          sizes="(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw"
          style={{ objectPosition: imagePosition }}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border ${frameClassName} ${className}`.trim()}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gold/70" />
      <div className="absolute left-4 top-4 h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
      <div className="absolute right-4 top-4 h-6 w-6 rounded-full border border-white/10 bg-white/5" />
      <div className="absolute left-20 top-5 h-px w-24 bg-white/10" />
      <div className="absolute bottom-4 left-4 h-14 w-px bg-white/10" />
      <div className="absolute bottom-4 left-4 right-4 h-px bg-white/10" />
    </div>
  );
}
