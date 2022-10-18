import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export interface SectionCardProps extends JId {
  color: string
  title: string
  short: string
  img: string
  keywords: string[]
}

export const SectionCard: FC<SectionCardProps> = ({ color, keywords, img, title, short, className, ...props }) => (
  <div
    className={cn(
      'h-32 bg-light dark:bg-dark border-2 border-light-200 dark:border-dark-300 rounded p-4 flex gap-4 cursor-pointer shadow',
      className,
    )}
    style={{
      borderColor: color,
    }}
    {...props}
  >
    <Image src={img} alt={'thing'} height={'100%'} width={'80%'} className={''} />
    <div className={'flex flex-col justify-center font-jetbrains'}>
      <div className={'text-lg font-bold text-dark dark:text-light'}>{title}</div>
      <div className={'text-xs text-dark-50 dark:text-light-700 font-serif min-w-24'}>{short}</div>
    </div>
  </div>
)
