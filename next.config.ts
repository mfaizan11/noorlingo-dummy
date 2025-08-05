import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./next-intl.config.js');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
