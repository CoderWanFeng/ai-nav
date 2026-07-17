import { memo, useState } from 'react'
import { getFaviconUrl } from '../../utils/favicon'

/**
 * 工具卡片：单个 AI 工具入口
 * - 图标优先级：本地图片(icon 以 '/' 开头) > 远程 favicon > emoji
 * - 远程 favicon 加载失败(onError)时自动回退到 emoji
 * - 使用 memo 避免无关重渲染
 */
function ToolCard({ tool, prefix = '' }) {
  const [favFailed, setFavFailed] = useState(false)

  // 本地图片图标：以 '/' 开头视为站内资源，需拼上部署 base（如 /ai-nav/），否则子路径部署下 404
  const isLocalImg = tool.icon.startsWith('/')
  const localSrc = isLocalImg ? `${import.meta.env.BASE_URL}${tool.icon.slice(1)}` : null

  // 远程 favicon（本地图片优先，故此处仅在非本地图片时解析）
  const favUrl = isLocalImg ? null : getFaviconUrl(tool)

  let iconNode
  if (isLocalImg) {
    iconNode = <img src={localSrc} alt={tool.name} className="tool-icon-img" loading="lazy" decoding="async" />
  } else if (favUrl && !favFailed) {
    iconNode = (
      <img
        src={favUrl}
        alt={tool.name}
        className="tool-icon-img"
        loading="lazy"
        decoding="async"
        onError={() => setFavFailed(true)}
      />
    )
  } else {
    iconNode = tool.icon
  }

  return (
    <a
      key={`${prefix}-${tool.name}`}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-card ${tool.badge ? 'tool-card-sponsored' : ''}`}
    >
      <div className="tool-icon">{iconNode}</div>
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
