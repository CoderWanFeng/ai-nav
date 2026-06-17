import { memo } from 'react'

/**
 * 场景入口卡片：点一下切到对应分类 + 激活场景态
 * 首卡带"✨ 推荐"角标和引导气泡
 */
function ScenarioCard({ scenario, isFirst, isActive, onClick, onHover, guideVisible }) {
  return (
    <div className="scenario-card-wrap">
      {isFirst && <span className="scenario-card-badge">✨ 推荐</span>}
      <button
        type="button"
        className={`scenario-card ${isFirst ? 'scenario-card-featured' : ''} ${isActive ? 'active' : ''}`}
        onClick={onClick}
        onMouseEnter={onHover}
      >
        <span className="scenario-emoji">{scenario.emoji}</span>
        <span className="scenario-info">
          <span className="scenario-card-title">{scenario.title}</span>
          <span className="scenario-card-desc">{scenario.desc}</span>
        </span>
      </button>
      {isFirst && guideVisible && (
        <div className="scenario-guide-bubble" role="tooltip">
          <span className="scenario-guide-arrow" aria-hidden>👆</span>
          <span className="scenario-guide-text">点这里开始！</span>
        </div>
      )}
    </div>
  )
}

export default memo(ScenarioCard)
