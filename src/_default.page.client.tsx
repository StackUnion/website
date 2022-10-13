import { PageContextClient } from 'ssr.types'
import { hydrateRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { PageContextProvider } from 'hooks/usePageContext'
import './index.css'

export async function render(context: PageContextClient) {
  const { Page, pageProps } = context

  hydrateRoot(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!,
    <StrictMode>
      <PageContextProvider pageContext={context}>
        <Page {...pageProps} />
      </PageContextProvider>
    </StrictMode>,
  )
}
