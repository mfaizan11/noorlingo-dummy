import createMiddleware from 'next-intl/middleware';
import intlConfig from '../next-intl.config'; 

export default createMiddleware(intlConfig);

// ✅ Now `config` is safe to export
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
