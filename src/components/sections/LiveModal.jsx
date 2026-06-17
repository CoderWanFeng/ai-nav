const MODAL_LINK = 'https://www.liblib.tv/?sourceid=005902&utm=cg&cgv=9omkl4jn4d'

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
            <div className="modal-live-time">🔥 点击就送</div>
            <h3 className="modal-live-topic">想做视频号 / 抖音 / 小红书？</h3>
            <p className="modal-live-desc">AI 帮你一键生成，不用学剪辑，免费试用 3 次。</p>
          </div>
        </div>
        <div className="modal-actions">
          <a
            href={MODAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
          >
            免费试用 →
          </a>
        </div>
      </div>
    </div>
  )
}

export default LiveModal
