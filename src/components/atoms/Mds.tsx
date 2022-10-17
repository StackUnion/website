import { FC } from 'react'
import remarkGfm from 'remark-gfm'
import { normalizeAnchor } from 'utils/string'
import cn from 'classnames'
import { Import } from 'utils/import'

const CodeEnv = Import('CodeEnv', () => import('components/organisms/CodeEnv'))
const Markdown = Import('default', () => import('react-markdown'))

const createAnchor = (Tag: any, size: number, content: string, ...props: any[]) => (
  <a
    {...(props as object)}
    id={normalizeAnchor(content)}
    href={'#' + normalizeAnchor(content)}
    className={`font-display block text-${size}xl border-b border-light-400 dark:border-dark-300 py-1 my-4 outline-none`}
  >
    <Tag className={'hover:text-accent-500 dark:hover-text-accent-50 hover:underline transition-colors'}>{content}</Tag>
  </a>
)

export const Mds: FC<JId> = ({ children, className, ...props }) => (
  <Markdown
    {...props}
    className={cn('font-serif text-dark dark:text-light-200', className)}
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ node, children, ...props }) => createAnchor('h1', 4, children[0] as string, props),
      h2: ({ node, children, ...props }) => createAnchor('h2', 3, children[0] as string, props),
      h3: ({ node, ...props }) => <h3 {...props} className={'text-2xl'} />,
      h4: ({ node, ...props }) => <h4 {...props} className={'text-xl'} />,
      h5: ({ node, ...props }) => <h5 {...props} className={'text-lg'} />,
      h6: ({ node, ...props }) => <h6 {...props} className={'text-md'} />,
      blockquote: ({ node, ...props }) => (
        <blockquote className={'text-light-600 border-l-4 border-light-600 pl-2 py-1 rounded'} {...props} />
      ),
      li: ({ node, ...props }) => <li {...props} className={'list-disc ml-4'} />,
      table: ({ node, ...props }) => <table {...(props as object)} className={'font-jetbrains my-4'} />,
      th: ({ node, ...props }) => (
        <th {...(props as object)} className={'border border-light-400 dark:border-dark-300 p-2'} />
      ),
      td: ({ node, ...props }) => (
        <td {...(props as object)} className={'border border-light-400 dark:border-dark-300 p-2'} />
      ),
      tr: ({ node, ...props }) => <tr {...(props as object)} className={'even:bg-light-100 dark:even:bg-dark-400'} />,
      code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <CodeEnv lang={match[1]}>{String(children)}</CodeEnv>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },
    }}
  >
    {children as string}
  </Markdown>
)
