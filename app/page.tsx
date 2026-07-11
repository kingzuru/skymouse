import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { CTASection } from '@/components/cta-section';
import { Card } from '@/components/card';
import { PageHero } from '@/components/page-hero';
import { ProductCard } from '@/components/product-card';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { SolutionCard } from '@/components/solution-card';
import { TrustStrip } from '@/components/trust-strip';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Home',
  description: siteConfig.description,
  path: '/',
});

const solutionCards = [
  {
    title: 'Governance technology',
    description:
      'Platforms for boards, committees and governance professionals to manage meetings, decisions, actions, records and accountability.',
    index: '01',
  },
  {
    title: 'Enterprise and public-sector systems',
    description:
      'Purpose-built applications that digitise operational workflows, performance monitoring, reporting, revenue processes and public services.',
    index: '02',
  },
  {
    title: 'Digital platforms and websites',
    description:
      'Institutional websites, portals, knowledge platforms and content systems designed around credibility, accessibility and long-term maintainability.',
    index: '03',
  },
  {
    title: 'Managed open-source infrastructure',
    description:
      'Deployment, hosting, integration, maintenance and support for open-source business platforms that give organisations greater control over their technology.',
    index: '04',
  },
];

const products = [
  {
    title: 'Konvox Digital Boards',
    description:
      'A governance workspace for boards and committees. Konvox brings meetings, agendas, packs, resolutions, actions, declarations, voting and institutional records into one controlled environment.',
    href: '/products',
    label: 'Lead product',
  },
  {
    title: 'Digital signing and approval',
    description:
      'A managed digital-signature capability built around open technologies, designed to support secure document approvals without unnecessary dependence on closed proprietary platforms.',
    href: '/products',
    label: 'Workflow capability',
  },
];

const projects = [
  {
    title: 'RAMDDA Platform',
    sector: 'Research and higher education',
    description:
      'A digital platform supporting Research and Academic Mobility for Drug Discovery in Africa.',
    href: '/projects',
  },
  {
    title: 'BR Properties Digital Platform',
    sector: 'Property and real estate',
    description:
      'A modern corporate and property portfolio website designed to communicate identity, services, leadership, portfolio and opportunities with greater clarity.',
    href: '/projects',
  },
  {
    title: 'Konvox Governance Platform',
    sector: 'Corporate governance',
    description:
      'A board and committee management platform designed to improve meeting preparation, controlled information access, decision records, voting and accountability.',
    href: '/products',
  },
  {
    title: 'Municipal revenue and billing support',
    sector: 'Local government',
    description:
      'Specialised software and database support for municipal billing, reporting and revenue-management processes integrated with an existing accounting environment.',
    href: '/projects',
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Independent technology for stronger institutions"
        title="Digital systems built for governance, performance and lasting institutional value."
        description="Skymouse designs, develops and manages enterprise technology for organisations that must operate with greater control, accountability and confidence. From governance platforms and public-sector systems to digital services and managed infrastructure, we build technology around the realities of the institution, not around a fashionable stack or a vendor sales target."
        primaryAction={{ href: '/contact', label: 'Discuss your project', variant: 'accent' }}
        secondaryAction={{ href: '/projects', label: 'Explore our work' }}
      >
        <Card className="overflow-hidden border-0 bg-forest-deep p-6 text-white shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Digital Systems. Real Impact.
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            Built around the institution, not the trend cycle.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/80">
            The first release focuses on clarity, trust and long-term operability: governance,
            enterprise systems, digital platforms and managed infrastructure.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Governance</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Boards, committees and records that remain controlled and traceable.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Operations</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Workflows and systems designed for real users and existing processes.
              </p>
            </div>
          </div>
        </Card>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="We turn institutional problems into dependable digital systems."
          description="Our work sits where technology meets governance, operations and service delivery. We help organisations replace fragmented processes, disconnected documents and manual controls with systems that create visibility, structure and institutional memory."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Core positioning
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Skymouse is an independent Botswana technology company building digital systems for
              governance, institutional performance and enterprise transformation.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Who we serve
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Boards, committees, government departments, councils, regulators, research and
              education institutions, property organisations and African enterprises modernising
              critical operations.
            </p>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Trust and capability"
          title="Evidence from real institutional environments."
          description="Our experience includes governance, research, property, municipal revenue and enterprise digital platforms. Each engagement strengthens our understanding of how systems must work beyond the demonstration: with real users, existing processes, legacy data and long-term operational responsibilities."
        />
        <div className="mt-8">
          <TrustStrip
            items={[
              {
                title: 'Institutional systems',
                body: 'Platforms for governance, records, accountability and structured work.',
              },
              {
                title: 'Platform delivery',
                body: 'Corporate websites, portals and content systems built for maintainability.',
              },
              {
                title: 'Managed operations',
                body: 'Hosting, support and integration for open-source business platforms.',
              },
            ]}
          />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              sector={project.sector}
              description={project.description}
              href={project.href}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Solutions"
          title="Core commercial capabilities."
          description="Technology buzzwords stay secondary. Each capability is framed around the institutional problem it solves and the operational value it creates."
        >
          <Button href="/solutions" variant="secondary">
            View all solutions
          </Button>
        </SectionHeading>
        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {solutionCards.map((card) => (
            <SolutionCard
              key={card.title}
              title={card.title}
              description={card.description}
              index={card.index}
              href="/solutions"
            />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Products"
          title="Owned product capability, separated from client delivery."
          description="Konvox Digital Boards is the lead product. The roadmap also includes a managed digital signing and approval capability built around open technologies."
        >
          <Button href="/products" variant="secondary">
            View products
          </Button>
        </SectionHeading>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              href={product.href}
              label={product.label}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why Skymouse"
          title="We are building capability, not merely completing tickets."
          description="We begin with the institution, the problem and the value that must remain after implementation. Even in custom projects, we look for reusable knowledge, stronger methods and platform capabilities that improve future delivery."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Independent thinking
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We do not begin with a reseller catalogue. We begin with the institution, the
              problem and the value that must remain after implementation.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Product-minded delivery
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We aim for reusable knowledge, stronger methods and platform capability that improve
              future delivery rather than ending at the handoff.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Open-source advantage
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Where appropriate, we use open technologies to improve portability, transparency and
              control while reducing avoidable licensing dependence.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Long-term accountability
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Deployment, maintenance, adoption, security, data ownership and continuity are part
              of the solution.
            </p>
          </Card>
        </div>
      </Section>

      <CTASection
        eyebrow="Final call to action"
        title="Your institution does not need more software. It needs a system that improves how work gets done."
        description="Talk to Skymouse about the process, platform or institutional problem you are ready to solve."
        primaryAction={{ href: '/contact', label: 'Start a conversation' }}
        secondaryAction={{ href: '/projects', label: 'Review the work' }}
      />
    </>
  );
}
