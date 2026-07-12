import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = ({ cartItems, setCartItems }) => {

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
  }
  
  const totalPrice = cartItems.reduce(
  (total, item) => total + item.price,
  0
   )

  return (
  <div>
    <h1>Cart Page</h1>

    <div className="cart-container">
      {cartItems.length === 0 ? (

        <div className="empty-cart">
            <h1>🛒</h1>

            <h2>Your Cart is Empty</h2>

            <p>Add some amazing products to get started!</p>

                <Link to="/">
                  <button className="shop-btn">
                    🛍️ Continue Shopping
                  </button>
                </Link>
                
        </div>
      
      
      ) : (
        cartItems.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>

              <p>⭐ {item.rating}</p>

              <h2>₹{item.price}</h2>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                🗑️ Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>

   <div className="cart-total">
      <p>💰 ShopSphere Pay</p>

      <h2>₹{totalPrice}</h2>

      <p>Total Payable Amount</p>

      <button className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  </div>
)
}

export default Cart