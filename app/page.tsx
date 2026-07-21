import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { CTASection } from '@/components/cta-section';
import { Card } from '@/components/card';
import { HomeHeroVisual } from '@/components/home-hero-visual';
import { ProductCard } from '@/components/product-card';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { SolutionCard } from '@/components/solution-card';
import { TrustStrip } from '@/components/trust-strip';
import { InstitutionalGrid } from '@/components/institutional-grid';
import { createPageMetadata } from '@/lib/metadata';
import { homeAssets } from '@/lib/home-assets';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Institutional technology for stronger institutions',
  description: siteConfig.description,
  path: '/',
});

export const dynamic = 'force-static';

const heroCapabilityRows = [
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
    asset: homeAssets.products.konvoxProduct,
  },
  {
    title: 'Digital signing and approval',
    description:
      'A managed digital-signature capability built around open technologies, designed to support secure document approvals without unnecessary dependence on closed proprietary platforms.',
    href: '/products',
    label: 'Workflow capability',
    asset: homeAssets.products.opensign,
  },
];

const projects = [
  {
    title: 'RAMDDA Platform',
    sector: 'Research and higher education',
    description:
      'A digital platform supporting Research and Academic Mobility for Drug Discovery in Africa.',
    href: '/projects',
    asset: homeAssets.projects.ramdda,
  },
  {
    title: 'BR Properties Digital Platform',
    sector: 'Property and real estate',
    description:
      'A modern corporate and property portfolio website designed to communicate identity, services, leadership, portfolio and opportunities with greater clarity.',
    href: '/projects',
    asset: homeAssets.projects.brproperties,
  },
  {
    title: 'Konvox Governance Platform',
    sector: 'Corporate governance',
    description:
      'A board and committee management platform designed to improve meeting preparation, controlled information access, decision records, voting and accountability.',
    href: '/products',
    asset: homeAssets.projects.konvox,
  },
  {
    title: 'Municipal revenue and billing support',
    sector: 'Local government',
    description:
      'Specialised software and database support for municipal billing, reporting and revenue-management processes integrated with an existing accounting environment.',
    href: '/projects',
    asset: homeAssets.projects.cgapmis,
  },
];

export default function HomePage() {
  return (
    <>
      <Section
        paddingClassName="py-12 sm:py-16"
        className="relative overflow-hidden bg-white"
        muted={false}
      >
        <InstitutionalGrid className="opacity-70" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.24fr)_minmax(340px,0.76fr)] lg:items-start">
          <div className="max-w-[46rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
              Independent technology for stronger institutions
            </p>
            <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.03] xl:text-[3.6rem] xl:leading-[1.03]">
              <span className="inline lg:block">Digital systems for governance,</span>{' '}
              <span className="inline lg:block">performance and enduring</span>{' '}
              <span className="inline lg:block">institutional value.</span>
            </h1>
            <p className="mt-6 max-w-[40rem] text-base leading-7 text-muted sm:text-lg">
              Skymouse designs, develops and manages enterprise technology for organisations that
              must operate with greater control, accountability and confidence. From governance
              platforms and public-sector systems to digital services and managed infrastructure,
              we build technology around the realities of the institution, not around a fashionable
              stack or a vendor sales target.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" variant="accent" className="rounded-lg px-5">
                Discuss your project
              </Button>
              <Button href="/projects" variant="secondary">
                Explore our work
              </Button>
            </div>
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium tracking-[0.18em] uppercase text-green">
                Built for real institutional environments
              </p>
              <p className="text-sm font-medium text-ink/70">
                Governance platforms · Enterprise applications · Managed infrastructure
              </p>
            </div>
          </div>
          <div className="relative lg:mt-1">
            <HomeHeroVisual
              imageSrc={homeAssets.home.heroPlatformComposite.available ? homeAssets.home.heroPlatformComposite.src : undefined}
              imageAlt={homeAssets.home.heroPlatformComposite.alt}
              imagePosition="center"
              imagePriority={homeAssets.home.heroPlatformComposite.available}
              sections={heroCapabilityRows}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="We turn institutional problems into dependable digital systems."
          description="Our work sits where technology meets governance, operations and service delivery. We help organisations replace fragmented processes, disconnected documents and manual controls with systems that create visibility, structure and institutional memory."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="rounded-3xl border border-border bg-muted p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Core positioning
            </p>
            <p className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Skymouse is an independent Botswana technology company building digital systems for
              governance, institutional performance and enterprise transformation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We work with organisations whose technology must do more than look modern. It must
              support decisions, preserve records, coordinate people and remain dependable after
              implementation.
            </p>
          </div>
          <div className="grid gap-5">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
                Who we serve
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Boards, committees, government departments, councils, regulators, research and
                education institutions, property organisations and African enterprises modernising
                critical operations.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
                Delivery focus
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Governance, enterprise systems, digital platforms and managed infrastructure.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Trust and capability"
          title="Evidence from real institutional environments."
          description="Our experience includes governance, research, property, municipal revenue and enterprise digital platforms. Each engagement strengthens our understanding of how systems must work beyond the demonstration: with real users, existing processes, legacy data and long-term operational responsibilities."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="rounded-3xl border border-border bg-forest-deep p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Institutional capability
            </p>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Evidence first, presentation second.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              Our experience includes governance, research, property, municipal revenue and
              enterprise digital platforms.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Real users and existing processes',
                'Legacy data and reporting constraints',
                'Governance requirements and accountability',
                'Long-term operational responsibilities',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-6 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
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
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  sector={project.sector}
                  description={project.description}
                  href={project.href}
                  imageSrc={project.asset.available ? project.asset.src : undefined}
                  imageAlt={project.asset.alt}
                  imagePosition="center"
                  imagePriority={project.asset.available}
                />
              ))}
            </div>
          </div>
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
          description="Konvox Digital Boards is the lead product. The product set also includes a managed digital signing and approval capability built around open technologies."
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
              imageSrc={product.asset.available ? product.asset.src : undefined}
              imageAlt={product.asset.alt}
              imagePosition="center"
              imagePriority={product.asset.available}
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
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div className="rounded-3xl border border-border bg-muted p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Operating principles
            </p>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              We do not begin with a reseller catalogue.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              We begin with the institution, the problem and the value that must remain after
              implementation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Product-minded delivery',
                body: 'Reusable knowledge, stronger methods and platform capability that improve future delivery.',
              },
              {
                title: 'Open-source advantage',
                body: 'Portability, transparency and control while reducing avoidable licensing dependence.',
              },
              {
                title: 'Long-term accountability',
                body: 'Deployment, maintenance, adoption, security, data ownership and continuity are part of the solution.',
              },
              {
                title: 'Practical partnership',
                body: 'A serious technology partner rather than a commodity supplier.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
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
