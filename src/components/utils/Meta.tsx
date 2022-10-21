import { FC, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SupportedLocaleList } from 'i18n'
import rmd from 'remove-markdown'
import { useLocale } from 'hooks/useI18n'

export interface MetaProps {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: boolean
  author?: string
}

export const Meta: FC<MetaProps> = ({ description, title, keywords, ogImage, author }) => {
  const locale = useLocale()
  const { asPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={rmd(description ?? '')} />
      {keywords && (
        <meta name={'keywords'} content={keywords.join(', ').replaceAll('_', ' ').replaceAll('\n', ' ')}></meta>
      )}
      <meta property={'og:title'} content={title} />
      <meta property={'og:description'} content={rmd(description ?? '')} />
      <meta property={'og:site_name'} content={'StackUnion'} />
      <meta property={'og:locale'} content={locale} />
      {ogImage && (
        <>
          <meta
            property={'og:image'}
            content={`${process.env.NEXT_PUBLIC_ORIGIN}/api/og-full?title=${title}&author=${author}`}
          />
          <meta property={'og:image:type'} content={'image/png'} />
          <meta property={'og:image:width'} content={'1280'} />
          <meta property={'og:image:height'} content={'670'} />
          <meta name={'twitter:card'} content={'summary_large_image'} />
          <meta
            property={'twitter:image'}
            content={`${process.env.NEXT_PUBLIC_ORIGIN}/api/og-full?title=${title}&author=${author}`}
          />
          <meta
            property={'vk:image'}
            content={`${process.env.NEXT_PUBLIC_ORIGIN}/api/og-full?title=${title}&author=${author}`}
          />
        </>
      )}
      <meta property={'og:image'} content={`${process.env.NEXT_PUBLIC_ORIGIN}/api/og-square`} />
      <meta property={'og:image:type'} content={'image/png'} />
      <meta property={'og:image:width'} content={'512'} />
      <meta property={'og:image:height'} content={'512'} />
      {SupportedLocaleList.map(lc => (
        <Fragment key={lc}>
          <meta property={'og:locale:alternate'} content={lc} />
          <link key={lc} rel={'alternate'} hrefLang={lc} href={`${process.env.NEXT_PUBLIC_ORIGIN}/${lc}${asPath}`} />
        </Fragment>
      ))}
    </Head>
  )
}
