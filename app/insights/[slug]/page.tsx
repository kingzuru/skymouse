import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { getInsightBySlug, insights, readingTime } from '@/lib/insights';
import { articleSchema } from '@/lib/schema';

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return createPageMetadata({
      title: 'Insight',
      description: 'Insight article.',
      path: `/insights/${slug}`,
    });
  }

  return createPageMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const words = insight.summary.split(/\s+/).length + insight.lead.split(/\s+/).length + insight.points.join(' ').split(/\s+/).length + insight.conclusion.split(/\s+/).length;
  const minutes = readingTime(words);

  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(insight)) }}
      />
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.summary}
        primaryAction={{ href: '/contact', label: 'Discuss this topic' }}
        secondaryAction={{ href: '/insights', label: 'Back to insights' }}
      />

      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green">{minutes} min read</p>
          <p className="mt-4 text-base leading-8 text-muted">{insight.lead}</p>
        </div>

        <div className="mt-10 grid gap-5">
          {insight.points.map((point) => (
            <Card key={point} className="p-6">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Conclusion</p>
          <p className="mt-3 text-sm leading-7 text-muted">{insight.conclusion}</p>
        </Card>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Related insights"
          title="Continue the conversation."
          description="Related articles keep the editorial section connected without becoming a content farm."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <Card key={item.slug} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">{item.category}</p>
              <h2 className="mt-3 text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              <div className="mt-5">
                <Link href={`/insights/${item.slug}`} className="text-sm font-semibold text-green">
                  Read article
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Talk to Skymouse
          </Button>
          <Button href="/products" variant="secondary">
            Review products
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Practical thinking"
        title="Ideas are useful when they improve decisions."
        description="Follow Skymouse for practical thinking on governance, institutional technology and digital independence."
        primaryAction={{ href: '/contact', label: 'Get in touch' }}
        secondaryAction={{ href: '/projects', label: 'See project evidence' }}
      />
    </>
  );
}
