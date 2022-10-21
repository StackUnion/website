import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'
import { Pg } from 'components/templates/Pg'
import { SearchBox } from 'components/organisms/SearchBox'
import { ErrorBoundary } from 'components/utils/ErrorBoundary'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { apiFetcher, Ion, unwrapLocalized } from 'api'
import { Spinner } from 'components/atoms/Spinner'
import { Tag } from 'components/molecules/Tag'
import Link from 'next/link'
import { useLocale } from 'hooks/useI18n'
import { Import } from 'utils/import'
const Mds = Import('Mds', () => import('components/atoms/Mds'))

export const Page: NextPage = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const locale = useLocale()

  useEffect(() => {
    setQuery((router.query?.q as string) ?? '')
  }, [router.query?.q])

  const updateQuery = useCallback((query: string) => {
    setQuery(query)
    router.push({ query: { q: query } })
  }, [])

  const { data = [] } = useSWR<Ion[]>(() => query.length > 0 && `/ions?q=${query}&limit=20`, apiFetcher)

  return (
    <Pg>
      <div className={'max-w-screen-lg mx-auto mt-4 lg:mt-16 px-4'}>
        <Meta title={'Поиск'} />
        <div>
          <ErrorBoundary>
            <SearchBox autosearch={false} onSearch={updateQuery} value={query} />
          </ErrorBoundary>
          <div className={'mt-4'}>
            {data.map(ion => (
              <Link href={`/ions/${ion.uid}`} key={ion.uid} className={'!outline-none'}>
                <div
                  className={
                    'flex flex-col transition-all px-3 py-2 hover:bg-light-200 hover:dark:bg-dark-400 cursor-pointer rounded'
                  }
                >
                  <div className={'font-bold text-accent-300'}>{unwrapLocalized(ion.title, locale)}</div>
                  <div
                    className={
                      'font-jetbrains text-light-400 dark:text-dark-50 text-xs overflow-ellipsis overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [line-clamp:2] [-webkit-line-clamp:2]'
                    }
                  >
                    <Mds>{unwrapLocalized(ion.content, locale)}</Mds>
                  </div>
                  <div className={'flex gap-1 mt-1 wrap'}>
                    {ion.keywords.map(kw => (
                      <Tag key={kw}>{kw}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Pg>
  )
}

export default Page
