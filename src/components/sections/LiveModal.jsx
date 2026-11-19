const MODAL_LINK = 'https://loomy.cgref.cn/s/j7n6gjje1g'

/**
 * 福利/直播弹窗：首次访问展示
 * 点击遮罩或关闭按钮时通过 onClose 回调
 */
function LiveModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭弹窗">
          ×
        </button>
        <h2 className="modal-title">🎁 限时福利</h2>
        <div className="modal-live-info">
          <div className="modal-live-item">
            <div className="modal-live-time">🔥 免费用 AI</div>
            <h3 className="modal-live-topic">免费用 AI，各种大模型都有</h3>
            <p className="modal-live-desc">Kimi、小米 GLM、DeepSeek、千问…… 你想用的都在这里。</p>
          </div>
        </div>
        <div className="modal-actions">
          <a
            href={MODAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
          >
            免费使用 →
          </a>
        </div>
      </div>
    </div>
  )
}

export default LiveModal
