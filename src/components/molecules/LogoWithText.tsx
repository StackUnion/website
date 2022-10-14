import { FC } from 'react'
import { SquareLogo } from 'components/glyphs/SquareLogo'

export const LogoWithText: FC<JId> = props => (
  <div className={'h-3/5 flex items-center gap-4'} {...props}>
    <SquareLogo className={'h-full'} />
    <span className={'font-black font-jetbrains text-2xl text-accent-200 select-none'}>Nodium</span>
  </div>
)
