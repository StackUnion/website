import { FC } from 'react'
import { LogoWithText } from 'components/molecules/LogoWithText'

export const Header: FC = () => (
  <header
    className={
      'w-full border-b border-light-100 dark:border-dark-400 h-16 fixed top-0 backdrop-blur-lg z-40 bg-light bg-opacity-50 dark:bg-dark dark:bg-opacity-50'
    }
  >
    <div className={'max-w-screen-xl mx-auto flex items-center h-full px-8 xl:px-0'}>
      <LogoWithText />
    </div>
  </header>
)
