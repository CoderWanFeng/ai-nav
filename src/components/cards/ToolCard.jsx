import { memo } from 'react'

/**
 * 工具卡片：单个 AI 工具入口
 * - 接入 IntersectionObserver / loading=lazy 后可由父级按需处理
 * - 使用 memo 避免无关重渲染
 */
function ToolCard({ tool, prefix = '' }) {
  // 图片图标：以 '/' 开头视为站内资源，需拼上部署 base（如 /ai-nav/），否则子路径部署下 404
  const isImg = tool.icon.startsWith('/')
  const iconSrc = isImg ? `${import.meta.env.BASE_URL}${tool.icon.slice(1)}` : tool.icon
  return (
    <a
      key={`${prefix}-${tool.name}`}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-card ${tool.badge ? 'tool-card-sponsored' : ''}`}
    >
      <div className="tool-icon">
        {isImg ? (
          <img src={iconSrc} alt={tool.name} className="tool-icon-img" loading="lazy" decoding="async" />
        ) : (
          tool.icon
        )}
      </div>
      <div className="tool-info">
        <h3 className="tool-name">
          {tool.name}
          {tool.badge && <span className="tool-badge">{tool.badge}</span>}
        </h3>
        <p className="tool-category">{tool.category}</p>
        <p className="tool-desc">{tool.desc}</p>
      </div>
    </a>
  )
}

export default memo(ToolCard)
