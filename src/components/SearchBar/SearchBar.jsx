import './SearchBar.css'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <h2>Search Products</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <span
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            ✖
          </span>
        )}
      </div>
    </div>
  )
}

export default SearchBar