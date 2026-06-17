import { Link } from 'react-router-dom'
import './About.css'

function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "白开水AI",
    "description": "让AI像白开水一样纯净、易用、人人可及。白开水AI导航是专业的免费AI工具导航平台，收录100+热门AI工具。",
    "url": "https://python-office.com/ai-nav",
    "founder": { "@type": "Person", "name": "程序员晚枫" },
    "mission": "帮助用户发现最实用、最好用的AI工具，降低AI使用门槛，共建共享AI工具生态。",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@python4office.cn"
    },
    "sameAs": [
      "https://www.python4office.cn",
      "https://github.com/CoderWanFeng"
    ]
  };

  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <header className="about-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">首页</Link>
            <span>/</span>
            <span>关于我们</span>
          </nav>
          <h1>🚰 关于白开水AI</h1>
          <p className="subtitle">让AI像白开水一样纯净、易用、人人可及</p>
        </div>
      </header>

      <main className="about-main">
        <div className="container">
          
          {/* 品牌故事 */}
          <section className="about-section">
            <h2 className="section-title">💧 我们的故事</h2>
            <div className="section-content">
              <p>
                白开水AI导航诞生于2023年，源于一个简单的信念：<strong>人工智能应该像白开水一样，
                纯净、易得、每个人都触手可及。</strong>
              </p>
              <p>
                在这个AI飞速发展的时代，每天都有新的AI工具诞生。从ChatGPT到Midjourney，
                从Claude到Stable Diffusion，这些工具正在深刻改变我们的工作和生活方式。
                但对于普通用户来说，找到合适的AI工具、了解它们的用途，往往是一件困难的事情。
              </p>
              <p>
                我们创建白开水AI导航，正是为了解决这个痛点。我们精心筛选收录了100+优质的AI工具，
                按照功能分类整理，让用户能够快速找到自己需要的AI助手。无论你是AI新手还是资深用户，
                都能在这里发现新的可能。
              </p>
            </div>
          </section>

          {/* 我们的使命 */}
          <section className="about-section mission">
            <h2 className="section-title">🎯 我们的使命</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <span className="mission-icon">🔍</span>
                <h3>发现价值</h3>
                <p>帮助用户发现最实用、最好用的AI工具，不让优质工具被埋没</p>
              </div>
              <div className="mission-card">
                <span className="mission-icon">📚</span>
                <h3>降低门槛</h3>
                <p>用通俗易懂的方式介绍AI工具，让每个人都能轻松上手</p>
              </div>
              <div className="mission-card">
                <span className="mission-icon">🤝</span>
                <h3>共建共享</h3>
                <p>欢迎用户推荐工具和提出建议，共同打造最完善的AI工具库</p>
              </div>
              <div className="mission-card">
                <span className="mission-icon">⚡</span>
                <h3>持续更新</h3>
                <p>紧跟AI发展潮流，第一时间收录最新最热的AI工具</p>
              </div>
            </div>
          </section>

          {/* 收录标准 */}
          <section className="about-section">
            <h2 className="section-title">✅ 收录标准</h2>
            <div className="section-content">
              <p>我们坚持严格的人工审核标准，只收录真正有价值的AI工具：</p>
              <ul className="criteria-list">
                <li>
                  <strong>实用性</strong>：工具必须能够解决真实问题，不是概念演示
                </li>
                <li>
                  <strong>可访问性</strong>：工具必须可以正常使用，或有明确的访问方式
                </li>
                <li>
                  <strong>质量保证</strong>：工具在同类产品中具有竞争力或独特价值
                </li>
                <li>
                  <strong>安全性</strong>：工具不会窃取用户数据或造成安全风险
                </li>
                <li>
                  <strong>合法性</strong>：工具遵守相关法律法规和平台政策
                </li>
              </ul>
            </div>
          </section>

          {/* AI工具分类 */}
          <section className="about-section categories">
            <h2 className="section-title">📂 AI工具分类</h2>
            <div className="category-grid">
              <Link to="/" className="category-link">
                <span>🤖</span>
                <strong>AI对话</strong>
                <small>ChatGPT、Claude、Gemini等</small>
              </Link>
              <Link to="/" className="category-link">
                <span>📊</span>
                <strong>AI办公</strong>
                <small>AIPPT、Notion AI等</small>
              </Link>
              <Link to="/" className="category-link">
                <span>🎨</span>
                <strong>AI绘画</strong>
                <small>Midjourney、Stable Diffusion等</small>
              </Link>
              <Link to="/" className="category-link">
                <span>💻</span>
                <strong>AI编程</strong>
                <small>GitHub Copilot、Cursor等</small>
              </Link>
              <Link to="/" className="category-link">
                <span>📱</span>
                <strong>AI软件</strong>
                <small>Python、WorkBuddy等</small>
              </Link>
              <Link to="/" className="category-link">
                <span>🚀</span>
                <strong>AI项目</strong>
                <small>OpenClaw、python-office等</small>
              </Link>
            </div>
          </section>

          {/* 统计数据 */}
          <section className="about-section stats">
            <h2 className="section-title">📈 我们的数据</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">收录AI工具</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">工具分类</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">每日</span>
                <span className="stat-label">持续更新</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">免费</span>
                <span className="stat-label">完全免费</span>
              </div>
            </div>
          </section>

          {/* 加入我们 */}
          <section className="about-section join">
            <h2 className="section-title">👥 加入我们</h2>
            <div className="section-content">
              <p>
                白开水AI导航是一个开放的社区，我们欢迎：
              </p>
              <ul className="join-list">
                <li>🤔 <strong>工具推荐者</strong>：分享你发现的好用AI工具</li>
                <li>✍️ <strong>内容贡献者</strong>：撰写AI工具使用教程和评测</li>
                <li>🐛 <strong>问题反馈者</strong>：报告失效链接或提出改进建议</li>
                <li>💡 <strong>想法分享者</strong>：分享你对AI工具的看法和使用心得</li>
              </ul>
              <div className="join-buttons">
                <a href="https://www.python4office.cn/bks-ai/" target="_blank" rel="noopener noreferrer" className="join-btn primary">
                  加入AI交流群
                </a>
                <Link to="/faq" className="join-btn secondary">
                  查看常见问题
                </Link>
              </div>
            </div>
          </section>

          {/* 版权声明 */}
          <section className="about-section copyright">
            <h2 className="section-title">📜 免责声明</h2>
            <div className="section-content">
              <p>
                白开水AI导航是一个工具导航平台，我们不对收录工具的内容、服务、质量、安全性负责。
                所有工具的链接均指向第三方网站，用户在使用前请仔细阅读相关服务条款和隐私政策。
                如发现任何工具存在违规行为，请联系我们，我们会尽快处理。
              </p>
              <p className="icp">
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                  鲁ICP备2021040536号-2
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default About
