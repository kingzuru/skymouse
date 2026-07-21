export type PlannedImageAsset = {
  src: `/${string}.webp`;
  alt: string;
  available: false;
};

export const plannedContentImages = {
  homeHeroPlatformComposite: {
    src: '/images/home/hero-platform-composite.webp',
    alt: 'Skymouse homepage platform composite placeholder',
    available: false,
  },
  konvoxDashboard: {
    src: '/images/products/konvox-dashboard.webp',
    alt: 'Konvox dashboard placeholder',
    available: false,
  },
  konvoxMeetingWorkspace: {
    src: '/images/products/konvox-meeting-workspace.webp',
    alt: 'Konvox meeting workspace placeholder',
    available: false,
  },
  digitalSigningWorkflow: {
    src: '/images/products/digital-signing-workflow.webp',
    alt: 'Digital signing workflow placeholder',
    available: false,
  },
  ramddaPlatform: {
    src: '/images/projects/ramdda-platform.webp',
    alt: 'RAMDDA platform placeholder',
    available: false,
  },
  brProperties: {
    src: '/images/projects/br-properties.webp',
    alt: 'BR Properties platform placeholder',
    available: false,
  },
  municipalRevenue: {
    src: '/images/projects/municipal-revenue.webp',
    alt: 'Municipal revenue platform placeholder',
    available: false,
  },
  institutionalDelivery: {
    src: '/images/company/institutional-delivery.webp',
    alt: 'Institutional delivery placeholder',
    available: false,
  },
} as const satisfies Record<string, PlannedImageAsset>;
