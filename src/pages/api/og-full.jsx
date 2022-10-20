import { ImageResponse } from '@vercel/og'
import { shade, tint } from 'polished/dist/polished.cjs'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(
  'https://github.com/JetBrains/JetBrainsMono/blob/master/fonts/otf/JetBrainsMono-ExtraBold.otf?raw=true',
).then(res => res.arrayBuffer())

const colors = [
  '#ff0044',
  '#d0ff00',
  '#ffdd00',
  '#5500ff',
  '#c800ff',
  '#ff5900',
  '#ff0088',
  '#00ffe1',
  '#00ffa6',
  '#5eff00',
  '#ff2600',
  '#d5d5d5',
  '#fdffdc',
]

export default async function (req) {
  const accent = colors[Math.floor(Math.random() * colors.length)]

  const fontData = await font

  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') ?? 'Bruh title'
  const author = searchParams.get('author') ?? 'limpix'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          padding: '128px',
          backgroundColor: shade(0.5, accent),
          fontFamily: 'jetbrains',
          color: 'white',
          display: 'flex',
          position: 'relative',
        }}
      >
        <svg
          width="1280"
          height="1280"
          version="1.1"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          tw={'absolute top-1/2 left-1/2'}
          style={{ transform: 'translate(-36.5%, -24%)' }}
        >
          <path d="m243.25 183.25 180.3 104.1-63.316 109.67-231.37-132.57" fillOpacity=".2" />
          <g fill="none" stroke={shade(0.8, accent)} strokeLinecap="round" strokeWidth="24.975">
            <path d="m32.961 76.285 102.51-59.182" />
            <path d="m237.97 76.285-102.51 59.182" />
            <path d="m32.961 76.285 102.51 59.182" />
            <path d="m135.47 135.47v118.36" />
            <path d="m237.97 194.65-102.51 59.182" />
            <path d="m32.961 76.285v118.36" />
            <path d="m135.47 253.83-102.51-59.182" opacity=".2" />
            <path d="m237.97 194.65-102.51-59.182" opacity=".2" />
          </g>
        </svg>
        <div tw={'flex flex-col h-full w-full justify-between'}>
          <span
            tw={'font-jetbrains text-6xl py-1 px-3 inline'}
            style={{ color: shade(0.5, accent), backgroundColor: tint(0.5, accent) }}
          >
            {title}
          </span>
          <span tw={'font-jetbrains text-6xl opacity-50'} style={{ color: tint(0.5, accent) }}>
            @ {author}
          </span>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 670,
      fonts: [
        {
          name: 'jetbrains',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
