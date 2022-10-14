import { FC } from 'react'
import cn from 'classnames'

export interface ButtonProps extends JIb {
  primary?: boolean
  danger?: boolean
}

export const Button: FC<ButtonProps> = ({ className, danger, primary, ...props }) => (
  <button
    className={cn(
      'font-jetbrains px-4 py-2 bg-light dark:bg-dark border border-light-400 dark:border-dark-400 text-dark dark:text-light rounded shadow hover:shadow-lg transition-all hover:text-accent hover:border-accent dark:hover:text-accent dark:hover:border-accent box-border flex gap-3 select-none',
      props.disabled &&
        'bg-light-400 text-light-700 dark:bg-dark-400 dark:text-dark-50 hover:bg-light-400 hover:text-light-700 dark:hover:bg-dark-400 dark:hover:text-dark-50 hover:border-light-400 dark:hover:border-dark-400 cursor-not-allowed shadow-none hover:shadow-none',
      primary &&
        'bg-accent dark:bg-accent border-accent dark:border-accent text-light dark:text-light hover:text-light dark:hover:text-light dark:hover:border-accent',
      danger &&
        'bg-red-500 dark:bg-red-500 border-red-500 dark:border-red-500 text-light dark:text-light hover:text-light dark:hover:text-light dark:hover:border-red-500',
      className,
    )}
    {...props}
  />
)
