import { Localized } from 'api/types'
import { fallback, SupportedLocale } from 'i18n'

export const unwrapLocalized = (localized: Localized[], locale: SupportedLocale) => {
  return (localized.find(v => v.locale === locale) ?? localized.find(v => v.locale === fallback) ?? localized[0])?.value
}
