import { FC } from 'react'
import cn from 'classnames'

export const CodeView: FC<JId> = ({ children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-light-100 dark:bg-dark-400 rounded-lg shadow-glass dark:shadow-glass-dark p-3',
        props.className,
      )}
    >
      <div className={'flex pb-3'}>
        <div className={'flex gap-3'}>
          <div className={'rounded-3xl bg-red-500 w-3 h-3'} />
          <div className={'rounded-3xl bg-yellow-500 w-3 h-3'} />
          <div className={'rounded-3xl bg-green-500 w-3 h-3'} />
        </div>
      </div>
      <div className={'border-b border-light:100 dark:border-dark-300 w-full mb-3'} />
      <code
        className={
          'block font-jetbrains text-dark dark:text-light whitespace-pre w-full h-full overflow-x-scroll scrollbar-hide select-none'
        }
      >
        {children}
      </code>
    </div>
  )
}

export const RedBlock: FC<JIs> = ({ children }) => <span className={'text-red-500'}>{children}</span>
export const GreenBlock: FC<JIs> = ({ children }) => <span className={'text-green-500'}>{children}</span>
export const AccentBlock: FC<JIs> = ({ children }) => <span className={'text-accent-300'}>{children}</span>
export const YellowBlock: FC<JIs> = ({ children }) => (
  <span className={'dark:text-yellow-300 text-yellow-600'}>{children}</span>
)
export const DefaultBlock: FC<JIs> = ({ children }) => <span className={'text-dark dark:text-light'}>{children}</span>
export const TipBlock: FC<JIs> = ({ children }) => (
  <span className={'dark:text-dark-200 text-light-500'}>{children}</span>
)
export const GrayBlock: FC<JIs> = ({ children }) => (
  <span className={'dark:text-light-600 text-light-700'}>{children}</span>
)
