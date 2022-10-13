import { FC } from 'react'
import { SquareLogo } from 'components/glyphs/SquareLogo'

export const LogoWithText: FC<JId> = props => (
  <div className={'h-3/5 flex items-center gap-4'} {...props}>
    <SquareLogo className={'h-full'} />
    <span
      className={
        'font-black font-display text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary'
      }
    >
      Nodium
    </span>
  </div>
)
