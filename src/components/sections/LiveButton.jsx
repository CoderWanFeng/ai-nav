/**
 * 悬浮福利按钮：弹窗关闭后显示在右下角
 */
function LiveButton({ onClick }) {
  return (
    <button className="live-float-button" onClick={onClick} aria-label="打开福利弹窗">
      <span className="live-button-icon">🎁</span>
      <span className="live-button-text">福利</span>
    </button>
  )
}

export default LiveButton
