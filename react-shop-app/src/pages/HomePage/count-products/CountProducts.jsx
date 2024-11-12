import React from 'react'
import style from '../count-products/CountProducts.module.scss'
import { useAppSelector } from '../../../hooks/redux'

const CountProducts = () => {
    const {products,isLoading}= useAppSelector((state)=>state.products);

  return (
   <div className={style.count_products}>
    {!isLoading && (
        <p>
            Showing : {products.length} items
        </p>
    )}
   </div>
  )
}

export default CountProducts