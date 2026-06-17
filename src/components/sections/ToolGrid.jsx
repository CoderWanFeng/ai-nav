import ToolCard from '../cards/ToolCard'

/**
 * 工具网格：分两种渲染模式
 * 1. 场景模式：精选 + 其余分两块展示
 * 2. 普通模式：扁平网格
 */
function ToolGrid({ mode = 'flat', tools = [], featured = [], rest = [], showAllInCategory, onToggleShowAll }) {
  if (mode === 'scenario') {
    const visibleRest = showAllInCategory ? rest : rest.slice(0, 12)
    return (
      <div className="tools-scenario">
        {featured.length > 0 && (
          <>
            <h3 className="scenario-section-title">🌟 精选工具</h3>
            <div className="tools-grid">
              {featured.map((tool, index) => (
                <ToolCard key={`featured-${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
          </>
        )}
        {rest.length > 0 && (
          <>
            <h3 className="scenario-section-title">📚 其他工具</h3>
            <div className="tools-grid">
              {visibleRest.map((tool, index) => (
                <ToolCard key={`rest-${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
            {!showAllInCategory && rest.length > 12 && (
              <div className="show-more-wrap">
                <button className="show-more-btn" onClick={onToggleShowAll}>
                  查看更多（{rest.length - 12}）↓
                </button>
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <div className="tools-grid">
      {tools.map((tool, index) => (
        <ToolCard key={`${tool.name}-${index}`} tool={tool} />
      ))}
    </div>
  )
}

export default ToolGrid
