import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
import { apiFetcher } from 'api'

export const getServerSideProps: GetServerSideProps = async context => {
  const ionids = await apiFetcher<string[]>('/ions/map')
  return getServerSideSitemap(
    context,
    ionids.map(i => ({
      loc: process.env.NEXT_PUBLIC_ORIGIN + `/ions/${i}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      alternateRefs: context.locales?.map(loc => ({
        href: `${process.env.NEXT_PUBLIC_ORIGIN}/${loc}/ions/${i}`,
        hreflang: loc,
      })),
    })),
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
