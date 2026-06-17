/**
 * 搜索框：受控 input，搜索词变化时即时过滤工具列表
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="搜索AI工具..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="搜索AI工具"
      />
    </div>
  )
}

export default SearchBar
