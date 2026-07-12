import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  const cartCount = cartItems.length

  return (
    <>
      <Navbar cartCount={cartCount} />

      {children(cartItems, setCartItems, cartCount)}
    </>
  )
}

export default Layout