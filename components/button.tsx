import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-green text-white hover:bg-forest focus-visible:ring-green',
  secondary: 'border border-forest bg-transparent text-forest hover:bg-surface-green focus-visible:ring-green',
  accent: 'bg-orange text-white hover:bg-[#c95f10] focus-visible:ring-gold',
};

export function Button({ href, children, variant = 'primary', className = '', external = false }: ButtonProps) {
  const shared =
    `inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition ` +
    `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`;

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={shared} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={shared}>
      {children}
    </Link>
  );
}
