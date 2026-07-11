import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Skymouse, an independent Botswana technology company building systems for governance, operations and institutional performance.',
  path: '/about',
});

const principles = [
  {
    title: 'We start with the operating problem',
    body: 'We examine how decisions are made, how work moves, where information is lost and what the organisation must be able to prove. Technology follows that understanding.',
  },
  {
    title: 'We think beyond the project',
    body: 'Every implementation should leave behind stronger capability: a maintainable system, better data, clearer processes, reusable knowledge and reduced operational dependence.',
  },
  {
    title: 'We favour ownership and portability',
    body: 'We use open standards and open-source technologies where they strengthen the client’s control, reduce avoidable lock-in and support long-term sustainability.',
  },
  {
    title: 'We stay close to delivery',
    body: 'Architecture, software engineering, deployment, data, training and support are connected responsibilities rather than isolated workstreams.',
  },
];

const workflow = [
  'Discover the institution, users, workflows, controls, constraints and intended outcomes.',
  'Design the service model, system architecture and user experience around the operating problem.',
  'Build in controlled increments and incorporate grounded feedback as the work progresses.',
  'Integrate the platform with existing data, systems, reporting structures and institutional processes.',
  'Operate with support for deployment, adoption, maintenance, security, continuity and improvement.',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Skymouse"
        title="We build technology around institutions, not trends."
        description="Skymouse is an independent Botswana technology company that designs, develops and manages digital systems for governance, institutional performance, enterprise operations and public service delivery. We work with organisations whose technology must do more than look modern. It must support decisions, preserve records, coordinate people, improve visibility and remain dependable after implementation."
        primaryAction={{ href: '/contact', label: 'Discuss a project' }}
        secondaryAction={{ href: '/solutions', label: 'View solutions' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Our story"
          title="From software development to institutional capability."
          description="Skymouse began as a software-development company, but our experience has pushed us beyond the traditional dev-shop model. Delivering systems in real institutional environments taught us that code is only one part of the work. Successful technology also requires an understanding of governance, operating processes, user behaviour, legacy systems, hosting, support and long-term ownership."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Our purpose</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              To build independent digital capability that helps African institutions govern,
              operate and deliver with greater confidence.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Mission</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              To design, develop and manage dependable technology platforms that improve
              accountability, institutional performance and service delivery.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Vision</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              To become a trusted African technology company known for governance platforms,
              institutional systems and open digital infrastructure.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Direction
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We are building reusable platforms, delivery methods and technical capability in
              areas where institutions repeatedly face the same problems: fragmented governance
              records, manual approvals, disconnected reporting, weak operational visibility and
              dependence on systems they do not fully control.
            </p>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="What makes us different"
          title="We stay accountable for the system, not only the delivery date."
          description="The market has many companies that can build a feature. Skymouse is building the capability to understand the institution, create the system and remain accountable for whether it works."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle.title} className="p-6">
              <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{principle.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A delivery model shaped by institutional reality."
          description="We combine strategic thinking with practical implementation. Architecture, software engineering, deployment, data, training and support are connected responsibilities rather than isolated workstreams."
        />
        <div className="mt-8 grid gap-4">
          {workflow.map((step, index) => (
            <Card key={step} className="p-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-green text-sm font-semibold text-green">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="pt-1 text-sm leading-7 text-muted">{step}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Who we work with"
          title="Serious institutions that need a partner, not a commodity supplier."
          description="We are best suited to organisations that need a technology partner rather than a one-off vendor. This includes public bodies, boards, regulators, councils, research institutions, property organisations, professional firms and growing enterprises."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Independence by design
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We favour open standards, portable architectures and open-source technologies that
              reduce unnecessary vendor dependence.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Local understanding, enterprise discipline
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We understand Botswana’s institutional environment while applying sound engineering,
              governance and delivery practices.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects" variant="secondary">
            Review selected work
          </Button>
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Closing statement"
        title="The market has many companies that can build a feature."
        description="Skymouse is building the capability to understand the institution, create the system and remain accountable for whether it works."
        primaryAction={{ href: '/contact', label: 'Discuss your requirement' }}
        secondaryAction={{ href: '/solutions', label: 'See how we work' }}
      />
    </>
  );
}
