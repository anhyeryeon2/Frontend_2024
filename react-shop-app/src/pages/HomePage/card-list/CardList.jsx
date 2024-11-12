import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import CardItem from '../card-list/card-item/CardItem'
import styles from '../card-list/CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice'
import CardSkeleton from '../card-skeleton/CardSkeleton'

const CardList = () => {
    const dispatch = useAppDispatch();
    const {products, isLoading } = useAppSelector((state) => state.products);
    const category = useAppSelector(state => state.category);
    
    useEffect(()=>{
        console.log("Fetching products...");
        dispatch(fetchProducts( category?.toLowerCase()));
    },[category])

    if(isLoading) 
      return <CardSkeleton/>;

  return (
    <ul className={styles.card_list}>
        {products.map((item, index) => <CardItem key={index} item={item} />)}

    </ul>
  )
}

export default CardList