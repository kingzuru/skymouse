import Link from 'next/link';

type BrandLogoProps = {
  variant?: 'full' | 'horizontal' | 'icon';
  tone?: 'light' | 'dark';
  href?: string;
  className?: string;
};

function LogoMark({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const body = tone === 'light' ? '#FFFFFF' : '#0A5C2E';
  const inner = tone === 'light' ? '#EAF4EE' : '#F5F7F6';
  const accent = '#E86F14';
  const node = '#D4AF37';

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="48" height="48" rx="14" fill={body} />
      <path
        d="M20 18c0-4 3.2-7 7.2-7h9.8c5.5 0 10 4.5 10 10v15.5C47 43 42 48 35.5 48H29c-5 0-9-4-9-9V18Z"
        fill={inner}
      />
      <path
        d="M23 24h13.8a5 5 0 0 1 5 5v8.2a4.8 4.8 0 0 1-4.8 4.8h-9.5c-3.5 0-6.3-2.8-6.3-6.3V28a4 4 0 0 1 4-4Z"
        fill={tone === 'light' ? '#0F7B3E' : '#0F7B3E'}
      />
      <circle cx="39.5" cy="23.5" r="2" fill={node} />
      <path d="M31 34c4.6 0 9 2.6 11.8 7" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function BrandLogo({ variant = 'horizontal', tone = 'dark', href = '/', className = '' }: BrandLogoProps) {
  const markSize = variant === 'icon' ? 'h-10 w-10' : variant === 'full' ? 'h-14 w-14' : 'h-11 w-11';

  const content = (
    <>
      <span className={markSize}>
        <LogoMark tone={tone} />
      </span>
      {variant !== 'icon' ? (
        <span className="flex flex-col leading-none">
          <span className={`text-sm font-semibold tracking-[0.18em] ${tone === 'light' ? 'text-white' : 'text-ink'}`}>
            SKYMOUSE
          </span>
          <span className={`mt-1 text-[0.68rem] font-medium tracking-[0.22em] ${tone === 'light' ? 'text-white/80' : 'text-green'}`}>
            DIGITAL SYSTEMS. REAL IMPACT.
          </span>
        </span>
      ) : null}
    </>
  );

  const shared = `inline-flex items-center gap-3 no-underline ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={shared} aria-label="Skymouse home">
        {content}
      </Link>
    );
  }

  return <div className={shared}>{content}</div>;
}
