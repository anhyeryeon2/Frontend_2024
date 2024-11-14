import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import CartEmpty from '../../components/cart-empty/CartEmpty';
import CartList from './cart-list/CartList';
import Checkout from './checkout/Checkout';
//장바구니 페이지4
const  CartPage =()=> {
  const {products} = useAppSelector((state)=> state.cart);
  return (
    <div className='page'>
      {!products.length ? (
        <CartEmpty title={"cart"}/>
      ): (
        <div className='container'>
          <h1>장바구니</h1>
          <CartList/>
          <Checkout/>
        </div>
      )}
    </div>
  )
}

export default CartPage