import { useRouter } from 'next/router'
import { fallback, LocaleMap, locales, SupportedLocale, SupportedLocaleList } from 'i18n'

export const getI18n = (locale: string = fallback) => {
  if (!SupportedLocaleList.includes(locale as SupportedLocale)) locale = fallback
  return locales[locale as keyof typeof locales]
}

export const useLocale = (): SupportedLocale => {
  let { locale = fallback } = useRouter()
  if (!SupportedLocaleList.includes(locale as SupportedLocale)) locale = fallback
  return locale as SupportedLocale
}

export const useI18n = (): LocaleMap => {
  return locales[useLocale() as keyof typeof locales]
}
