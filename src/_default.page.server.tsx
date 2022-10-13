import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageContextServer } from 'ssr.types'
import { PageContextProvider } from 'hooks/usePageContext'
import { StrictMode } from 'react'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(context: PageContextServer) {
  const { Page, pageProps } = context
  const pageHtml = ReactDOMServer.renderToString(
    <StrictMode>
      <PageContextProvider pageContext={context}>
        <Page {...pageProps} />
      </PageContextProvider>
    </StrictMode>,
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = context.exports
  const title = documentProps?.title ?? 'Nodium'

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="ru" class="min-h-[100vh] dark">
<head>
  <!-- Meta -->
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body class="min-h-[100vh] bg-light dark:bg-dark">
<div id="root" class='min-h-[100vh]'>${dangerouslySkipEscape(pageHtml)}</div>
</body>
</html>`

  return {
    documentHtml,
    pageContext: {},
  }
}
