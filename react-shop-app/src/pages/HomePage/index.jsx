import React from 'react'
import FiltersCategory from './filters-category/FiltersCategory'

function HomePage() {
  return (
    <div className='page'>
      <div className="container">
        <h1>products</h1>
        <FiltersCategory/>
      </div>
    </div>
  )
}

export default HomePage