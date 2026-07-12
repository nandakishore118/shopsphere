import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
  {(cartItems, setCartItems, cartCount) => (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartCount={cartCount}
          />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  )}
</Layout>
  )
}

export default App