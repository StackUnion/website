import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SupportedLocaleList } from 'i18n'
import rmd from 'remove-markdown'

export interface MetaProps {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: boolean
  author?: string
}

export const Meta: FC<MetaProps> = ({ description, title, keywords, ogImage, author }) => {
  const { asPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={rmd(description ?? '')} />
      {keywords && <meta name={'keywords'} content={keywords.join(', ').replaceAll('_', '')}></meta>}
      <meta property={'og:title'} content={title} />
      <meta property={'og:description'} content={rmd(description ?? '')} />
      <meta property={'og:site_name'} content={'StackUnion'} />
      {ogImage && (
        <>
          <meta
            property={'og:image:url'}
            content={`${process.env.NEXT_PUBLIC_ORIGIN}/api/og?title=${title}&author=${author}`}
          />
          <meta property={'og:image:type'} content={'image/png'} />
          <meta property={'og:image:width'} content={'1200'} />
          <meta property={'og:image:height'} content={'630'} />
        </>
      )}
      {SupportedLocaleList.map(lc => (
        <>
          <meta property={'og:locale:alternate'} content={lc} />
          <link key={lc} rel={'alternate'} hrefLang={lc} href={`${process.env.NEXT_PUBLIC_ORIGIN}/${lc}${asPath}`} />
        </>
      ))}
    </Head>
  )
}
