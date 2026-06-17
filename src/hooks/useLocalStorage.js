import { useCallback, useEffect, useState } from 'react'

/**
 * 与 localStorage 双向同步的 state hook
 * - 首次渲染从 storage 读取
 * - 值变更时写回 storage
 * - SSR / storage 不可用时安全降级
 */
export function useLocalStorage(key, initialValue) {
  const read = useCallback(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const raw = window.localStorage.getItem(key)
      return raw !== null ? raw : initialValue
    } catch {
      return initialValue
    }
  }, [key, initialValue])

  const [value, setValue] = useState(read)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, String(value))
    } catch {
      /* quota exceeded / private mode — ignore */
    }
  }, [key, value])

  return [value, setValue]
}
