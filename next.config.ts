import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Correct path pointing to the i18n request configuration
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);