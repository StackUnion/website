import { ImageResponse } from '@vercel/og'
import Color from 'color'

export const config = {
  runtime: 'experimental-edge',
}

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

export default async function () {
  const accent = Color(colors[Math.floor(Math.random() * colors.length)])

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          padding: '128px',
          backgroundColor: accent.darken(0.5).rgb().string(),
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="400" height="400" version="1.1" viewBox="0 0 270.93 270.93" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke={accent.lighten(0.5).rgb().string()} strokeLinecap="round" strokeWidth="24.975">
            <path d="m32.961 76.285 102.51-59.182" />
            <path d="m237.97 76.285-102.51 59.182" />
            <path d="m135.47 17.103 102.51 59.182" opacity=".2" />
            <path d="m32.961 76.285 102.51 59.182" />
            <path d="m237.97 76.285v118.36" opacity=".2" />
            <path d="m135.47 135.47v118.36" />
            <path d="m237.97 194.65-102.51 59.182" />
            <path d="m32.961 76.285v118.36" />
            <path d="m135.47 253.83-102.51-59.182" opacity=".2" />
          </g>
        </svg>
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  )
}
