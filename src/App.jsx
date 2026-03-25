import { useState } from 'react'
import './App.css'

const aiTools = [
  {
    category: 'AI对话',
    items: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI的AI对话助手', icon: '🤖' },
      { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic的AI助手', icon: '🧠' },
      { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google的AI对话模型', icon: '💎' },
      { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度AI对话产品', icon: '📖' },
    ]
  },
  {
    category: 'AI绘画',
    items: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', desc: '顶级AI绘画工具', icon: '🎨' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', desc: '开源AI绘画模型', icon: '🖼️' },
      { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI图像生成', icon: '🌟' },
      { name: '通义万相', url: 'https://tongyi.aliyun.com/wanxiang', desc: '阿里AI绘画', icon: '🎭' },
      { name: 'AI海报', url: 'https://mp.weixin.qq.com/s/kEY96ikMsJoeD_w1Ssl8Ig', desc: '零基础AI海报课程', icon: '🖼️' },
    ]
  },
  {
    category: 'AI编程',
    items: [
      { name: 'GitHub Copilot', url: 'https://github.com/copilot', desc: 'AI编程助手', icon: '💻' },
      { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI代码编辑器', icon: '✏️' },
      { name: 'CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', desc: 'AWS AI编程工具', icon: '🔧' },
      { name: '通义灵码', url: 'https://tongyi.aliyun.com/lingma', desc: '阿里AI编程助手', icon: '⚡' },
      { name: '斯坦福AI', url: 'https://mp.weixin.qq.com/s/W4jXhXKPs1O8I-7GpFSODQ', desc: '斯坦福AI编程课程', icon: '🎓' },
    ]
  },
  {
    category: 'AI写作',
    items: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', desc: '智能写作助手', icon: '📝' },
      { name: 'Jasper', url: 'https://www.jasper.ai', desc: 'AI 营销文案', icon: '📢' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI 文案生成', icon: '📋' },
      { name: '秘塔写作猫', url: 'https://xiezuocat.com', desc: '中文 AI写作', icon: '🐱' },
    ]
  },
  {
    category: 'AI 软件',
    items: [
      { name: 'Python', url: 'https://www.python.org/', desc: 'Python 官方网站', icon: '🐍' },
      { name: 'WorkBuddy', url: 'https://www.codebuddy.cn/promotion/?ref=jnlybo7jhjpcv21b', desc: 'AI Agent 办公新范式', icon: '🤖' },
      { name: '养龙虾', url: 'https://mp.weixin.qq.com/s/aNwU5J_xODm15sHPZmDu1w', desc: 'OpenClaw实战教程', icon: '🦞' },
    ]
  },
  {
    category: 'AI 项目',
    items: [
      { name: 'OpenClaw', url: 'https://www.python-office.com/openclaw/', desc: '开源AI爬虫工具', icon: '🦞' },
      { name: 'python-office', url: 'https://atomgit.com/CoderWanFeng1/python-office', desc: '自动化办公', icon: '📊' },
      { name: 'popdf', url: 'https://atomgit.com/python4office/popdf', desc: 'PDF 智能处理', icon: '📄' },
    ]
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [showLiveModal, setShowLiveModal] = useState(true)
  const [showLiveButton, setShowLiveButton] = useState(false)

  const categories = ['全部', ...aiTools.map(t => t.category)]

  // 关闭弹窗
  const handleCloseModal = () => {
    setShowLiveModal(false)
    setShowLiveButton(true) // 显示悬浮按钮
    localStorage.setItem('liveModalShown', 'true')
  }

  // 重新打开弹窗
  const handleOpenModal = () => {
    setShowLiveModal(true)
    setShowLiveButton(false)
  }

  // 检查是否已经显示过
  useState(() => {
    const hasShown = localStorage.getItem('liveModalShown')
    if (hasShown === 'true') {
      setShowLiveModal(false)
      setShowLiveButton(true) // 显示悬浮按钮
    }
  })
  
  const filteredTools = aiTools.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.category }))
  ).filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.desc.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === '全部' || tool.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 白开水 AI</h1>
        <p>发现最实用的 AI 工具，提升工作效率 - 专业 AI 导航平台</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="搜索AI工具..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 直播预告弹窗 */}
      {showLiveModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2 className="modal-title">🎁 福利教程</h2>
            <div className="modal-live-info">
              <div className="modal-live-item">
                <div className="modal-live-time">⏰ 本月更新！</div>
                <h3 className="modal-live-topic">OpenClaw入门教程 + 实战案例库</h3>
                <p className="modal-live-desc">有手就行，一起养虾</p>
              </div>
            </div>
            <div className="modal-actions">
              <a
                href="https://www.python-office.com/openclaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn modal-btn-primary"
              >
                🎁 点击领取
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="main-content">
        {activeCategory === '全部' && !searchTerm ? (
          aiTools.map(category => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="tools-grid">
                {category.items.map(tool => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-card"
                  >
                    <div className="tool-icon">{tool.icon}</div>
                    <div className="tool-info">
                      <h3 className="tool-name">{tool.name}</h3>
                      <p className="tool-desc">{tool.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
              >
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-category">{tool.category}</p>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      {/* 直播预告悬浮按钮 */}
      {showLiveButton && (
        <button className="live-float-button" onClick={handleOpenModal}>
          <span className="live-button-icon">🎁</span>
          <span className="live-button-text">福利</span>
        </button>
      )}

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">📖 关于我们</h2>
          <p className="about-text">
            白开水 AI 社区致力于分享最实用、最有价值的 AI 工具和资源，
            帮助每个人更好地利用人工智能提升工作效率。
            我们相信 AI 应该像白开水一样纯净、易用、人人可及。
          </p>
          <a
            href="https://www.python4office.cn/bks-ai/readme/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            加入 AI 交流群 →
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 AI工具导航 | 让AI成为你的得力助手</p>
        <p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="icp-link"
          >
            鲁ICP备2021040536号-2
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
