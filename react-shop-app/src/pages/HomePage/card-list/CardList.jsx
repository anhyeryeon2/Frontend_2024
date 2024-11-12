import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import CardItem from '../card-list/card-item/CardItem'
import styles from '../card-list/CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice'

const CardList = () => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector((state) => state.products);

    useEffect(()=>{
        console.log("Fetching products...");
        dispatch(fetchProducts());
    },[])

  return (
    <ul className={styles.card_list}>
        {products.map((item, index) => <CardItem key={index} item={item} />)}

    </ul>
  )
}

export default CardList