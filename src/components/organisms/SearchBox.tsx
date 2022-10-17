import { FC, useEffect, useState } from 'react'
import { Input } from 'components/atoms/Input'
import { useDebounce } from 'hooks/useDebounce'
import useSWR from 'swr'
import { AutocompleteItem, fetcher, Ion, unwrapLocalized } from 'api'
import cn from 'classnames'
import { useLocale } from 'hooks/useI18n'
import Link from 'next/link'
import { Tag } from 'components/molecules/Tag'

export const SearchBox: FC = () => {
  const locale = useLocale()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)
  const { data: rawAutocomplete } = useSWR<AutocompleteItem[]>(
    () => (debouncedSearch ? `http://192.168.50.100:3264/ions/autocomplete?q=${debouncedSearch}` : null),
    fetcher,
  )

  const { data: [rawPossible] = [] } = useSWR<Ion[]>(
    () => (debouncedSearch ? `http://192.168.50.100:3264/ions/search?q=${debouncedSearch}&limit=1` : null),
    fetcher,
  )

  const [autocomplete, setAutocomplete] = useState<AutocompleteItem[]>([])
  const [possible, setPossible] = useState<Ion | undefined>()

  useEffect(() => {
    if (rawAutocomplete) setAutocomplete(rawAutocomplete)
  }, [rawAutocomplete])

  useEffect(() => {
    if (rawPossible) setPossible(rawPossible)
  }, [rawPossible])

  return (
    <div className={'flex shadow focus-within:shadow-lg transition-all'}>
      <div
        className={
          'w-12 flex items-center justify-center text-light-600 dark:text-light bg-light-50 dark:bg-dark-400 border-t border-l border-b border-light-400 dark:border-dark-400 rounded-l'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className={'grow relative [&:not(:focus-within)_section]:hidden'}>
        <Input
          tabIndex={0}
          className={'rounded-tl-none rounded-bl-none focus:rounded-tl focus:rounded-bl shadow-none focus:shadow-none'}
          onChange={({ target }) => setSearch(target.value)}
          autoFocus={true}
          value={search}
        />
        {autocomplete.length > 0 && search.length > 0 && (
          <section
            tabIndex={1}
            className={cn(
              'absolute w-full mt-2 bg-light dark:bg-dark font-jetbrains border border-light-400 dark:border-dark-400 rounded shadow text-dark dark:text-light divide-light-400 dark:divide-dark-400 divide-y',
            )}
          >
            {possible && (
              <Link href={`/ions/${possible.uid}`}>
                <div
                  className={
                    'flex flex-col transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer'
                  }
                >
                  <div className={'font-bold text-accent-300'}>{unwrapLocalized(possible.title, locale)}</div>
                  <div
                    className={
                      'text-light-400 dark:text-dark-50 text-xs overflow-ellipsis [-webkit-box-orient]:vertical [line-clamp]:2 [-webkit-line-clamp]:2'
                    }
                  >
                    {unwrapLocalized(possible.content, locale)}
                  </div>
                  <div className={'flex gap-1 mt-1 wrap'}>
                    {possible.keywords.map(kw => (
                      <Tag key={kw}>{kw}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            )}
            {autocomplete
              .filter(v => v.uid !== possible?.uid)
              .map((item, i) => (
                <Link href={`/ions/${item.uid}`} key={item.uid} tabIndex={1 + i}>
                  <div className={'transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer'}>
                    <div>{unwrapLocalized(item.title, locale)}</div>
                  </div>
                </Link>
              ))}
          </section>
        )}
      </div>
    </div>
  )
}
