import { FC } from 'react'
import rmd from 'remove-markdown'
import { firstLine } from 'utils/string'
import { Tag } from 'components/molecules/Tag'
import Link from 'next/link'
import { Ion } from 'api/types'
import { useI18n } from 'hooks/useI18n'

export interface SearchItemProps {
  ion: Ion
}

export const SearchItem: FC<SearchItemProps> = ({ ion }) => {
  const { localize } = useI18n()

  return (
    <Link href={`/ions/${ion.uid}`} key={ion.uid} className={'!outline-none'}>
      <a
        className={
          'flex flex-col transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer rounded gap-2'
        }
      >
        <div className={'font-bold text-accent-300'}>{localize(ion.title)}</div>
        <div
          className={
            'font-jetbrains text-light-700 dark:text-light-300 text-xs overflow-ellipsis overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [line-clamp:2] [-webkit-line-clamp:2]'
          }
        >
          {rmd(firstLine(localize(ion.content)))}
        </div>
        <div className={'flex gap-1 mt-1 flex-wrap'}>
          {ion.keywords.map(kw => (
            <Tag key={kw}>{kw}</Tag>
          ))}
        </div>
      </a>
    </Link>
  )
}
