import { NextPage } from 'next'
import { Pg } from 'components/molecules/Pg'
import { Meta } from 'components/utils/Meta'

export const Page: NextPage = () => {
  return (
    <Pg>
      <Meta title={'Not found'} />
      <div className={'h-full flex items-center justify-center font-jetbrains'}>
        <div className={'relative'}>
          <h1 className={'relative text-9xl font-extrabold text-dark dark:text-light z-20'}>404</h1>
          <h1 className={'absolute top-1 right-1 text-9xl font-extrabold text-accent z-10'}>404</h1>
          <h1 className={'absolute top-2 right-2 text-9xl font-extrabold text-violet-500'}>404</h1>
        </div>
      </div>
    </Pg>
  )
}

export default Page
