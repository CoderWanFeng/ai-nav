const MODAL_LINK = 'https://opc.aliyun.com/products?utm_content=g_1000413977&userCode=t6duaoe1'

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
            <div className="modal-live-time">🔥 新人专享</div>
            <h3 className="modal-live-topic">想一站式接入 AI 能力？</h3>
            <p className="modal-live-desc">阿里云 OPC 开放能力中心，大模型、Agent、应用工具一站搞定。</p>
          </div>
        </div>
        <div className="modal-actions">
          <a
            href={MODAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
          >
            立即查看 →
          </a>
        </div>
      </div>
    </div>
  )
}

export default LiveModal
