import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode, useEffect } from 'react'
import { usePersistentState } from 'hooks/usePersistentState'
import { fallback, SupportedLocale } from 'i18n'
import { useLocale } from 'hooks/useI18n'
import Link from 'next/link'

const flags: Record<SupportedLocale, ReactNode> = {
  ru: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width={24} height={24}>
      <path fill="#fff" d="M0 0h9v3H0z" />
      <path fill="#d52b1e" d="M0 3h9v3H0z" />
      <path fill="#0039a6" d="M0 2h9v2H0z" />
    </svg>
  ),
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" width={24} height={24}>
      <path fill="#b22234" d="M0 0h7410v3900H0z" />
      <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" />
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path id="a" d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                <use xlinkHref="#a" y="420" />
                <use xlinkHref="#a" y="840" />
                <use xlinkHref="#a" y="1260" />
              </g>
              <use xlinkHref="#a" y="1680" />
            </g>
            <use xlinkHref="#b" x="247" y="210" />
          </g>
          <use xlinkHref="#c" x="494" />
        </g>
        <use xlinkHref="#d" x="988" />
        <use xlinkHref="#c" x="1976" />
        <use xlinkHref="#e" x="2470" />
      </g>
    </svg>
  ),
}

export const LocaleSwitcher: FC = () => {
  const locale = useLocale()

  const [lang, setLang] = usePersistentState('locale', fallback, () => locale)

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${lang}; max-age=31536000; path=/;SameSite=Lax`
  }, [lang])

  return (
    <Menu as="div" className="relative flex items-center text-left !outline-none !ring-0">
      <Menu.Button>
        <div className={'rounded'}>{flags[lang]}</div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="rounded absolute flex flex-col gap-2 translate-x-1/2 right-1/2 z-10 mt-32 w-12 py-2 font-jetbrains origin-top-right bg-light dark:bg-dark shadow-lg focus:outline-none text-dark-50 dark:text-light-200 border border-light-200 dark:border-dark-200">
          {Object.entries(flags).map(([locale, flag]) => (
            <Menu.Item key={locale}>
              <Link href={'#'} locale={locale}>
                <div
                  className={'!flex justify-center cursor-pointer rounded'}
                  onClick={() => setLang(locale as SupportedLocale)}
                >
                  {flag}
                </div>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
