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
      { name: 'AI免费生成PPT', url: 'https://www.aippt.cn/?utm_type=Navweb&utm_source=bks&utm_page=aippt&utm_plan=aippt&utm_unit=AIPPT&utm_keyword=40517106', desc: '一句话，一分钟，一键生成PPT', icon: aipptLogo },
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
      { name: '沁言学术', url: 'https://app.qinyanai.com/?utm=cg&cgv=3mnz8w7no1', desc: 'AI学术全流程工具，覆盖查读写闭环', icon: '📚' },
      { name: '墨刀AI', url: 'https://modao.cc/feature/ai?utm_channel=wl&utm_source=referrals&utm_keyword=cakegrowth&utm=cg&cgv=5ln1qj3erw', desc: '极速生成PRD文档、原型图、PPT、图表的智能平台', icon: '✏️', tag: 'CPS 25%' },
      { name: '超级简历WonderCV', url: 'https://www.wondercv.com/?utm=cg&cgv=zdkjoy9e1r', desc: '面向应届生和AI小白的智能求职平台', icon: '📄', tag: 'CPS 40%' },
      { name: 'UP简历', url: 'https://upcv.tech/?utm=cg&cgv=9we2rzwkgo', desc: 'AI帮助用户找工作的求职平台，覆盖求职全流程', icon: '📋', tag: 'CPS 40%' },
      { name: 'iSlide PPT', url: 'https://www.islide.cc/landing?utm=cg&cgv=rpexy6vk90', desc: 'AI一键生成PPT，内置9大资源库', icon: '🎨', tag: 'CPS 50%' },
      { name: 'SpeedAI', url: 'https://speedai.com/?utm=cg&cgv=3mnz8wjno1', desc: 'AIGC检测、降重降AI平台', icon: '⚡', tag: 'CPS 25%' },
    ]
  },
  {
    category: 'AI绘画',
    items: [
      { name: 'LibTV', url: 'https://www.liblib.tv/?sourceid=005902&utm=cg&cgv=9omkl4jn4d', desc: 'AI绘画社区 模型分享', icon: '🌈' },
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
      { name: '星流', url: 'https://www.xingliu.art/?souceid=005903&utm=cg&cgv=1zn5oxmeqm', desc: '面向创作者、设计师的一站式国产AI视觉创作平台', icon: '🌟', tag: 'CPA ¥5' },
      { name: 'LiblibAI', url: 'https://www.liblib.art/?souceid=005904&utm=cg&cgv=2znrw0okr7', desc: '一站式多模态AI创作平台，覆盖图片、视频生成', icon: '🌈', tag: 'CPA ¥5' },
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
      { name: '讯飞智作', url: 'https://www.xfzhizuo.cn/?utm=cg&cgv=l41ev8dkv8', desc: 'AI数字人视频生成', icon: '🎙️' },
      { name: '白日梦', url: 'https://aibrm.com/?utm=cg&cgv=59ng4gjnr2', desc: 'AI视频创作类AIGC创作平台', icon: '💭', tag: 'CPS 30%' },
      { name: 'JoyPix AI', url: 'https://www.joypix.ai/app/login/?utm=cg&cgv=4ony58oejx', desc: '一站式AI视频平台', icon: '🖼️', tag: 'CPS 20%' },
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
      { name: '音述AI', url: 'https://www.yinshu.me/?ad_channel=cakegrowth&utm=cg&cgv=qmno24zk29', desc: 'AI音乐创作与声音分享社区', icon: '🎵', tag: 'CPS 15%' },
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
      { name: 'AstronClaw', url: 'https://agent.xfyun.cn/astron-claw?utm=cg&cgv=3rpe395e05', desc: '讯飞旗下的一键云端部署AI智能体平台', icon: '🦞', tag: 'CPA ¥30' },
      { name: '爱派AiPy', url: 'https://www.aipyaipy.com/?referral=BJ5OOSP&utm=cg&cgv=59ng4ggnr2', desc: '融合LLM与Python能力的AI智能体', icon: '🐍', tag: 'CPA ¥5' },
      { name: '码上飞', url: 'https://www.codeflying.net/?utm=cg&cgv=20epp94ew1', desc: '一站式AI应用开发智能体，可生成小程序、APP、网站', icon: '🚀', tag: 'CPA+CPS' },
      { name: '01Agent', url: 'https://01agent.net/?utm=cg&cgv=rpexy6zk90', desc: '全流程内容创作智能体，专为国内主流平台优化', icon: '🤖', tag: 'CPS 35%' },
      { name: '火山引擎', url: 'https://volcengine.com/L/hZRFoiCAVDE/', desc: '字节跳动旗下企业级云与AI服务平台', icon: '🔥', tag: 'CPA ¥4' },
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
                <div className="modal-live-time">⏰ 求职福利！</div>
                <h3 className="modal-live-topic">邀你一起使用WonderCV！专业简历，轻松求职，WonderCV 助你斩获offer</h3>
                <p className="modal-live-desc">AI简历 让求职更高效</p>
              </div>
            </div>
            <div className="modal-actions">
              <a
                href="https://www.wondercv.com/?utm=cg&cgv=zdkjoy9e1r"
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
          <a href="https://www.python-office.com/openclaw" target="_blank" rel="noopener noreferrer">OpenClaw</a>
          <a href="https://www.python-office.com/how-to-digital-nomad" target="_blank" rel="noopener noreferrer">数字游民</a>
          <a href="https://www.python-office.com/opc" target="_blank" rel="noopener noreferrer">建站教程</a>
        </div>
      </footer>
    </div>
  )
}

export default App
