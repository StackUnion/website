import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'
import { Pg } from 'components/templates/Pg'
import { SearchBox } from 'components/organisms/SearchBox'
import { ErrorBoundary } from 'components/utils/ErrorBoundary'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { apiFetcher, Ion } from 'api'
import { Tag } from 'components/molecules/Tag'
import Link from 'next/link'
import { useI18n } from 'hooks/useI18n'
import rmd from 'remove-markdown'
import { firstLine } from 'utils/string'
import { SearchItem } from 'components/molecules/SearchItem'

export const Page: NextPage = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { localize } = useI18n()

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
              <SearchItem ion={ion} key={ion.uid} />
            ))}
          </div>
        </div>
      </div>
    </Pg>
  )
}

export default Page
