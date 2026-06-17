import { useState, useEffect } from 'react'

const STORAGE_KEY = 'liveModalShown'

/**
 * 直播/福利弹窗状态管理
 * - 首次访问显示弹窗，关过后切换为悬浮按钮
 * - 用 useState 直接读取 localStorage 的方式在 React 中无效，
 *   因此用 useEffect 在挂载后做一次性同步
 */
export function useLiveModal() {
  const [showLiveModal, setShowLiveModal] = useState(true)
  const [showLiveButton, setShowLiveButton] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const hasShown = window.localStorage.getItem(STORAGE_KEY) === 'true'
    if (hasShown) {
      setShowLiveModal(false)
      setShowLiveButton(true)
    }
  }, [])

  const closeModal = () => {
    setShowLiveModal(false)
    setShowLiveButton(true)
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      /* ignore */
    }
  }

  const openModal = () => {
    setShowLiveModal(true)
    setShowLiveButton(false)
  }

  return { showLiveModal, showLiveButton, closeModal, openModal }
}
