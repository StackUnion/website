import { Pg } from 'components/molecules/Pg'
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

const Page: NextPage = () => {
  const i18n = useI18n()

  return (
    <Pg className={'bg-grid dark:bg-grid-dark h-full'}>
      <Meta title={'StackUnion'} />
      <div className={'mt-4 lg:mt-32 xl:mt-64 max-w-screen-lg mx-auto px-4'}>
        <ErrorBoundary>
          <SearchBox />
        </ErrorBoundary>
        <div className={'mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
          <SectionCard
            color={'rgb(255, 202, 40)'}
            title={'JavaScript'}
            short={'Programming language'}
            img={js}
            keywords={['js', 'javascript', 'ecma']}
          />
          <SectionCard
            color={'rgb(6, 136, 209)'}
            title={'TypeScript'}
            short={'Types for JavaScript'}
            img={typescript}
            keywords={['ts', 'typescript']}
          />
          <SectionCard
            color={'rgb(0, 188, 212)'}
            title={'React'}
            short={'React is powerful library for frontend development'}
            img={react}
            keywords={['react', 'reactjs']}
          />
          <SectionCard
            color={'rgb(66, 165, 245)'}
            title={'CSS'}
            short={'Also all preprocessors'}
            img={css}
            keywords={['css', 'css3', 'scss', 'sass', 'less', 'stylis']}
          />
        </div>
      </div>
    </Pg>
  )
}

export default Page
