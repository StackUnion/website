import { FC } from 'react'
import remarkGfm from 'remark-gfm'
import { normalizeAnchor } from 'utils/string'
import cn from 'classnames'
import { Import } from 'utils/import'

const CodeEnv = Import('CodeEnv', () => import('components/organisms/CodeEnv'))
const Markdown = Import('default', () => import('react-markdown'))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createAnchor = (Tag: any, content: string, props: any, className: string) => (
  <a
    {...(props as object)}
    id={normalizeAnchor(content)}
    href={'#' + normalizeAnchor(content)}
    className={cn(
      'font-display block border-b border-light-400 dark:border-dark-300 py-1 my-4 outline-none',
      className,
    )}
  >
    <Tag className={'hover:text-accent-500 dark:hover-text-accent-50 hover:underline transition-colors'}>{content}</Tag>
  </a>
)

export interface MdsProps extends JId {
  inline?: boolean
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const Mds: FC<MdsProps> = ({ children, className, inline, ...props }) => (
  <Markdown
    {...props}
    className={cn('text-dark dark:text-light-200', className)}
    remarkPlugins={[remarkGfm]}
    components={
      inline
        ? {
            code: ({ node, ...props }) => <span {...props} />,
          }
        : {
            h1: ({ node, children, ...props }) => createAnchor('h1', children[0] as string, props, 'text-4xl'),
            h2: ({ node, children, ...props }) => createAnchor('h2', children[0] as string, props, 'text-3xl'),
            h3: ({ node, ...props }) => <h3 {...props} className={'font-display text-2xl my-3'} />,
            h4: ({ node, ...props }) => <h4 {...props} className={'font-display text-xl my-2'} />,
            h5: ({ node, ...props }) => <h5 {...props} className={'font-display text-lg my-2'} />,
            h6: ({ node, ...props }) => <h6 {...props} className={'font-display text-md my-2'} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className={'text-light-600 border-l-4 border-light-600 pl-2 py-1 rounded my-2'} {...props} />
            ),
            li: ({ node, ...props }) => <li {...props} className={'list-disc ml-4'} />,
            table: ({ node, ...props }) => <table {...(props as object)} className={'font-jetbrains my-4'} />,
            th: ({ node, ...props }) => (
              <th {...(props as object)} className={'border border-light-400 dark:border-dark-300 p-2'} />
            ),
            td: ({ node, ...props }) => (
              <td {...(props as object)} className={'border border-light-400 dark:border-dark-300 p-2'} />
            ),
            tr: ({ node, ...props }) => (
              <tr {...(props as object)} className={'even:bg-light-100 dark:even:bg-dark-400'} />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <CodeEnv lang={match[1]}>{String(children)}</CodeEnv>
              ) : (
                <code className={cn('bg-light-200 dark:bg-dark-200 px-1 rounded', className)} {...props}>
                  {children}
                </code>
              )
            },
          }
    }
  >
    {children as string}
  </Markdown>
)
