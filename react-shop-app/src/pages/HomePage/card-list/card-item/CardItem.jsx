import React from 'react'
import styles from '../card-item/CardItem.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addToCart } from '../../../../store/cart/cart.slice';

const CardItem = ({item}) => {

    const {products} = useAppSelector(state =>state.cart)
    const productMatching  = products.some((product) =>product.id === item.id)
    const dispatch = useAppDispatch();

    const addItemToCart = ()=>{
        dispatch(addToCart(item));
    }
    return (
      <li className={styles.card_item}>
        <Link to={`/products/${item.id}`}>
          <img
            src={item.image}
            width={"80%"}
            height={"200px"}
            alt="product card"
          />
        </Link>
        <h5>{item.title.substring(0, 15)}...</h5>

        <div>
          <button
            disabled={productMatching}
            onClick={() => !productMatching && addItemToCart()}
          >
            {productMatching ? "장바구니에 잠긴 제품" : "장바구니에 담기"}
          </button>
          <p>$ {item.price}</p>
        </div>
      </li>
    );
}

export default CardItem