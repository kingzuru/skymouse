import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { projects } from '@/lib/portfolio';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description:
    'Selected Skymouse work across governance, research, property, public-sector systems and enterprise platforms.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Technology shaped by real institutions, real constraints and real responsibility."
        description="Our work spans governance, research, property, public-sector operations and enterprise digital platforms. These engagements have strengthened our ability to work with existing systems, complex stakeholders, legacy data, governance requirements and long-term support expectations."
        primaryAction={{ href: '/contact', label: 'Discuss a project' }}
        secondaryAction={{ href: '/products', label: 'View products' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Project evidence"
          title="Selected work from approved content."
          description="The project list is structured so that future static detail pages can expand without a CMS."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              sector={project.sector}
              description={project.summary}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Project principles"
          title="Skymouse aims to work with the institution, not around it."
          description="Across projects, Skymouse aims to understand the operating environment before prescribing technology, preserve useful existing systems where replacement is unnecessary, build maintainable architectures and clear ownership, improve institutional visibility and control, and remain accountable beyond initial deployment."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Future expansion
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              New projects can be added through local content and promoted into static detail
              pages when required.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Publication note
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Only publish client names, detailed scopes or screenshots once they are approved for
              public reference.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Talk about your system
          </Button>
          <Button href="/solutions" variant="secondary">
            Explore solutions
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Have a system that must work in the real world?"
        description="Discuss your project with Skymouse."
        primaryAction={{ href: '/contact', label: 'Discuss your project' }}
        secondaryAction={{ href: '/solutions', label: 'Review solutions' }}
      />
    </>
  );
}
