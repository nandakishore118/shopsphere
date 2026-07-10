import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {

  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <Navbar cartCount={cartCount} />

      {children(setCartCount)}
    </>
  )
}

export default Layout