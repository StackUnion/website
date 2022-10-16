import { Pg } from 'components/molecules/Pg'
import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'
import { useI18n } from 'hooks/useI18n'
import { SearchBox } from 'components/organisms/SearchBox'

const Page: NextPage = () => {
  const i18n = useI18n()

  return (
    <Pg className={'bg-grid dark:bg-grid-dark h-full'}>
      <Meta title={'StackUnion'} />
      <div className={'mt-64 max-w-screen-lg mx-auto px-4'}>
        <SearchBox />
      </div>
    </Pg>
  )
}

export default Page
