import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SearchBar from './components/SearchBar/SearchBar'
import ProductGrid from './components/ProductGrid/ProductGrid'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'

function App() {
  const [search, setSearch] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [category, setCategory] = useState('All')

  return (
    <>
      <Navbar
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      <Hero />
      <SearchBar search={search}
       setSearch={setSearch} />
        <CategoryFilter
            category={category}
            setCategory={setCategory}
          />
      <ProductGrid 
      search={search}
      category={category} 
       setCartCount={setCartCount}
      />
    </>
  )
}

export default App
