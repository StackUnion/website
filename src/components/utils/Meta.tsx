import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SupportedLocaleList } from 'i18n'

export interface MetaProps {
  title: string
  description?: string
}

export const Meta: FC<MetaProps> = ({ description, title }) => {
  const { asPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description ?? title} />
      {SupportedLocaleList.map(lc => (
        <link key={lc} rel="alternate" hrefLang={lc} href={`${process.env.NEXT_PUBLIC_ORIGIN}/${lc}${asPath}`} />
      ))}
    </Head>
  )
}
