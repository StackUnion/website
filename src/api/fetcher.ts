export const fetcher = (input: string, init?: RequestInit) => fetch(input, init).then(res => res.json())
export const apiFetcher = <T = any>(input: string, init?: RequestInit): Promise<T> =>
  fetch(process.env.NEXT_PUBLIC_API + input, init).then(res => res.json())
export const fetchApiPagination = <T = any>(
  input: string,
  init?: RequestInit,
): Promise<{ total: number; items: T[] }> =>
  fetch(process.env.NEXT_PUBLIC_API + input, init).then(async res => ({
    total: +(res.headers.get('X-Total-Count') ?? 0),
    items: await res.json(),
  }))
