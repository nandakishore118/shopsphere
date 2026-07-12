import './ProductCard.css'

const ProductCard = ({
  id,
  image,
  name,
  price,
  rating,
  discount,
  cartItems,
  setCartItems,
}) => {
    const originalPrice = Math.round(
    price / (1 - discount / 100)
    )
    const addToCart = () => {
      const item = {
        id,
        image,
        name,
        price,
        rating,
        discount,
      }

  setCartItems([...cartItems, item])
}
  return (
    <div className="product-card">

  <span className="discount-badge">-{discount}%</span>

  <span className="wishlist">❤</span>

  <div className="product-content">

    <img src={image} alt={name} />

    <h3>{name}</h3>

    <div className="rating">
      ⭐⭐⭐⭐⭐
      <span className="rating-number">({rating})</span>
    </div>

    <div className="price-section">
       <span className="current-price">
          ₹{price}
        </span>

        <span className="original-price">
          ₹{originalPrice}
        </span>
    </div>

    <p className="delivery">
      🚚 Free Delivery
    </p>

  </div>

  <button onClick={addToCart}>
  🛒 Add to Cart
   </button>
</div>
  )
}

export default ProductCard