import { CATEGORY_ICONS, CATEGORY_DESCRIPTIONS } from '../data/categories'

/**
 * 获取分类对应的 emoji 图标，找不到时回退到通用图标
 */
export function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || '📦'
}

/**
 * 获取分类的描述文案
 */
export function getCategoryDescription(category) {
  return CATEGORY_DESCRIPTIONS[category] || '探索各类AI工具，提升工作和学习效率。'
}

/**
 * 简单的防抖函数：高频触发时只执行最后一次
 */
export function debounce(fn, delay = 300) {
  let timer = null
  return function debounced(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

/**
 * 平滑滚动到顶部
 */
export function scrollToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
