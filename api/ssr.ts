import { VercelRequest, VercelResponse } from '@vercel/node'
import { renderPage } from 'vite-plugin-ssr'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { url } = req

  const pageContextInit = { url }
  const pageContext = await renderPage(pageContextInit)
  const { httpResponse } = pageContext

  if (!httpResponse) {
    res.statusCode = 200
    res.end()
    return
  }

  const { body, statusCode, contentType } = httpResponse
  res.statusCode = statusCode
  res.setHeader('content-type', contentType)
  res.end(body)
}
