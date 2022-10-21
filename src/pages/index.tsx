import { Pg } from 'components/templates/Pg'
import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'
import { useI18n } from 'hooks/useI18n'
import { SearchBox } from 'components/organisms/SearchBox'
import { SectionCard } from 'components/molecules/SectionCard'
import js from 'assets/icons/javascript.svg'
import react from 'assets/icons/react.svg'
import css from 'assets/icons/css.svg'
import typescript from 'assets/icons/typescript.svg'
import { ErrorBoundary } from 'components/utils/ErrorBoundary'
import { useRouter } from 'next/router'

const Page: NextPage = () => {
  const { i18n } = useI18n()
  const router = useRouter()

  return (
    <Pg className={'bg-grid dark:bg-grid-dark h-full'}>
      <Meta title={'StackUnion'} />
      <div className={'mt-4 lg:mt-32 xl:mt-64 max-w-screen-lg mx-auto px-4'}>
        <ErrorBoundary>
          <SearchBox onSearch={query => router.push({ pathname: 'search', query: { q: query } })} />
        </ErrorBoundary>
        <div className={'mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
          <SectionCard
            color={'rgb(255, 202, 40)'}
            title={'JavaScript'}
            short={i18n.most_tagged.javascript}
            img={js}
            keywords={['js', 'javascript', 'ecma']}
          />
          <SectionCard
            color={'rgb(6, 136, 209)'}
            title={'TypeScript'}
            short={i18n.most_tagged.typescript}
            img={typescript}
            keywords={['ts', 'typescript']}
          />
          <SectionCard
            color={'rgb(66, 165, 245)'}
            title={'CSS'}
            short={i18n.most_tagged.css}
            img={css}
            keywords={['css', 'css3', 'scss', 'sass', 'less', 'stylis']}
          />
          <SectionCard
            color={'rgb(0, 188, 212)'}
            title={'React'}
            short={i18n.most_tagged.react}
            img={react}
            keywords={['react', 'reactjs']}
          />
        </div>
      </div>
    </Pg>
  )
}

export default Page
