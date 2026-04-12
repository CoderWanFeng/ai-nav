import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import aipptLogo from './assets/ai-办公/aippt-logo.png'

const aiTools = [
  {
    category: 'AI对话',
    items: [
      { name: 'ChatGPT', url: 'https://chatgpt.com', desc: 'OpenAI的AI对话助手', icon: '🤖' },
      { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic的AI助手', icon: '🧠' },
      { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google的AI对话模型', icon: '💎' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: '月之暗面AI 超长上下文', icon: '🌙' },
      { name: '豆包', url: 'https://www.doubao.com', desc: '字节跳动AI助手', icon: '🫘' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索AI 推理能力强', icon: '🔍' },
      { name: '腾讯元宝', url: 'https://yuanbao.tencent.com', desc: '腾讯混元AI 微信生态', icon: '🐧' },
      { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里AI大模型', icon: '🏗️' },
      { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度AI对话产品', icon: '📖' },
      { name: '智谱清言', url: 'https://www.zhipuai.cn', desc: '智谱AI对话助手', icon: '⚡' },
      { name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', desc: '科大讯飞AI大模型', icon: '🔥' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎 带引用', icon: '🔭' },
    ]
  },
  {
    category: 'AI办公',
    items: [
      { name: 'AI免费生成PPT', url: 'https://www.aippt.cn', desc: '一句话，一分钟，一键生成PPT', icon: aipptLogo },
      { name: 'WPS AI', url: 'https://ai.wps.cn', desc: '金山办公AI助手', icon: '📄' },
      { name: '腾讯文档AI', url: 'https://docs.qq.com', desc: '在线文档AI助手', icon: '📝' },
      { name: '飞书AI', url: 'https://www.feishu.cn', desc: '字节跳动办公AI', icon: '🚀' },
      { name: '百度文库AI', url: 'https://wenku.baidu.com', desc: '百度文档智能处理', icon: '📚' },
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', desc: '智能写作助手', icon: '✍️' },
      { name: '秘塔写作猫', url: 'https://xiezuocat.com', desc: '中文AI写作改写', icon: '🐱' },
      { name: 'ChatDOC', url: 'https://chatdoc.com', desc: 'AI文档分析和问答', icon: '📋' },
      { name: 'Monica', url: 'https://monica.im', desc: 'AI助手 浏览器插件', icon: '🎭' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI营销文案生成', icon: '📢' },
      { name: 'Jasper', url: 'https://www.jasper.ai', desc: '企业级AI内容创作', icon: '💼' },
      { name: 'QuillBot', url: 'https://quillbot.com', desc: 'AI写作润色改写', icon: '✏️' },
    ]
  },
  {
    category: 'AI绘画',
    items: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', desc: '顶级AI绘画工具', icon: '🎨' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', desc: '开源AI绘画模型', icon: '🖼️' },
      { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI图像生成', icon: '🌟' },
      { name: 'Leonardo AI', url: 'https://leonardo.ai', desc: 'AI游戏资产生成', icon: '🎮' },
      { name: 'Ideogram', url: 'https://ideogram.ai', desc: 'AI图像生成 文字渲染强', icon: '💫' },
      { name: '即梦AI', url: 'https://jimeng.jianying.com', desc: '字节AI绘画视频', icon: '✨' },
      { name: '可灵AI', url: 'https://klingai.kuaishou.com', desc: '快手AI视频生成', icon: '🎬' },
      { name: '通义万相', url: 'https://tongyi.aliyun.com/wanxiang', desc: '阿里AI绘画', icon: '🎭' },
      { name: '哩布哩布', url: 'https://liblib.ai', desc: '国产AI绘画社区', icon: '🌈' },
      { name: '吐司AI', url: 'https://tusi.art', desc: 'AI模型分享社区', icon: '🎨' },
      { name: 'Adobe Firefly', url: 'https://firefly.adobe.com', desc: 'Adobe生成式AI', icon: '🔥' },
      { name: 'Canva AI', url: 'https://www.canva.com', desc: '在线设计AI助手', icon: '🖌️' },
    ]
  },
  {
    category: 'AI编程',
    items: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: '微软AI编程助手', icon: '💻' },
      { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI原生代码编辑器', icon: '✏️' },
      { name: 'Bolt.new', url: 'https://bolt.new', desc: 'AI全栈Web开发', icon: '⚡' },
      { name: 'Lovable', url: 'https://lovable.dev', desc: 'AI应用构建平台', icon: '❤️' },
      { name: 'Windsurf', url: 'https://codeium.com/windsurf', desc: 'AI代码编辑器', icon: '🌊' },
      { name: 'Codeium', url: 'https://codeium.com', desc: '免费AI代码补全', icon: '🚀' },
      { name: '通义灵码', url: 'https://tongyi.aliyun.com/lingma', desc: '阿里AI编程助手', icon: '🔧' },
      { name: 'CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', desc: 'AWS AI编程工具', icon: '🔩' },
      { name: 'Devin', url: 'https://devin.ai', desc: 'AI软件工程师', icon: '🤖' },
      { name: 'Tabnine', url: 'https://tabnine.com', desc: 'AI代码补全助手', icon: '📋' },
      { name: 'Augment', url: 'https://www.augmentcode.com', desc: '个人AI编程助手', icon: '💪' },
      { name: 'Continue', url: 'https://continue.dev', desc: '开源AI代码助手', icon: '▶️' },
    ]
  },
  {
    category: 'AI视频',
    items: [
      { name: 'Sora', url: 'https://openai.com/sora', desc: 'OpenAI视频生成', icon: '🎥' },
      { name: 'Runway', url: 'https://runwayml.com', desc: 'AI视频编辑生成', icon: '🎬' },
      { name: 'Pika', url: 'https://pika.art', desc: 'AI视频生成工具', icon: '🍿' },
      { name: 'Luma Dream', url: 'https://lumalabs.ai/dream-machine', desc: 'AI视频图片生成', icon: '✨' },
      { name: '海螺AI', url: 'https://hailuoai.video', desc: '字节AI视频生成', icon: '🐚' },
      { name: '腾讯智影', url: 'https://zenvideo.qq.com', desc: '腾讯AI视频创作', icon: '📹' },
      { name: '剪映', url: 'https://www.jianying.com', desc: '字节AI视频剪辑', icon: '✂️' },
      { name: '万兴播爆', url: 'https://virbo.wondershare.cn', desc: 'AI数字人视频', icon: '🎙️' },
      { name: 'Fliki', url: 'https://fliki.ai', desc: 'AI文本转视频', icon: '🎞️' },
      { name: 'Opus Clip', url: 'https://opus.pro', desc: 'AI长视频转短视频', icon: '📺' },
    ]
  },
  {
    category: 'AI搜索',
    items: [
      { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎 带来源', icon: '🔭' },
      { name: 'You.com', url: 'https://you.com', desc: 'AI搜索引擎 隐私保护', icon: '👤' },
      { name: '秘塔AI搜索', url: 'https://metaso.cn', desc: 'AI搜索引擎 无广告', icon: '🐴' },
      { name: '天工AI', url: 'https://www.tiangong.cn', desc: '昆仑万维AI搜索', icon: '⚔️' },
      { name: '纳米AI搜索', url: 'https://www.n.cn', desc: '360 AI搜索', icon: '🔬' },
      { name: 'Devv AI', url: 'https://devv.ai', desc: '程序员AI搜索引擎', icon: '👨‍💻' },
      { name: 'Phind', url: 'https://phind.com', desc: '开发者AI搜索', icon: '🔍' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: 'AI助手 联网搜索', icon: '🌙' },
    ]
  },
  {
    category: 'AI音频',
    items: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', desc: 'AI语音合成克隆', icon: '🎙️' },
      { name: '剪映', url: 'https://www.jianying.com', desc: 'AI配音字幕', icon: '🎵' },
      { name: '讯飞听见', url: 'https://www.iflyrec.com', desc: '语音转文字', icon: '👂' },
      { name: '标小智', url: 'https://biaoti.com', desc: 'AI logo生成', icon: '🏷️' },
      { name: 'Uberduck', url: 'https://uberduck.ai', desc: 'AI语音合成', icon: '🦆' },
      { name: 'Murf AI', url: 'https://murf.ai', desc: 'AI语音生成', icon: '🗣️' },
    ]
  },
  {
    category: 'AI项目',
    items: [
      { name: 'OpenClaw', url: 'https://www.python-office.com/openclaw/', desc: '开源AI爬虫工具', icon: '🦞' },
      { name: 'python-office', url: 'https://atomgit.com/CoderWanFeng1/python-office', desc: '自动化办公Python库', icon: '📊' },
      { name: 'popdf', url: 'https://atomgit.com/python4office/popdf', desc: 'PDF智能处理库', icon: '📄' },
      { name: 'LangChain', url: 'https://www.langchain.com', desc: 'AI应用开发框架', icon: '⛓️' },
      { name: 'LlamaIndex', url: 'https://www.llamaindex.ai', desc: 'LLM数据框架', icon: '🐪' },
      { name: 'Ollama', url: 'https://ollama.com', desc: '本地运行LLM', icon: '🦙' },
      { name: 'AnythingLLM', url: 'https://anythingllm.com', desc: '本地AI知识库', icon: '📚' },
      { name: 'FastGPT', url: 'https://fastgpt.cn', desc: 'AI知识库问答', icon: '⚡' },
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
        <h1>🚀 白开水AI</h1>
        <p>发现最实用的AI工具，提升工作效率 - 专业AI导航平台</p>
        <nav className="header-nav">
          <Link to="/">AI工具导航</Link>
          <Link to="/faq">常见问题</Link>
          <Link to="/about">关于我们</Link>
        </nav>
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
                    <div className="tool-icon">
                      {tool.icon.startsWith('/') ? (
                        <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                      ) : (
                        tool.icon
                      )}
                    </div>
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
                <div className="tool-icon">
                      {tool.icon.startsWith('/') ? (
                        <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                      ) : (
                        tool.icon
                      )}
                    </div>
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
        <p>© 2026 白开水AI导航 | 让AI成为你的得力助手</p>
        <p className="footer-links">
          <Link to="/about">关于我们</Link>
          <Link to="/faq">常见问题</Link>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="icp-link"
          >
            鲁ICP备2021040536号-2
          </a>
        </p>
        {/* 跨站项目导流 */}
        <div className="cross-site-links">
          <a href="https://python4office.cn" target="_blank" rel="noopener noreferrer">技术博客</a>
          <a href="https://www.python-office.com" target="_blank" rel="noopener noreferrer">python-office</a>
          <a href="https://openclaw.python4office.cn" target="_blank" rel="noopener noreferrer">OpenClaw</a>
          <a href="https://digital.python4office.cn" target="_blank" rel="noopener noreferrer">数字游民</a>
          <a href="https://opc.python4office.cn" target="_blank" rel="noopener noreferrer">建站教程</a>
        </div>
      </footer>
    </div>
  )
}

export default App
