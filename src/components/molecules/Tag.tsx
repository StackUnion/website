import { FC } from 'react'

export const Tag: FC<JId> = ({ children, ...props }) => (
  <span
    className={'font-jetbrains text-xs text-dark-50 bg-light-200 px-1 rounded dark:bg-dark-200 dark:text-light-400'}
  >
    {children}
  </span>
)
