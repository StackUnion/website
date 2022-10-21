import { GetServerSideProps, NextPage } from 'next'
import { apiFetcher, fetchApiPagination, Ion } from 'api'
import { Pg } from 'components/templates/Pg'
import { Meta } from 'components/utils/Meta'
import { useI18n } from 'hooks/useI18n'
import { SearchItem } from 'components/molecules/SearchItem'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { page = 0 } = query

    return {
      props: { ...(await fetchApiPagination<Ion>('/ions?limit=30&page=' + page)), page },
    }
  } catch (e) {
    return { notFound: true }
  }
}

export const Page: NextPage<{ total: number; items: Ion[]; page: number }> = ({ total, items, page }) => {
  const { i18n } = useI18n()
  const router = useRouter()

  const previous = useCallback(() => {
    if (!router.query.page) return
    router.query.page = String(+router.query.page - 1)
    router.push(router)
  }, [router, page])

  const next = useCallback(() => {
    if (!router.query.page) return
    router.query.page = String(+router.query.page + 1)
    router.push(router)
  }, [router, page])

  return (
    <Pg>
      <Meta title={i18n.ion.ions_title} />
      <div className={'max-w-screen-lg mx-auto'}>
        <div className={'py-4 grow'}>
          {items.map(ion => (
            <SearchItem ion={ion} key={ion.uid} />
          ))}
        </div>
        <div className={'text-right divide-x divide-accent-300 font-jetbrains'}>
          <button
            onClick={previous}
            disabled={page <= 0}
            className={'px-4 py-2 bg-accent rounded-l text-light shadow disabled:bg-light-200 dark:disabled:bg-dark-50'}
          >
            Назад
          </button>
          <button
            onClick={next}
            disabled={page + 1 >= Math.ceil(total / 30)}
            className={'px-4 py-2 bg-accent rounded-r text-light shadow disabled:bg-light-200 dark:disabled:bg-dark-50'}
          >
            Далее
          </button>
        </div>
      </div>
    </Pg>
  )
}

export default Page
