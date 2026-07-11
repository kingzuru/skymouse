export type InsightEntry = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  lead: string;
  points: string[];
  conclusion: string;
};

export const insights: InsightEntry[] = [
  {
    slug: 'governance-needs-a-system-of-record',
    title: 'Governance needs a system of record',
    category: 'Governance as an operating system',
    summary:
      'Boards produce more than meeting minutes. They produce decisions, obligations, risks, approvals and institutional history.',
    lead:
      'Boards and committees can move beyond meeting administration toward stronger decision tracking, accountability and institutional memory.',
    points: [
      'Governance information cannot remain scattered across email, shared drives, printed packs and individual memory.',
      'Institutions need a controlled record of what was decided, why it was decided and what happened next.',
    ],
    conclusion:
      'Good governance is not only about making the right decision; it is also about ensuring the institution can show what was decided, why it was decided and what happened next.',
  },
  {
    slug: 'open-source-is-strategic-freedom',
    title: 'Open source is not free software. It is strategic freedom.',
    category: 'Open source and institutional independence',
    summary:
      'The value of open source is not merely avoiding licence fees. Its deeper value can include portability, transparency, local capability and integration freedom.',
    lead:
      'Open-source technology creates strategic value when it is managed with discipline rather than treated as a shortcut.',
    points: [
      'Independence does not mean operating without partners.',
      'It means choosing partners without surrendering control.',
      'Security, hosting, maintenance, governance and support remain real responsibilities.',
    ],
    conclusion:
      'The institution keeps more leverage when it treats open source as a strategic operating choice rather than a cost-saving slogan.',
  },
  {
    slug: 'website-is-not-digital-transformation',
    title: 'The website is no longer the digital transformation',
    category: 'Public-sector digital transformation',
    summary:
      'Many organisations still treat a new website as evidence of digital transformation. That distinction is too shallow.',
    lead:
      'A modern homepage can improve perception, but only a better operating system improves the institution.',
    points: [
      'Public-facing redesign is different from improving workflows, data, services, controls and decision-making.',
      'Digital transformation is deeper than the website surface.',
    ],
    conclusion:
      'A modern homepage can improve perception, but only a better operating system improves the institution.',
  },
  {
    slug: 'stop-replacing-systems-that-still-work',
    title: 'Stop replacing systems that still work',
    category: 'From projects to platforms',
    summary:
      'There is a tendency to prescribe complete replacement before understanding a useful legacy system.',
    lead:
      'Modernisation is not measured by how much old technology was discarded, but by how much institutional performance improved.',
    points: [
      'Wrapping, integrating and improving can be better than replacing.',
      'Useful legacy systems should be understood before being discarded.',
    ],
    conclusion:
      'Modernisation is not measured by how much old technology was discarded, but by how much institutional performance improved.',
  },
  {
    slug: 'african-technology-companies-must-build-leverage',
    title: 'African technology companies must build leverage',
    category: 'Building systems for African institutions',
    summary:
      'Custom software firms remain trapped when every project begins from zero. Reusable capability creates leverage.',
    lead:
      'The company that only sells hours must start the race again every Monday; the company that builds leverage carries last week’s progress forward.',
    points: [
      'Reusable components, products, domain expertise, managed services and intellectual property create compounding value.',
      'Distribution matters as much as delivery.',
    ],
    conclusion:
      'The company that only sells hours must start the race again every Monday; the company that builds leverage carries last week’s progress forward.',
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function readingTime(words: number) {
  return Math.max(1, Math.ceil(words / 200));
}

