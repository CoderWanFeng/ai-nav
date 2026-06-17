import { useMemo } from 'react'
import { SCENARIOS } from '../data/scenarios'

/**
 * 搜索词 + 分类 + 场景 三合一过滤
 * 返回 { filteredTools, currentScenario, featured, rest }
 *
 * - filteredTools: 当前分类 + 搜索匹配后的全部工具
 * - currentScenario: 当前激活的场景对象（可能为 null）
 * - featured: 场景的精选工具子集（已按 filteredTools 过滤）
 * - rest: 场景下非精选的工具子集
 */
export function useFilteredTools(aiTools, { searchTerm, activeCategory, activeScenario }) {
  // 扁平化 + 搜索 + 分类
  const filteredTools = useMemo(() => {
    const lower = searchTerm.toLowerCase()
    return aiTools
      .flatMap((group) => group.items.map((item) => ({ ...item, category: group.category })))
      .filter((tool) => {
        const matchesSearch =
          !lower ||
          tool.name.toLowerCase().includes(lower) ||
          tool.desc.toLowerCase().includes(lower)
        const matchesCategory = activeCategory === '全部' || tool.category === activeCategory
        return matchesSearch && matchesCategory
      })
  }, [aiTools, searchTerm, activeCategory])

  const currentScenario = useMemo(
    () => (activeScenario ? SCENARIOS.find((s) => s.id === activeScenario) : null),
    [activeScenario],
  )

  const { featured, rest } = useMemo(() => {
    if (!currentScenario) return { featured: [], rest: [] }
    const featuredSet = new Set(currentScenario.featured)
    return {
      featured: filteredTools.filter((t) => featuredSet.has(t.name)),
      rest: filteredTools.filter((t) => !featuredSet.has(t.name)),
    }
  }, [currentScenario, filteredTools])

  return { filteredTools, currentScenario, featured, rest }
}
