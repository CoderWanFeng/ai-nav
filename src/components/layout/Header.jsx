/**
 * 移动端顶部栏 + 主标题 hero
 */
function Header({ onOpenSidebar }) {
  return (
    <>
      <div className="mobile-header">
        <button className="menu-toggle" onClick={onOpenSidebar} aria-label="打开菜单">
          ☰
        </button>
        <h1 className="mobile-title">白开水AI</h1>
      </div>

      <header className="header">
        <h1>
          发现<span className="highlight-text">好用</span>的AI工具
        </h1>
        <p>发现最实用的AI工具，提升工作效率 - 专业AI导航平台</p>
      </header>
    </>
  )
}

export default Header
