import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
  {(setCartCount) => (
    <Routes>
      <Route 
        path="/" 
        element={<Home setCartCount={setCartCount} />} 
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  )}
</Layout>
  )
}

export default App