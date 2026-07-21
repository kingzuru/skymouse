export type HomeAssetKind = 'hero' | 'project' | 'product' | 'company' | 'client';

export type HomeAssetEntry = {
  src: `/${string}.webp`;
  alt: string;
  title: string;
  kind: HomeAssetKind;
  available: boolean;
};

export const homeAssets = {
  home: {
    heroPlatformComposite: {
      src: '/images/home/hero-platform-composite.webp',
      alt: 'Skymouse homepage platform composite',
      title: 'Homepage hero platform composite',
      kind: 'hero',
      available: false,
    },
  },
  projects: {
    konvox: {
      src: '/images/projects/konvox.webp',
      alt: 'Konvox governance platform screenshot placeholder',
      title: 'Konvox',
      kind: 'project',
      available: false,
    },
    cgapmis: {
      src: '/images/projects/cgapmis.webp',
      alt: 'CGAPMIS project screenshot placeholder',
      title: 'CGAPMIS',
      kind: 'project',
      available: false,
    },
    shha: {
      src: '/images/projects/shha.webp',
      alt: 'SHHA project screenshot placeholder',
      title: 'SHHA',
      kind: 'project',
      available: false,
    },
    brproperties: {
      src: '/images/projects/brproperties.webp',
      alt: 'BR Properties project screenshot placeholder',
      title: 'BR Properties',
      kind: 'project',
      available: false,
    },
    ramdda: {
      src: '/images/projects/ramdda.webp',
      alt: 'RAMDDA project screenshot placeholder',
      title: 'RAMDDA',
      kind: 'project',
      available: false,
    },
  },
  products: {
    konvoxProduct: {
      src: '/images/products/konvox-product.webp',
      alt: 'Konvox product screenshot placeholder',
      title: 'Konvox Product',
      kind: 'product',
      available: false,
    },
    opensign: {
      src: '/images/products/opensign.webp',
      alt: 'OpenSign product screenshot placeholder',
      title: 'OpenSign',
      kind: 'product',
      available: false,
    },
  },
  company: {
    office: {
      src: '/images/company/office.webp',
      alt: 'Skymouse office screenshot placeholder',
      title: 'Office',
      kind: 'company',
      available: false,
    },
    workspace: {
      src: '/images/company/workspace.webp',
      alt: 'Skymouse workspace screenshot placeholder',
      title: 'Workspace',
      kind: 'company',
      available: false,
    },
  },
  clients: {} as Record<string, never>,
} as const satisfies {
  home: { heroPlatformComposite: HomeAssetEntry };
  projects: Record<
    'konvox' | 'cgapmis' | 'shha' | 'brproperties' | 'ramdda',
    HomeAssetEntry
  >;
  products: Record<'konvoxProduct' | 'opensign', HomeAssetEntry>;
  company: Record<'office' | 'workspace', HomeAssetEntry>;
  clients: Record<string, never>;
};
