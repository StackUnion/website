import {
  AccentBlock,
  CodeView,
  DefaultBlock,
  GrayBlock,
  GreenBlock,
  RedBlock,
  TipBlock,
  YellowBlock,
} from 'components/organisms/CodeView'
import { Pg } from 'components/molecules/Pg'
import { NextPage } from 'next'
import { Meta } from 'components/utils/Meta'

const Page: NextPage = () => (
  <Pg className={'bg-grid dark:bg-grid-dark h-full'}>
    <Meta title={'Nodium'} />
    <div className={'max-w-screen-xl mx-auto px-16 xl:px-0 bg-[length:32px]'}>
      <div
        className={
          'w-full mt-48 p-12 flex items-center lg:items-stretch justify-between lg:justify-between flex-col flex-nowrap gap-12 lg:flex-wrap lg:flex-row'
        }
      >
        <div className={'flex gap-6 flex-col justify-between'}>
          <div
            className={
              'block font-display text-dark dark:text-light text-6xl font-black block max-w-2xl text-center lg:text-left'
            }
          >
            <div className={'text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary select-none'}>
              Nodium
            </div>
            <div className={'text-dark-50 text-4xl font-jetbrains font-semibold dark:text-light select-none'}>
              {' '}
              Веб разработка
            </div>
          </div>
          <article className={'flex flex-col gap-6'}>
            <section className={'flex gap-3 max-w-xs'}>
              <div className={'flex flex-col'}>
                <div
                  className={
                    'w-4 h-4 bg-light-500 dark:bg-dark-300 rounded-full border-2 border-light dark:border-dark box-border z-10 translate-x-[-5px]'
                  }
                />
                <div className={'grow w-[1px] translate-x-[3px] bg-light-500 dark:bg-dark-300'} />
              </div>
              <div className={'-mt-1 flex flex-col gap-2 text-dark dark:text-light font-jetbrains'}>
                <div className={'font-bold'}>Участвуйте</div>
                <div className={'text-dark-50 dark:text-light-500'}>
                  Присоединяйтесь и участвуйте в командной разработке продуктов Nodium
                </div>
              </div>
            </section>
            <section className={'flex gap-3 max-w-xs'}>
              <div className={'flex flex-col'}>
                <div
                  className={
                    'w-4 h-4 bg-light-500 dark:bg-dark-300 rounded-full border-2 border-light dark:border-dark box-border z-10 translate-x-[-5px]'
                  }
                />
                <div className={'grow w-[1px] translate-x-[3px] bg-light-500 dark:bg-dark-300'} />
              </div>
              <div className={'-mt-1 flex flex-col gap-2 text-dark dark:text-light font-jetbrains'}>
                <div className={'font-bold'}>Используйте</div>
                <div className={'text-dark-50 dark:text-light-500'}>
                  Войдите в Nodium ID чтобы использовать наши решения
                </div>
              </div>
            </section>
          </article>
        </div>
        <CodeView className={'w-[320px] h-[280px] lg:w-[720px] lg:h-[420px] text-xs lg:text-base'}>
          <RedBlock>import</RedBlock>{' '}
          <GrayBlock>
            {'{ '}
            <AccentBlock>generateIdea</AccentBlock>, <AccentBlock>Agile</AccentBlock>
            {' }'}
          </GrayBlock>{' '}
          <RedBlock>from</RedBlock>
          {/* eslint-disable-next-line quotes */}
          <YellowBlock>{' \'../../development/tools\''}</YellowBlock>
          <br />
          <br />
          <RedBlock>const</RedBlock> newIdea
          <TipBlock>:Idea</TipBlock> <GrayBlock>=</GrayBlock> <GreenBlock>generateIdea</GreenBlock>
          <GrayBlock>()</GrayBlock>
          <br />
          <RedBlock>const</RedBlock> project<TipBlock>:Project</TipBlock> <GrayBlock>=</GrayBlock> newIdea.
          <GreenBlock>toProject</GreenBlock>
          <GrayBlock>()</GrayBlock>
          <br />
          <RedBlock>const</RedBlock> agile<TipBlock>:Agile</TipBlock> <GrayBlock>=</GrayBlock>
          <RedBlock>new</RedBlock> <AccentBlock>Agile</AccentBlock>
          <GrayBlock>
            (
            <DefaultBlock>
              project.<GreenBlock>name</GreenBlock>
            </DefaultBlock>
            )
          </GrayBlock>
          <br />
          <RedBlock>const</RedBlock> dev<TipBlock>:DevelopmentFlow</TipBlock> <GrayBlock>=</GrayBlock> project.
          <GreenBlock>develop</GreenBlock>
          <GrayBlock>
            (<DefaultBlock>agile</DefaultBlock>)
          </GrayBlock>
          <br />
          <br />
          dev.<GreenBlock>on</GreenBlock>
          <GrayBlock>
            {/* eslint-disable-next-line quotes */}{/* eslint-disable-line prettier/prettier */}
            (<YellowBlock>{'\'completed\''}</YellowBlock>,{' '}
            <RedBlock>async </RedBlock>() =&gt; {'{'}
            <br />
            {'  '}
            <RedBlock>await </RedBlock>
            <DefaultBlock>project.</DefaultBlock>
            <GreenBlock>deploy</GreenBlock>
            <GrayBlock>()</GrayBlock>
            <br />
            <GrayBlock>{'}'})</GrayBlock>
          </GrayBlock>
        </CodeView>
      </div>
    </div>
  </Pg>
)

export default Page
