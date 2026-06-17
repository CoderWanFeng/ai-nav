import { useMemo } from 'react'
import { getCategoryIcon } from '../../utils/categories'

/**
 * 侧边栏：分类导航（桌面常驻 / 移动端抽屉）
 */
function Sidebar({ categories, activeCategory, onCategoryChange, isOpen, onClose }) {
  // 全部置顶，其余按传入顺序（数据源已用 CATEGORY_ORDER 控序）
  const items = useMemo(() => categories, [categories])

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">🚀 白开水AI</h2>
          <button className="sidebar-close" onClick={onClose} aria-label="关闭菜单">
            ✕
          </button>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">分类导航</h3>
            <ul className="nav-list">
              {items.map((cat) => (
                <li key={cat}>
                  <button
                    className={`nav-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => onCategoryChange(cat)}
                  >
                    {cat === '全部' ? '🏠 全部工具' : `${getCategoryIcon(cat)} ${cat}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="sidebar-footer">
          <p className="sidebar-copyright">© 2026 白开水AI</p>
        </div>
      </aside>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  )
}

export default Sidebar
