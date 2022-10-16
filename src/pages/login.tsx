import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'
import { Input } from 'components/atoms/Input'

const Login: NextPage = () => {
  return (
    <div className={'min-h-screen flex justify-center items-center'}>
      <Meta title={'Вход'} />
      <div className={'flex flex-col align-center max-w-sm w-full'}>
        <h1
          className={'font-jetbrains text-dark-50 dark:text-light-400 text-4xl font-bold select-none text-center mb-5'}
        >
          Вход
        </h1>
        <div className={'flex flex-col gap-2'}>
          <div className={'font-jetbrains text-light-600 dark:text-dark-50 text-xs'}>
            Введите ваш Nodium ID или придумайте уникальный, чтобы зарегистрироваться
          </div>
          <Input placeholder={'Nodium ID'} />
        </div>
      </div>
    </div>
  )
}

export default Login
