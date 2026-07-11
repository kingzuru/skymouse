import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { CTASection } from '@/components/cta-section';
import { CircuitMotif } from '@/components/circuit-motif';
import { BrandLogo } from '@/components/brand-logo';
import { PageHero } from '@/components/page-hero';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { SolutionCard } from '@/components/solution-card';
import { ProductCard } from '@/components/product-card';
import { InsightCard } from '@/components/insight-card';
import { TrustStrip } from '@/components/trust-strip';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Style Guide',
  description: 'Temporary component reference for the Sprint 1 design system.',
  path: '/style-guide',
});

export default function StyleGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Style guide"
        title="Sprint 1 design system"
        description="A temporary reference page showing the reusable interface primitives created for the brand system."
        primaryAction={{ href: '/contact', label: 'Primary button' }}
        secondaryAction={{ href: '/solutions', label: 'Secondary button', variant: 'secondary' }}
      >
        <div className="rounded-3xl border border-border bg-muted p-6">
          <BrandLogo variant="full" />
          <div className="mt-6 text-sm text-muted">
            <p>Logo slots</p>
            <div className="mt-4 flex items-center gap-4">
              <BrandLogo variant="horizontal" />
              <BrandLogo variant="icon" />
              <BrandLogo variant="horizontal" tone="light" className="rounded-2xl bg-forest-deep px-4 py-3" />
            </div>
          </div>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Buttons"
          title="Action hierarchy"
          description="Primary, secondary and strategic accent buttons use the approved brand palette and visible focus states."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Primary
          </Button>
          <Button href="/solutions" variant="secondary">
            Secondary
          </Button>
          <Button href="/contact" variant="accent">
            Accent
          </Button>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Cards"
          title="Reusable card types"
          description="The cards reflect the page roles described in the sprint plan."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <SolutionCard title="Governance technology" description="A structured capability card for institutional solutions." index="01" />
          <ProductCard title="Konvox Digital Boards" description="A product-led surface with stronger contrast and dark treatment." />
          <ProjectCard title="RAMDDA Platform" description="Evidence-led project framing with sector context." sector="Research and higher education" />
          <InsightCard title="Governance needs a system of record" description="Editorial card for long-form insights and thought leadership." meta="Insight" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Capability"
          title="Trust strip and motif"
          description="A restrained circuit pathway motif is available for section dividers, headers and call-to-action blocks."
        />
        <div className="mt-8">
          <TrustStrip
            items={[
              { title: 'Institutional', body: 'Designed around governance, operations and long-term accountability.' },
              { title: 'Independent', body: 'Built for portability, open standards and reduced vendor dependence.' },
              { title: 'Enterprise-grade', body: 'Calm layouts, semantic tokens and accessible interaction states.' },
            ]}
          />
        </div>
        <div className="relative mt-10 h-32 overflow-hidden rounded-2xl border border-border bg-white">
          <CircuitMotif />
        </div>
      </Section>

      <CTASection
        eyebrow="Call to action"
        title="Temporary system reference"
        description="This page exists for Sprint 1 review only and will be removed or replaced when the final page compositions are built."
        primaryAction={{ href: '/contact', label: 'Discuss a project' }}
        secondaryAction={{ href: '/', label: 'Back to home' }}
      />
    </>
  );
}
