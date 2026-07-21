import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  variant?: 'full' | 'horizontal' | 'icon';
  tone?: 'light' | 'dark';
  href?: string;
  className?: string;
};

const logoSrc = '/skymouse_logo.svg';
const bannerSrc = '/mouselogo_banner.svg';

const variantClasses: Record<NonNullable<BrandLogoProps['variant']>, string> = {
  icon: 'h-10 w-auto',
  horizontal: 'w-[208px] h-auto sm:w-[214px]',
  full: 'w-[150px] h-auto sm:w-[168px]',
};

const variantSizes: Record<NonNullable<BrandLogoProps['variant']>, string> = {
  icon: '40px',
  horizontal: '214px',
  full: '168px',
};

export function BrandLogo({ variant = 'horizontal', tone = 'dark', href = '/', className = '' }: BrandLogoProps) {
  const src = variant === 'icon' ? logoSrc : bannerSrc;
  const logo = (
    <span className={`inline-flex shrink-0 ${className}`.trim()}>
      <Image
        src={src}
        alt="Skymouse logo"
        width={variant === 'icon' ? 512 : 800}
        height={variant === 'icon' ? 512 : 200}
        unoptimized
        priority={variant === 'horizontal'}
        sizes={variantSizes[variant]}
        className={`block ${variantClasses[variant]} ${tone === 'light' ? 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.16)]' : 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.08)]'}`.trim()}
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex no-underline" aria-label="Skymouse home">
        {logo}
      </Link>
    );
  }

  return logo;
}
