import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-site items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-muted">
          The requested page does not exist in this static foundation.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-green px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-forest"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
