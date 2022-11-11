import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'

export interface SectionCardProps extends JId {
  color: string
  title: string
  short: string
  img: string
  keywords: string[]
  disabled?: boolean
}

export const SectionCard: FC<SectionCardProps> = ({ color, keywords, img, title, short, className, disabled, ...props }) => {
  const { replace: nav } = useRouter()

  return (
    <div
      className={cn(
        'h-32 bg-light dark:bg-dark border-2 border-light-200 dark:border-dark-300 rounded p-4 flex gap-4 cursor-pointer shadow',
        disabled && 'pointer-events-none !cursor-not-allowed filter grayscale opacity-50',
        className,
      )}
      style={{
        borderColor: color,
      }}
      onClick={() => nav({ pathname: '/search', query: { q: `keywords:${keywords.join(',')}` } })}
      {...props}
    >
      <Image src={img} alt={title} width={64} height={64} className={''} />
      <div className={'flex flex-col justify-center font-jetbrains'}>
        <div className={'text-lg font-bold text-dark dark:text-light'}>{title}</div>
        <div className={'text-xs text-dark-50 dark:text-light-700 min-w-24'}>{short}</div>
      </div>
    </div>
  )
}
