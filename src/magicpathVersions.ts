import type { ComponentType } from 'react';

import { DigitecHellasBrandColorLayout as BrandColor } from './components/magicpath-versions/BrandColor';
import { DigitecHellasModernServicesVariation2 as ModernServicesV2 } from './components/magicpath-versions/ModernServicesV2';
import { DigitecHellasNVIDIAStyleLayout as NvidiaStyle } from './components/magicpath-versions/NvidiaStyle';
import { DigitecHellasCustomersPage as PremiumCustomers } from './components/magicpath-versions/PremiumCustomers';
import { DigitecHellasSiemensStyleLayout as SiemensStyle } from './components/magicpath-versions/SiemensStyle';
import { DigitecHellasWebsiteRedesign as WebsiteRedesign } from './components/magicpath-versions/WebsiteRedesign';

export type MagicPathVersion = {
  slug: string;
  title: string;
  generatedName: string;
  component: ComponentType;
  description: string;
};

export const magicPathVersions: MagicPathVersion[] = [
  {
    slug: 'brand-color',
    title: 'Digitec Hellas Brand Color Layout',
    generatedName: 'purely-breeze-7716',
    component: BrandColor,
    description: 'Original logo, yellow, green, and dark brand palette.',
  },
  {
    slug: 'modern-services-v2',
    title: 'Digitec Hellas Modern Services Variation 2',
    generatedName: 'fairly-house-8086',
    component: ModernServicesV2,
    description: 'Second refined services experiment.',
  },
  {
    slug: 'nvidia-style',
    title: 'Digitec Hellas NVIDIA Style Layout',
    generatedName: 'fair-house-1071',
    component: NvidiaStyle,
    description: 'Dark high-performance electronics/manufacturing direction.',
  },
  {
    slug: 'premium-customers',
    title: 'Digitec Hellas Premium + Customers Edition',
    generatedName: 'readily-winter-4703',
    component: PremiumCustomers,
    description: 'Premium layout with customer proof emphasized.',
  },
  {
    slug: 'siemens-style',
    title: 'Digitec Hellas Siemens Style Layout',
    generatedName: 'gladly-winter-7883',
    component: SiemensStyle,
    description: 'Corporate industrial layout with technical service panels.',
  },
  {
    slug: 'website-redesign',
    title: 'Digitec Hellas Website Redesign',
    generatedName: 'smoothly-water-3823',
    component: WebsiteRedesign,
    description: 'Original modern redesign concept.',
  },
];

export const defaultVersionSlug = 'siemens-style';

export function findMagicPathVersion(slug: string | null | undefined) {
  if (!slug) {
    return undefined;
  }

  return magicPathVersions.find((version) => version.slug === slug);
}
