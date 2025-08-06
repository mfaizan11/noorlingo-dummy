import createMiddleware from 'next-intl/middleware';
import intlConfig from '../next-intl.config.js';

// Use the config object directly
export default createMiddleware({
  locales: intlConfig.locales,
  defaultLocale: intlConfig.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};