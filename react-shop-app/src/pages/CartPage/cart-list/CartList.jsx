import React from 'react'
import styles from "../cart-list/CartList.module.scss"
import { useAppSelector } from '../../../hooks/redux'
import CartItem from './cart-item/CartItem';

const CartList = () => {
    const {products} = useAppSelector((state)=> state.cart);
  return (
    <div className={styles.cart_list}>
        {products.map((item)=>(
            <CartItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default CartList