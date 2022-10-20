import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default async function () {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          padding: '128px',
          backgroundColor: '#838374',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="400" height="400" version="1.1" viewBox="0 0 270.93 270.93" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke={'#fdffdc'} strokeLinecap="round" strokeWidth="24.975">
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
