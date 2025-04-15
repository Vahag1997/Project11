import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("MYNEXTAPP_LOCALE")?.value;

  const supportedLocales = ["en", "ru", "hy"];
  const locale = supportedLocales.includes(cookieLocale ?? "")
    ? cookieLocale
    : "en";


  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
