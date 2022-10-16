import { FC } from 'react'
import cn from 'classnames'

export const Input: FC<JIi> = ({ className, ...props }) => (
  <input
    className={cn(
      'font-jetbrains text-dark dark:text-light px-3 h-10 w-full bg-light-50 dark:bg-dark-600 rounded border border-light-400 dark:border-dark-400 shadow outline-none placeholder:light-400 dark:placeholder:dark-400 focus:shadow-lg transition-all focus:ring-2 ring-accent ring-opacity-100 focus:border-none',
      props.disabled && '!bg-light-200 dark:!bg-dark-400 !shadow-none cursor-not-allowed',
      className,
    )}
    {...props}
  />
)
