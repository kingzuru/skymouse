import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { insights, readingTime } from '@/lib/insights';

export const metadata: Metadata = createPageMetadata({
  title: 'Insights',
  description:
    'Skymouse perspectives on governance technology, institutional systems, open source and digital transformation in Africa.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking beyond software delivery."
        description="Technology decisions shape how institutions govern, preserve knowledge, manage risk and serve people. Skymouse Insights examines the practical questions behind digital transformation, governance technology, open source and institutional capability."
        primaryAction={{ href: '/contact', label: 'Talk to Skymouse' }}
        secondaryAction={{ href: '/solutions', label: 'Explore solutions' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Editorial themes"
          title="Questions that matter to institutions."
          description="The articles are designed to be understandable to executives, governance professionals and technical readers."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.slug} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
                {insight.category}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-ink">{insight.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{insight.summary}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-ink">
                {readingTime(insight.summary.split(/\s+/).length + insight.lead.split(/\s+/).length)} min read
              </p>
              <div className="mt-5">
                <Link href={`/insights/${insight.slug}`} className="text-sm font-semibold text-green">
                  Read article
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Publishing standard"
          title="Every article should improve decisions."
          description="Begin with a clear institutional problem, use practical examples rather than empty technology language, and end with an intelligent conclusion or practical principle."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              What the articles do
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              They examine governance, open source, systems thinking and digital transformation in
              a way that remains useful to institutions.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              What they avoid
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Exaggerated claims, sales language and content that reads like a brochure rather than
              an informed point of view.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Follow Skymouse
          </Button>
          <Button href="/projects" variant="secondary">
            See project evidence
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Ideas"
        title="Ideas are useful when they improve decisions."
        description="Follow Skymouse for practical thinking on governance, institutional technology and digital independence."
        primaryAction={{ href: '/contact', label: 'Get in touch' }}
        secondaryAction={{ href: '/about', label: 'Learn about Skymouse' }}
      />
    </>
  );
}
