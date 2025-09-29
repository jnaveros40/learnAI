import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('MYNEXTAPP_LOCALE')?.value || "es";
  const locale = cookieLocale || "es";

  return {
    locale,
    messages: (await import(`../src/messages/${locale}.json`)).default
  };
});
