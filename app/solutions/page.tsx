import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Solutions',
  description:
    'Governance technology, enterprise systems, digital platforms and managed open-source infrastructure from Skymouse.',
  path: '/solutions',
});

const solutionAreas = [
  {
    title: 'Governance technology',
    problem:
      'Boards, committees and executive teams generate decisions, obligations and institutional records that must be prepared, controlled, tracked and preserved.',
    approach:
      'We design platforms that turn governance from a collection of documents and email threads into a structured operating system.',
    result:
      'Meeting preparation, decision tracking and accountability become easier to manage and audit.',
    capabilities: [
      'Board and committee workspaces',
      'Meeting scheduling and preparation',
      'Agendas and board-pack distribution',
      'Controlled document access',
      'Resolutions and decision registers',
      'Action tracking and accountability',
    ],
    action: 'Discuss governance platforms',
  },
  {
    title: 'Enterprise application development',
    problem:
      'Generic off-the-shelf tools often fail when an organisation’s workflows, controls or reporting needs are specific.',
    approach:
      'We build purpose-designed software for organisations whose processes cannot be solved adequately by generic tools.',
    result:
      'The institution gets a system designed around the way work actually moves.',
    capabilities: [
      'Workflow and case-management systems',
      'Operational dashboards',
      'Revenue and billing support systems',
      'Performance-monitoring platforms',
      'Reporting and management information systems',
      'Data migration and integration',
    ],
    action: 'Discuss an application',
  },
  {
    title: 'Public-sector digital systems',
    problem:
      'Public institutions operate under specific governance, reporting, procurement, accountability and service-delivery requirements.',
    approach:
      'We design systems with those realities in mind, including records, reporting and executive oversight.',
    result:
      'Digital services are aligned with institutional controls and can be managed with greater confidence.',
    capabilities: [
      'Institutional performance platforms',
      'Public-service portals',
      'Regulatory and compliance workflows',
      'Programme and project monitoring',
      'Municipal and revenue-process support',
      'Executive and statutory reporting',
    ],
    action: 'Talk about public-sector systems',
  },
  {
    title: 'Websites and digital platforms',
    problem:
      'A serious institutional website must serve as a publishing platform, service channel and public record without becoming difficult to maintain.',
    approach:
      'We create modern websites and portals that are credible, accessible, maintainable and easy for authorised teams to manage.',
    result:
      'The institution has a dependable public-facing platform that can grow without losing control.',
    capabilities: [
      'Corporate and institutional websites',
      'Property and portfolio platforms',
      'Research and knowledge portals',
      'Application and opportunity portals',
      'Content architecture and migration',
      'Accessibility and performance optimisation',
    ],
    action: 'Discuss a digital platform',
  },
  {
    title: 'Managed open-source infrastructure',
    problem:
      'Open-source platforms provide independence, but they still require responsible deployment and management.',
    approach:
      'Skymouse can configure, host, integrate and support selected platforms as managed services.',
    result:
      'The organisation gains capability without surrendering control of its infrastructure.',
    capabilities: [
      'Private-cloud and collaboration platforms',
      'Digital-signature and approval systems',
      'Document and knowledge management',
      'Secure VPS and container hosting',
      'Backups and disaster-recovery planning',
      'Monitoring, patching and maintenance',
    ],
    action: 'Discuss managed infrastructure',
  },
  {
    title: 'Data, reporting and integration',
    problem:
      'Institutions often have valuable data trapped across spreadsheets, legacy databases and departmental applications.',
    approach:
      'We help make that data usable without pretending every existing system must be discarded.',
    result:
      'Operational information becomes more reliable, connected and available for decisions.',
    capabilities: [
      'Database analysis and remediation',
      'SQL development and optimisation',
      'API design and systems integration',
      'Data migration and reconciliation',
      'Management reports and dashboards',
      'Legacy accounting and operational-system integration',
    ],
    action: 'Discuss data and integration',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Technology designed around the way institutions actually work."
        description="Skymouse helps organisations replace fragmented processes, manual controls and disconnected tools with digital systems that improve visibility, accountability and execution."
        primaryAction={{ href: '/contact', label: 'Discuss your requirements' }}
        secondaryAction={{ href: '/products', label: 'Explore products' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Commercial model"
          title="Each solution area is built around a problem, an approach and an operational result."
          description="We keep the focus on how the institution works, what the system needs to change and what the organisation should be able to do afterward."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Project delivery
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              A defined implementation with agreed scope, milestones and acceptance criteria.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Managed service
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Ongoing hosting, monitoring, support, maintenance and improvement under a service
              agreement.
            </p>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Capabilities"
          title="Approved solution areas"
          description="Technology lists remain secondary to outcomes. Each area below includes the institutional problem, Skymouse approach, delivery result and the next action."
        />
        <div className="mt-8 grid gap-5">
          {solutionAreas.map((solution) => (
            <Card key={solution.title} className="p-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
                    {solution.title}
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">Problem</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{solution.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Approach</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{solution.approach}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Result</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{solution.result}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-muted p-5">
                  <p className="text-sm font-semibold text-ink">Representative capabilities</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                    {solution.capabilities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Button href="/contact" variant="secondary">
                      {solution.action}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Cross-links"
          title="Explore products, projects and contact."
          description="Skymouse becomes easier to evaluate when the service areas connect to owned products and real project evidence."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/products" variant="secondary">
            View products
          </Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
          <Button href="/contact" variant="primary">
            Contact Skymouse
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Bring us the institutional problem, not a preselected technology."
        description="We will help determine what should be configured, integrated, built or left alone."
        primaryAction={{ href: '/contact', label: 'Discuss your requirements' }}
        secondaryAction={{ href: '/projects', label: 'See selected work' }}
      />
    </>
  );
}
