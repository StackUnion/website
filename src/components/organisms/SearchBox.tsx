import { FC, Suspense, useCallback, useEffect, useState } from 'react'
import { Input } from 'components/atoms/Input'
import { useDebounce } from 'hooks/useDebounce'
import useSWR from 'swr'
import { apiFetcher, AutocompleteItem, Ion, unwrapLocalized } from 'api'
import cn from 'classnames'
import { useLocale } from 'hooks/useI18n'
import Link from 'next/link'
import { Tag } from 'components/molecules/Tag'
import { Import } from 'utils/import'
import { Spinner } from 'components/atoms/Spinner'
const Mds = Import('Mds', () => import('components/organisms/Mds'))

export interface SearchBoxProps {
  onSearch?: (query: string) => void
  autosearch?: boolean
  value?: string
}

export const SearchBox: FC<SearchBoxProps> = ({ onSearch, autosearch = true, value }) => {
  const locale = useLocale()
  const [search, setSearch] = useState('')
  useEffect(() => setSearch(value ?? ''), [value])
  const debouncedSearch = useDebounce(search, 300)
  const { data: rawAutocomplete } = useSWR<AutocompleteItem[]>(
    () => (debouncedSearch && autosearch ? `/ions/autocomplete?q=${debouncedSearch}` : null),
    apiFetcher,
  )

  const { data: [rawPossible] = [] } = useSWR<Ion[]>(
    () => (debouncedSearch && autosearch ? `/ions?q=${debouncedSearch}&limit=1` : null),
    apiFetcher,
  )

  const [autocomplete, setAutocomplete] = useState<AutocompleteItem[]>([])
  const [possible, setPossible] = useState<Ion | undefined>()

  useEffect(() => {
    if (rawAutocomplete) setAutocomplete(rawAutocomplete)
  }, [rawAutocomplete])

  useEffect(() => {
    if (rawPossible) setPossible(rawPossible)
  }, [rawPossible])

  const doSearch = useCallback(() => {
    if (search.length === 0) return
    onSearch?.(search)
  }, [search])

  return (
    <div className={'flex shadow focus-within:shadow-lg transition-all'}>
      <div className={'grow relative [&:not(:focus-within)_section]:hidden z-10'}>
        <Input
          tabIndex={0}
          className={'rounded-tr-none rounded-br-none focus:rounded-tr focus:rounded-br shadow-none focus:shadow-none'}
          onChange={({ target }) => setSearch(target.value)}
          autoFocus={true}
          value={search}
          onKeyUp={({ key }) => key === 'Enter' && doSearch()}
        />
        {autocomplete.length > 0 && search.length > 0 && (
          <section
            tabIndex={1}
            className={cn(
              '!outline-none absolute w-full mt-2 bg-light dark:bg-dark font-jetbrains border border-light-400 dark:border-dark-400 rounded shadow text-dark dark:text-light divide-light-400 dark:divide-dark-400 divide-y',
            )}
          >
            {possible && (
              <Link href={`/ions/${possible.uid}`} className={'!outline-none'}>
                <div
                  className={
                    'flex flex-col transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer'
                  }
                >
                  <div className={'font-bold text-accent-300'}>{unwrapLocalized(possible.title, locale)}</div>
                  <div
                    className={
                      'font-jetbrains text-light-400 dark:text-dark-50 text-xs overflow-ellipsis overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [line-clamp:2] [-webkit-line-clamp:2]'
                    }
                  >
                    <Suspense fallback={<Spinner />}>
                      <Mds inline>{unwrapLocalized(possible.content, locale)}</Mds>
                    </Suspense>
                  </div>
                  <div className={'flex gap-1 mt-1 flex-wrap'}>
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
                <Link href={`/ions/${item.uid}`} key={item.uid} tabIndex={1 + i} className={'!outline-none'}>
                  <div className={'transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer'}>
                    <div>{unwrapLocalized(item.title, locale)}</div>
                  </div>
                </Link>
              ))}
          </section>
        )}
      </div>
      <div
        className={'w-12 flex items-center justify-center text-light dark:text-dark bg-accent rounded-r cursor-pointer'}
        onClick={doSearch}
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
    </div>
  )
}
