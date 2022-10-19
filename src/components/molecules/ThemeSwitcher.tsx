import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment, useEffect } from 'react'
import { usePersistentState } from 'hooks/usePersistentState'

const lightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
)

const darkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
)

export const ThemeSwitcher: FC = () => {
  const [dark, setDark] = usePersistentState(
    'dark',
    false,
    () => window?.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <Menu as="div" className="relative flex items-center text-left !outline-none !ring-0">
      <Menu.Button>
        <div className={'text-dark-50 dark:text-violet-500'}>{dark ? darkIcon : lightIcon}</div>
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
          <Menu.Item>
            <div className={'flex justify-center cursor-pointer'} onClick={() => setDark(false)}>
              {lightIcon}
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className={'flex justify-center cursor-pointer'} onClick={() => setDark(true)}>
              {darkIcon}
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
