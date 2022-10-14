import { FC } from 'react'
import { LogoWithText } from 'components/molecules/LogoWithText'
import { Button } from 'components/atoms/Button'

export const Header: FC = () => (
  <header
    className={
      'w-full border-b border-light-100 dark:border-dark-400 h-16 fixed top-0 backdrop-blur-lg z-40 bg-light bg-opacity-50 dark:bg-dark dark:bg-opacity-50'
    }
  >
    <div className={'max-w-screen-xl mx-auto flex items-center h-full px-8 xl:px-0 flex justify-between'}>
      <LogoWithText />
      <div className={'font-jetbrains text-dark dark:text-light select-none'}>Сайт находится в разработке :]</div>
      <Button primary>
        Войти
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
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </Button>
    </div>
  </header>
)
