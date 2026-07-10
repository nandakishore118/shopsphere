import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ cartCount}) => {
    return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <h2>ShopSphere</h2>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Categories</a></li>

        <li className="cart-link">
          <Link to="/cart">
            🛒 Cart
            <span className="cart-badge">
              {cartCount}
            </span>
          </Link>
        </li>

        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar