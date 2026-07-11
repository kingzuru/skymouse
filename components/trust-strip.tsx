import { CircuitMotif } from '@/components/circuit-motif';

type TrustStripProps = {
  items: Array<{
    title: string;
    body: string;
  }>;
  className?: string;
};

export function TrustStrip({ items, className = '' }: TrustStripProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-muted p-6 sm:p-8 ${className}`.trim()}>
      <CircuitMotif className="opacity-35" />
      <div className="relative z-10 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl bg-white/80 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
