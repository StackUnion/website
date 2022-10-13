import { FC } from 'react'
import { Home } from 'components/pages/Home'
import { Header } from 'components/organisms/Header'

export const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}
