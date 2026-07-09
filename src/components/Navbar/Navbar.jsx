import './Navbar.css'

const Navbar = ({ cartCount, setCartCount }) => {
    return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopSphere</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>w
        <li><a href="/">Products</a></li>
        <li><a href="/">Categories</a></li>

        <li className="cart-link">
          <a
            href="/"
            onClick={() => setCartCount(0)}
          >
            🛒 Cart

            <span className="cart-badge">
              {cartCount}
            </span>

          </a>
        </li>

        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar