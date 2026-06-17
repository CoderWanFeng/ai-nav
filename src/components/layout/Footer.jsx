import { Link } from 'react-router-dom'

const CROSS_SITE_LINKS = [
  { href: 'https://python4office.cn', label: '技术博客' },
  { href: 'https://www.python-office.com', label: 'python-office' },
  { href: 'https://www.python-office.com/openclaw', label: 'OpenClaw' },
  { href: 'https://www.python-office.com/how-to-digital-nomad', label: '数字游民' },
  { href: 'https://www.python-office.com/opc', label: '建站教程' },
]

/**
 * 关于我们 + 页脚
 */
function Footer() {
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">📖 关于我们</h2>
          <p className="about-text">
            白开水 AI 社区致力于分享最实用、最有价值的 AI 工具和资源，
            帮助每个人更好地利用人工智能提升工作效率。
            我们相信 AI 应该像白开水一样纯净、易用、人人可及。
          </p>
          <a
            href="https://www.python4office.cn/bks-ai/about/"
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
        <div className="cross-site-links">
          {CROSS_SITE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
