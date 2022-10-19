import { FC } from 'react'
import { SquareLogo } from 'components/glyphs/SquareLogo'
import { useRouter } from 'next/router'

export const LogoWithText: FC<JId> = props => {
  const { replace: nav } = useRouter()
  return (
    <div className={'h-3/5 flex items-center gap-4 cursor-pointer'} {...props} onClick={() => nav('/')}>
      <SquareLogo className={'h-full'} />
      <span className={'font-black font-jetbrains text-2xl text-accent-200 select-none'}>StackUnion</span>
    </div>
  )
}
