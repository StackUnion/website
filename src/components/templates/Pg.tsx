import { FC } from 'react'
import { Header } from 'components/organisms/Header'
import { Footer } from 'components/organisms/Footer'
import cn from 'classnames'

export const Pg: FC<JId> = ({ className, children, ...props }) => (
  <div className={'min-h-screen w-full flex flex-col justify-between'} {...props}>
    <Header />
    <div className={'h-16'} />
    <main className={cn('grow', className)}>{children}</main>
    <Footer />
  </div>
)
