export const fetcher = (input: string, init?: RequestInit) => fetch(input, init).then(res => res.json())
export const apiFetcher = (input: string, init?: RequestInit) =>
  fetch(process.env.NEXT_PUBLIC_API + input, init).then(res => res.json())
