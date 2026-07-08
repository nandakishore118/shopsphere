import './CategoryFilter.css'

const CategoryFilter = ({ category, setCategory }) => {
  return (
        <div className="category-filter">
      <button 
      className={category === 'All' ? 'active' : ''}
      onClick={() => setCategory('All')}>All</button>

      <button 
      className={category === 'Audio' ? 'active' : ''}
      onClick={() => setCategory('Audio')}>
        Audio
      </button>

      <button 
      className={category === 'Wearables' ? 'active' : ''}
      onClick={() => setCategory('Wearables')}>
        Wearables
      </button>

      <button 
       className={category === 'Accessories' ? 'active' : ''}
      onClick={() => setCategory('Accessories')}>
        Accessories
      </button>
    </div>
  )
}

export default CategoryFilter