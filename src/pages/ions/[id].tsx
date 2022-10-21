import { Pg } from 'components/templates/Pg'
import { Meta } from 'components/utils/Meta'
import { GetServerSideProps, NextPage } from 'next'
import { apiFetcher, Ion } from 'api'
import { FC, Suspense } from 'react'
import { useI18n } from 'hooks/useI18n'
import { Import } from 'utils/import'
import { Spinner } from 'components/atoms/Spinner'

const Mds = Import('Mds', () => import('components/organisms/Mds'))

interface Props {
  ion: Ion
}

export const getServerSideProps: GetServerSideProps = async ({ params = {} }) => {
  try {
    const ion = await apiFetcher(`/ion/${params.id}`)

    if (!ion) return { notFound: true }

    return {
      props: {
        ion,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}

export const IonContent: FC<Props> = ({ ion }) => {
  const { i18n, localize } = useI18n()

  return (
    <div>
      <div className={'mt-8 max-w-screen-lg mx-auto px-4 xl:px-0 font-jetbrains text-dark dark:text-light'}>
        <section className={'mb-10'}>
          <h1 className={'w-full text-left font-display font-bold text-5xl'}>{localize(ion.title)}</h1>
          <div className={'font-jetbrains text-light-400 dark:text-light-600 mt-2'}>
            {i18n.ion.author}: {ion.author.display}
          </div>
        </section>
        <section className={'text-justify mb-10 font-serif'}>
          <Mds>{localize(ion.content)}</Mds>
        </section>
      </div>
    </div>
  )
}

export const Page: NextPage<Props> = ({ ion }) => {
  const { localize } = useI18n()

  return (
    <Pg>
      <Meta
        title={localize(ion.title)}
        keywords={ion.keywords}
        ogImage
        author={ion.author.nid}
        description={localize(ion.content).slice(0, 60)}
      />
      <IonContent ion={ion} />
    </Pg>
  )
}

export default Page
