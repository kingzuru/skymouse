import type { Metadata } from 'next';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { contactLinks, siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Talk to Skymouse about governance technology, enterprise systems, digital platforms and managed infrastructure.',
  path: '/contact',
});

const enquiryCategories = [
  'Governance and board-management platforms',
  'Enterprise application development',
  'Public-sector digital systems',
  'Websites and institutional platforms',
  'Managed open-source infrastructure',
  'Data, reporting and integration',
  'Technology strategy and solution design',
  'Partnerships and product demonstrations',
];

const formFields = [
  'Full name',
  'Organisation',
  'Work email',
  'Telephone number',
  'Area of interest',
  'Brief description of the requirement',
  'Preferred contact method',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us discuss the institutional problem you are ready to solve."
        description="Whether you are planning a new platform, modernising an existing system or looking for a long-term technology partner, Skymouse can help you define the right path from problem to implementation."
        primaryAction={{ href: contactLinks.email, label: 'Send enquiry', variant: 'accent' }}
        secondaryAction={{ href: '/products', label: 'Request a demonstration' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Contact details"
          title="Verified company details."
          description="Use the direct email fallback if you want to start a discussion now."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Company</dt>
                <dd className="mt-1 text-muted">{siteConfig.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Website</dt>
                <dd className="mt-1 text-muted">
                  <a href={contactLinks.website} className="text-green">
                    {contactLinks.website}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">General email</dt>
                <dd className="mt-1 text-muted">
                  <a href={contactLinks.email} className="text-green">
                    info@skymouse.co.bw
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Location</dt>
                <dd className="mt-1 text-muted">{siteConfig.location}</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Response statement
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              We review each enquiry to understand the operating need before recommending a
              meeting, assessment or implementation approach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contactLinks.email} variant="primary">
                Email Skymouse
              </Button>
              <Button href="/products" variant="secondary">
                Request a demonstration
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Enquiry categories"
          title="Tell us where the current process is failing."
          description="You do not need to prescribe the technology."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {enquiryCategories.map((category) => (
            <Card key={category} className="p-5">
              <p className="text-sm leading-7 text-muted">{category}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Form fields"
          title="What we need to understand."
          description="The first static release uses direct email rather than exposing credentials or inventing a backend form."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <Card className="p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {formFields.map((field) => (
                <div key={field} className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-ink">
                  {field}
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Form introduction
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Tell us what the organisation is trying to improve, where the current process is
              failing and what a successful outcome would look like.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              A secure third-party form endpoint or serverless handler can be added later if the
              deployment model supports it.
            </p>
          </Card>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Konvox"
          title="Interested in Konvox?"
          description="Request a focused discussion or product demonstration for your board, committee or governance office."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={contactLinks.email} variant="accent">
            Request a demonstration
          </Button>
          <Button href="/products" variant="secondary">
            View product direction
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Closing note"
        title="We review each enquiry to understand the operating need."
        description="The goal is to recommend a meeting, assessment or implementation approach that matches the institution."
        primaryAction={{ href: contactLinks.email, label: 'Send enquiry' }}
        secondaryAction={{ href: '/about', label: 'Learn about Skymouse' }}
      />
    </>
  );
}
