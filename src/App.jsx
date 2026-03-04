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
    ]
  },
  {
    category: 'AI编程',
    items: [
      { name: 'GitHub Copilot', url: 'https://github.com/copilot', desc: 'AI编程助手', icon: '💻' },
      { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI代码编辑器', icon: '✏️' },
      { name: 'CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', desc: 'AWS AI编程工具', icon: '🔧' },
      { name: '通义灵码', url: 'https://tongyi.aliyun.com/lingma', desc: '阿里AI编程助手', icon: '⚡' },
    ]
  },
  {
    category: 'AI写作',
    items: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', desc: '智能写作助手', icon: '📝' },
      { name: 'Jasper', url: 'https://www.jasper.ai', desc: 'AI营销文案', icon: '📢' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI文案生成', icon: '📋' },
      { name: '秘塔写作猫', url: 'https://xiezuocat.com', desc: '中文AI写作', icon: '🐱' },
    ]
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

  const categories = ['全部', ...aiTools.map(t => t.category)]
  
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
        <h1>🚀 白开水AI</h1>
        <p>发现最实用的AI工具，提升工作效率 - 专业AI导航平台</p>
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
