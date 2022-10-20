import { FC } from 'react'
import cn from 'classnames'
import { useI18n } from 'hooks/useI18n'

export const Footer: FC<JId> = ({ className, ...props }) => {
  const { i18n } = useI18n()

  return (
    <footer className={cn('py-4 border-t dark:border-t-dark-400 border-t-light-400', className)} {...props}>
      <div
        className={
          'max-w-screen-xl mx-auto px-8 xl:px-0 flex justify-between font-jetbrains text-dark-50 dark:text-light-400 flex-wrap gap-2'
        }
      >
        <div>{i18n.miscellaneous.copyright}</div>
        <div>{i18n.miscellaneous.contact}</div>
      </div>
    </footer>
  )
}
