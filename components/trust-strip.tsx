type TrustStripProps = {
  items: Array<{
    title: string;
    body: string;
  }>;
  className?: string;
};

export function TrustStrip({ items, className = '' }: TrustStripProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-muted ${className}`.trim()}>
      <div className="grid gap-px md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="bg-white p-6">
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
