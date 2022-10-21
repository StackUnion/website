import { FC, useEffect, useMemo, useState } from 'react'
import cn from 'classnames'
import { Import } from 'utils/import'
import { unindent } from 'utils/string'
import * as icons from 'assets/icons'
import Image from 'next/future/image'

const SyntaxHighlighter = Import('default', () => import('react-syntax-highlighter/dist/cjs/prism-async'))

export const CodeEnv: FC<JId & { children: string; lang?: string }> = ({ children, lang }) => {
  const groups = useMemo(() => {
    if (lang !== 'group') return [{ lang, type: null, name: null, code: unindent(children).trim() }]
    return Array.from(children.matchAll(/.{0}#\((.+?)\)\n(.+?)(?=.{0}#\(|$)/gis)).map(([, args, code]) => {
      const [type, lang, name] = args.split(',').map(v => v.trim())
      return { type, lang, name, code: unindent(code).trim() }
    })
  }, [children, lang])

  const isSingle = useMemo(() => groups.length === 1, [groups])

  const [selected, setSelected] = useState(0)

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 3000)
  }, [copied])

  return (
    <div className={'w-full flex flex-col my-3'}>
      {!isSingle && (
        <div className={'h-9 flex text-[0.85rem] text-dark dark:text-light rounded-tl overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
          {groups.map((group, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                'flex-shrink-0 relative z-10 top-[1px] border-t first:border-l last:border-r border-b !border-b-light dark:!border-b-[rgb(37,40,44)] border-light-200 dark:border-dark-200 bg-light dark:bg-[rgb(37,40,44)] h-full items-center font-jetbrains font-bold flex flex gap-2 px-4 hover:text-accent dark:hover:text-accent-400 cursor-pointer first:rounded-tl last:rounded-tr transition-colors before:content-[""] before:block before:absolute before:w-[1px] before:h-1/2 before:bg-light-500 dark:before:bg-light-700 before:left-0 first:before:opacity-0',
                i === selected && 'text-accent dark:text-accent-400',
              )}
            >
              {group?.type && (
                <Image
                  width={24}
                  height={24}
                  src={icons?.[('icon_' + group.type) as keyof typeof icons]?.default}
                  alt={''}
                />
              )}
              {group?.name ?? group?.type}
            </div>
          ))}
        </div>
      )}
      <div
        className={cn(
          'relative border border-light-200 dark:border-dark-200 relative overflow rounded-b rounded-r shadow',
          isSingle && 'rounded-l',
        )}
      >
        <SyntaxHighlighter
          className={'codeblock overflow-x-auto'}
          style={{} as any}
          language={groups?.[selected]?.lang}
        >
          {String(groups?.[selected]?.code)}
        </SyntaxHighlighter>
        <div
          onClick={() => (setCopied(true), navigator?.clipboard?.writeText?.(groups?.[selected]?.code))}
          className={cn(
            'w-7 h-7 flex items-center justify-center absolute right-4 top-3.5 border border-light-200 dark:border-dark-100 rounded bg-light-200 dark:bg-dark-200 cursor-pointer transition-all opacity-20 hover:opacity-100',
            copied && 'bg-lime-500 dark:bg-lime-300 text-dark border-lime-500 dark:border-lime-300 !opacity-100',
          )}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}
