import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { products } from '@/lib/portfolio';

export const metadata: Metadata = createPageMetadata({
  title: 'Products',
  description:
    'Skymouse products for governance, digital approvals and institutional operations.',
  path: '/products',
});

export default function ProductsPage() {
  const [konvox, approval] = products;

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Reusable platforms for recurring institutional problems."
        description="Custom development remains important, but institutions often face the same fundamental challenges. Skymouse is turning repeated delivery experience into configurable products that can be implemented faster, improved continuously and supported over the long term."
        primaryAction={{ href: '/contact', label: 'Request a demo' }}
        secondaryAction={{ href: '/projects', label: 'See projects' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Product strategy"
          title="Konvox leads the product portfolio."
          description="The product pages separate owned capability from client delivery work so the company’s IP is visible and distinct."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
              {konvox.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{konvox.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{konvox.overview}</p>
            <div className="mt-6 rounded-2xl border border-border bg-forest-deep p-5 text-white">
              <p className="text-sm font-semibold text-gold">Problems it addresses</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/80">
                {konvox.problems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="accent">
                {konvox.callToAction}
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden bg-forest-deep p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Workflow capability
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{approval.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">{approval.overview}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Product principle</p>
              <p className="mt-3 text-sm leading-7 text-white/80">{approval.principle}</p>
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="secondary" className="!border-white/40 !text-white hover:!bg-white/10">
                {approval.callToAction}
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Capabilities"
          title="Konvox functionality and audience."
          description="The platform is designed for boards, secretariats and institutions that need a reliable governance workspace and an auditable institutional record."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Core capabilities
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
              {konvox.capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Best suited for
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {konvox.audience.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Positioning"
          title="Product IP is not confused with client delivery work."
          description="A Skymouse product should create recurring value, deepen our expertise, reduce implementation risk and give clients a dependable path for ongoing improvement."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Product philosophy
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We do not build products merely to add logos to a portfolio. We build products where
              there is a credible operating knowledge base and a repeatable institutional problem
              to solve.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Future product areas
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Skymouse will add products only where it has credible operating knowledge and a
              repeatable institutional problem to solve.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Governance action and compliance tracking',
                'Institutional performance monitoring',
                'Revenue and debtor-management support',
                'Secure document collaboration',
                'Regulatory and tribunal workflows',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Request a demonstration
          </Button>
          <Button href="/projects" variant="secondary">
            See project evidence
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Request a focused discussion or product demonstration."
        description="We can walk your board, committee or governance office through Konvox or the digital signing direction."
        primaryAction={{ href: '/contact', label: 'Contact Skymouse' }}
        secondaryAction={{ href: '/projects', label: 'Review selected projects' }}
      />
    </>
  );
}
