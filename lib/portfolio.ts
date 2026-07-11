export type ProductEntry = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  overview: string;
  problems: string[];
  capabilities: string[];
  audience: string[];
  principle: string;
  callToAction: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  contribution: string[];
  intervention: string;
  deliveryType: string;
  outcome: string;
  publishNote?: string;
};

export const products: ProductEntry[] = [
  {
    slug: 'konvox-digital-boards',
    title: 'Konvox Digital Boards',
    label: 'Lead product',
    summary: 'A digital governance workspace for boards, committees and executive structures.',
    overview:
      'Konvox brings the full governance cycle into one controlled environment. It helps secretariats prepare meetings, distribute board packs, manage access, record decisions, track actions and preserve an auditable institutional record.',
    problems: [
      'Board packs distributed through insecure or fragmented channels',
      'Meeting records scattered across email, drives and personal devices',
      'Resolutions and action items that are difficult to track',
      'Limited visibility into meeting readiness and governance obligations',
      'Weak institutional memory when officers or directors change',
      'Manual voting, declarations and approval processes',
    ],
    capabilities: [
      'Boards and committee structures',
      'Members, roles and controlled access',
      'Meeting calendars and agendas',
      'Board-pack preparation and distribution',
      'Document versioning and secure files',
      'Annotations and director notes',
      'Resolutions and decision registers',
      'Action tracking and accountability',
      'Voting and approval workflows',
      'Conflict-of-interest declarations',
      'Governance dashboards and audit history',
    ],
    audience: [
      'Boards of directors',
      'Board secretariats',
      'Committees and councils',
      'State-owned enterprises',
      'Regulators and statutory bodies',
      'Pension funds, associations and professional institutions',
    ],
    principle:
      'Konvox is being developed as more than a meeting portal. Its long-term purpose is to help an institution answer a more important question: are we governing properly, and can we prove it?',
    callToAction: 'Request a Konvox demonstration',
  },
  {
    slug: 'digital-signing-and-approval',
    title: 'Digital signing and approval',
    label: 'Workflow capability',
    summary: 'Secure digital signatures and approval workflows built around open technology.',
    overview:
      'Skymouse is developing a managed digital-signing capability that organisations can deploy without making their entire approval process dependent on a closed global vendor. The platform is intended to support document preparation, signature requests, approval trails, templates and secure retention.',
    problems: [
      'Approval work that depends on fragmented email chains',
      'Difficulty proving where a document sits in the signing process',
      'Unnecessary dependence on closed proprietary platforms',
    ],
    capabilities: [
      'Electronic signature requests',
      'Multi-party signing workflows',
      'Reusable templates',
      'Approval sequencing',
      'Document status tracking',
      'Completion certificates and audit trails',
      'Organisational branding',
      'Integration with governance and business platforms',
      'Managed hosting and support',
    ],
    audience: [
      'Boards and governance offices',
      'Operational approval teams',
      'Institutions modernising document workflows',
    ],
    principle:
      'Digital signing should be part of the organisation’s operating workflow, not an isolated subscription that owns the relationship with its documents.',
    callToAction: 'Discuss digital approvals',
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: 'ramdda-platform',
    title: 'RAMDDA Platform',
    sector: 'Research and higher education',
    summary:
      'A digital platform supporting Research and Academic Mobility for Drug Discovery in Africa.',
    contribution: [
      'Digital platform design and development',
      'Opportunity and programme content presentation',
      'Application-supporting web experiences',
      'Ongoing platform enhancement and support',
    ],
    intervention:
      'Communicate opportunities, connect participating institutions and support academic mobility and research collaboration across the programme.',
    deliveryType: 'Digital platform development and support',
    outcome:
      'The platform provides a credible digital home for a pan-African research initiative and makes programme information and opportunities easier to discover and manage.',
  },
  {
    slug: 'br-properties-digital-platform',
    title: 'BR Properties Digital Platform',
    sector: 'Property and real estate',
    summary:
      'A modern corporate and property portfolio website designed to communicate identity, services, leadership, portfolio and opportunities with greater clarity.',
    contribution: [
      'Corporate website architecture and development',
      'Headless content-management implementation',
      'Property and portfolio content structures',
      'Leadership, services, insights and downloads',
      'Responsive user experience',
      'Hosting and managed infrastructure support',
    ],
    intervention:
      'Present the organisation, its services and its property portfolio in a clear, maintainable digital format.',
    deliveryType: 'Corporate website and managed infrastructure',
    outcome:
      'The platform gives the organisation a maintainable digital presence capable of supporting corporate communication, portfolio visibility and content ownership.',
  },
  {
    slug: 'konvox-governance-platform',
    title: 'Konvox Governance Platform',
    sector: 'Corporate governance',
    summary:
      'A board and committee management platform designed to improve meeting preparation, controlled information access, decision records, voting and accountability.',
    contribution: [
      'Product strategy and system architecture',
      'Board, committee, meeting and agenda workflows',
      'Secure document access and annotations',
      'Role-based permissions',
      'Voting and governance records',
      'Continuous product development',
    ],
    intervention:
      'Move governance activity away from fragmented email and file-sharing practices toward a structured institutional system of record.',
    deliveryType: 'Owned product development',
    outcome:
      'Konvox gives institutions a governed workspace for boards and committees and a clearer basis for accountability.',
  },
  {
    slug: 'municipal-revenue-and-billing-support',
    title: 'Municipal Revenue and Billing Support',
    sector: 'Local government',
    summary:
      'Specialised software and database support for municipal billing, reporting and revenue-management processes integrated with an existing accounting environment.',
    contribution: [
      'SQL Server procedure analysis and remediation',
      'Billing-batch recovery and generation',
      'Distribution-account validation',
      'Management and ward-level reporting',
      'Legacy-system integration support',
      'Operational troubleshooting and continuity',
    ],
    intervention:
      'Support the recovery and continuation of important revenue processes without forcing the institution to abandon a useful accounting platform.',
    deliveryType: 'Operational support and database remediation',
    outcome:
      'The work supports the recovery and continuation of important revenue processes while preserving existing system value.',
  },
  {
    slug: 'institutional-performance-platform',
    title: 'Institutional Performance Platform',
    sector: 'Public enterprise governance and performance',
    summary:
      'An enterprise platform initiative focused on governance, performance monitoring, reporting and institutional oversight.',
    contribution: [
      'Project mobilisation and inception planning',
      'Governance and delivery framework design',
      'Solution architecture and implementation planning',
      'Requirements and lifecycle definition',
      'Enterprise platform development direction',
    ],
    intervention:
      'Create a platform approach for governance, performance monitoring, reporting and institutional oversight.',
    deliveryType: 'Platform strategy and implementation planning',
    outcome:
      'Only publish the client name, detailed scope or screenshots once approved for public reference.',
    publishNote:
      'Only publish the client name, detailed scope or screenshots once approved for public reference.',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
