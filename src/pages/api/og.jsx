import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(
  'https://github.com/JetBrains/JetBrainsMono/blob/master/fonts/otf/JetBrainsMono-ExtraBold.otf?raw=true',
).then(res => res.arrayBuffer())

export default async function (req) {
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
          display: 'flex',
          flexDirection: 'column',
          padding: '128px',
          backgroundColor: '#732c35',
          fontFamily: 'jetbrains',
          color: 'white',
          justifyContent: 'space-between',
        }}
      >
        <span tw={'font-jetbrains text-5xl text-[#732c35] bg-[#ffa6b1] py-1 px-3 inline'}>
          {title}
        </span>
        <span tw={'font-jetbrains text-[#ffa6b1] text-6xl opacity-50'}>
          @ {author}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
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
