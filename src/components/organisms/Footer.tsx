import { FC } from 'react'
import cn from 'classnames'

export const Footer: FC<JId> = ({ className, ...props }) => (
  <footer className={cn('py-4 border-t dark:border-t-dark-400 border-t-light-400', className)} {...props}>
    <div className={'max-w-screen-xl mx-auto px-8 xl:px-0'}>
      <span className={'font-jetbrains text-dark-50 dark:text-light-400 select-none'}>
        (C) StackUnion Created By LLC &quot;Nodium&quot; 2022
      </span>
    </div>
  </footer>
)
