import { useState } from 'react'

import Hero from '../components/Hero/Hero'
import SearchBar from '../components/SearchBar/SearchBar'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'

const Home = ({ cartItems, setCartItems, cartCount }) => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <>

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <ProductGrid
          search={search}
          category={category}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
    </>
  )
}

export default Home