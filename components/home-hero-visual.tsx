import { CardMedia } from '@/components/card-media';

type CapabilityRow = {
  title: string;
  body: string;
  meta: string;
};

type HomeHeroVisualProps = {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePriority?: boolean;
  sections?: CapabilityRow[];
};

const defaultSections: CapabilityRow[] = [
  {
    title: 'Governance',
    body: 'Boards, committees, records and approvals kept controlled.',
    meta: 'Controlled layer',
  },
  {
    title: 'Operations',
    body: 'Workflows, reporting and day-to-day institutional execution.',
    meta: 'Execution layer',
  },
  {
    title: 'Infrastructure',
    body: 'Hosting, integration and managed systems that stay dependable.',
    meta: 'Delivery layer',
  },
];

export function HomeHeroVisual({
  imageSrc,
  imageAlt,
  imagePosition,
  imagePriority,
  sections = defaultSections,
}: HomeHeroVisualProps) {
  if (imageSrc) {
    return (
      <CardMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        imagePriority={imagePriority}
        tone="dark"
        className="aspect-[16/13]"
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[#0a5c2e] bg-forest-deep p-5 text-white shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Capability view
          </p>
          <p className="mt-1 text-sm font-medium text-white/70">
            Built for controlled delivery
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
          Institutional fit
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`px-4 py-4 sm:px-5 ${index > 0 ? 'border-t border-white/10' : ''}`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_0_5px_rgba(212,175,55,0.08)]" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{section.title}</p>
                  <p className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-white/45 md:block">
                    {section.meta}
                  </p>
                </div>
                <p className="mt-2 max-w-[23rem] text-sm leading-6 text-white/75">
                  {section.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
        <span>Governance</span>
        <span>Operations</span>
        <span>Infrastructure</span>
      </div>
    </div>
  );
}
