import { useEffect, useState } from 'react'

function useDebounce<T>(fn: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(fn)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(fn), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [fn, delay])

  return debouncedValue
}

export default useDebounce
