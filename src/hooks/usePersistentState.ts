import { useCallback, useEffect, useState } from 'react'

export const usePersistentState = <T>(key: string, init: T, initializer: () => T): [T, (value: T) => void] => {
  const [state, setState] = useState(init)

  useEffect(() => {
    setState(localStorage[key] ?? initializer())
  }, [])

  const modify = useCallback((value: T) => {
    setState(value)
    localStorage[key] = value
  }, [])

  return [state, modify]
}
