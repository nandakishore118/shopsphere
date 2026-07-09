import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
import products from '../../data/products'

const ProductGrid = ({ search, category, setCartCount }) => {

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase())

  const matchesCategory =
    category === 'All' || product.category === category

  return matchesSearch && matchesCategory
})

  return (
    <>
    <div className="product-header">
       <h2>🛍️ Our Products</h2>

     <span className="product-count">
       {filteredProducts.length} Products Found
     </span>
   </div>

  <div className="product-grid">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
          discount={product.discount}
          setCartCount={setCartCount}
        />
      ))
    ) : (
      <div className="empty-state">
      <h1>😕</h1>

      <h2>No Products Found</h2>

      <p>
        Try searching with another keyword
        <br />
        or choose a different category.
      </p>

      <button
        onClick={() => window.location.reload()}
      >
        🔄 Reset
      </button>
    </div>
        )}
      </div>
  </>
)
}

export default ProductGrid