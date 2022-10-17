export const fetcher = (input: RequestInfo | URL, init?: RequestInit) => fetch(input, init).then(res => res.json())
export const apiFetcher = (input: RequestInfo | URL, init?: RequestInit) => {
  if (typeof input !== 'string') throw new Error('Yeow')
  return fetch(process.env.NEXT_PUBLIC_API + input, init).then(res => res.json())
}
