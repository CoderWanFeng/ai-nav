import { useMemo, useState } from 'react'
import { aiTools } from './data/tools'
import { CATEGORY_ORDER } from './data/categories'
import { scrollToTop } from './utils/categories'
import { useLiveModal } from './hooks/useLiveModal'
import { useScenarioGuide } from './hooks/useScenarioGuide'
import { useFilteredTools } from './hooks/useFilteredTools'

import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SearchBar from './components/sections/SearchBar'
import Scenarios from './components/sections/Scenarios'
import ToolGrid from './components/sections/ToolGrid'
import LiveModal from './components/sections/LiveModal'
import LiveButton from './components/sections/LiveButton'
import SeoSchema from './components/SeoSchema'

import './App.css'

/**
 * 主页 App：组合各个 section
 * - 自身只持有"页面级"状态：搜索词、分类、场景、侧边栏开合、"查看更多"
 * - 副作用/本地状态全部下沉到 hooks，渲染交给 components
 */
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [activeScenario, setActiveScenario] = useState(null)
  const [showAllInCategory, setShowAllInCategory] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { showLiveModal, showLiveButton, closeModal, openModal } = useLiveModal()
  const { visible: guideVisible, dismiss: dismissGuide } = useScenarioGuide()

  // 用 CATEGORY_ORDER 控序；新出现的分类自动追加在尾部
  const categories = useMemo(() => {
    const present = new Set(aiTools.map((t) => t.category))
    const ordered = CATEGORY_ORDER.filter((c) => present.has(c))
    const extras = [...present].filter((c) => !CATEGORY_ORDER.includes(c))
    return ['全部', ...ordered, ...extras]
  }, [])

  const { filteredTools, currentScenario, featured, rest } = useFilteredTools(aiTools, {
    searchTerm,
    activeCategory,
    activeScenario,
  })

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setActiveScenario(null)
    setShowAllInCategory(false)
    setSidebarOpen(false)
    scrollToTop()
  }

  const handleScenarioClick = (scenario) => {
    setActiveCategory(scenario.category)
    setActiveScenario(scenario.id)
    setShowAllInCategory(false)
    scrollToTop()
  }

  return (
    <div className="app">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-wrapper">
        <SeoSchema />

        <Header onOpenSidebar={() => setSidebarOpen(true)} />

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <Scenarios
          activeScenario={activeScenario}
          onScenarioClick={handleScenarioClick}
          guideVisible={guideVisible}
          onGuideDismiss={dismissGuide}
        />

        <main className="content">
          {currentScenario ? (
            <ToolGrid
              mode="scenario"
              featured={featured}
              rest={rest}
              showAllInCategory={showAllInCategory}
              onToggleShowAll={() => setShowAllInCategory((v) => !v)}
            />
          ) : (
            <ToolGrid mode="flat" tools={filteredTools} />
          )}
        </main>

        <Footer />
      </div>

      {showLiveModal && <LiveModal onClose={closeModal} />}
      {showLiveButton && <LiveButton onClick={openModal} />}
    </div>
  )
}

export default App
