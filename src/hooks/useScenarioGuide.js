import { useEffect, useState } from 'react'

const STORAGE_KEY = 'scenarioGuideShown'
const SHOW_DELAY_MS = 600
const AUTO_HIDE_MS = 6000

/**
 * 首卡"点这里开始"引导气泡：
 * - 首次访问延迟 SHOW_DELAY_MS 后亮起，AUTO_HIDE_MS 后自动消失
 * - 用户主动 hover/click 首卡时立即关闭
 * - 关闭后写 localStorage，二刷不再出现
 */
export function useScenarioGuide() {
  const [visible, setVisible] = useState(false)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.localStorage.getItem(STORAGE_KEY) === 'true') return

    const showTimer = setTimeout(() => {
      setArmed(true)
      setVisible(true)
    }, SHOW_DELAY_MS)

    const hideTimer = setTimeout(() => {
      setVisible(false)
      try {
        window.localStorage.setItem(STORAGE_KEY, 'true')
      } catch {
        /* ignore */
      }
    }, AUTO_HIDE_MS)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const dismiss = () => {
    if (!armed) return
    setVisible(false)
    setArmed(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      /* ignore */
    }
  }

  return { visible, dismiss }
}
