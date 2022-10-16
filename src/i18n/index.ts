import en from './locales/en'
import ru from './locales/ru'

export type LocaleMap = typeof en

export const SupportedLocaleList = ['ru', 'en'] as const

export type SupportedLocale = typeof SupportedLocaleList[number]

export const locales = { en, ru }

export const fallback: SupportedLocale = 'ru'
