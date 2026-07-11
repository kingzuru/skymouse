import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { getProjectBySlug, projects } from '@/lib/portfolio';
import { projectSchema } from '@/lib/schema';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: 'Project',
      description: 'Project detail page.',
      path: `/projects/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />
      <PageHero
        eyebrow={project.sector}
        title={project.title}
        description={project.summary}
        primaryAction={{ href: '/contact', label: 'Discuss a similar system' }}
        secondaryAction={{ href: '/projects', label: 'Back to projects' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Project summary"
          title="Problem, intervention and outcome."
          description="The page structure stays restrained and evidence-led so the public record remains accurate."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Intervention</p>
            <p className="mt-3 text-sm leading-7 text-muted">{project.intervention}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Delivery type</p>
            <p className="mt-3 text-sm leading-7 text-muted">{project.deliveryType}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Outcome</p>
            <p className="mt-3 text-sm leading-7 text-muted">{project.outcome}</p>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Skymouse contribution"
          title="The work performed on this engagement."
          description="The content remains intentionally restrained and avoids unsupported metrics or client claims."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
          <Card className="p-6">
            <ul className="space-y-3 text-sm leading-6 text-muted">
              {project.contribution.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Sector</p>
            <p className="mt-3 text-sm leading-7 text-muted">{project.sector}</p>
            {project.publishNote ? (
              <p className="mt-5 rounded-2xl border border-border bg-orange-soft p-4 text-sm leading-6 text-muted">
                {project.publishNote}
              </p>
            ) : null}
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Discuss a similar engagement
          </Button>
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Bring us the institutional problem, not a preselected technology."
        description="Skymouse can help determine what should be configured, integrated, built or left alone."
        primaryAction={{ href: '/contact', label: 'Start a conversation' }}
        secondaryAction={{ href: '/solutions', label: 'Review solutions' }}
      />
    </>
  );
}
