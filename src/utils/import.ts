import dynamic from 'next/dynamic'

export const Import = <T, M extends keyof T>(named: M, imp: () => Promise<T>, suspense = true): T[M] =>
  dynamic(async () => ({ default: await imp().then((module: any) => module[named]) }), { suspense }) as T[M]
