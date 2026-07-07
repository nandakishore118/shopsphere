import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SearchBar from './components/SearchBar/SearchBar'
import ProductGrid from './components/ProductGrid/ProductGrid'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter />
      <ProductGrid search={search} />
    </>
  )
}

export default App
