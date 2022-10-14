import { FC } from 'react'
import Head from 'next/head'

export interface MetaProps {
  title: string
  description?: string
}

export const Meta: FC<MetaProps> = ({ description, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description ?? title} />
  </Head>
)
