import './SearchBar.css'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar