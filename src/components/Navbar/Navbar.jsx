import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopSphere</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Cart</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar