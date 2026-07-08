import './ProductCard.css'

const ProductCard = ({
  image,
  name,
  price,
  rating,
  discount,
}) => {
  return (
    <div className="product-card">
      
      <span className="discount-badge">
         -{discount}%
     </span>
     
      <img src={image} alt={name} />

      <h3>{name}</h3>

       <div className="rating">
           ⭐ {rating}
       </div>

      <p>₹{price}</p>

      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard