import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
import products from '../../data/products'

const ProductGrid = ({ search }) => {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  ) 

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
        />
      ))
    ) : (
      <h2>No Products Found 😔</h2>
    )}
  </div>
  </>
)
}

export default ProductGrid