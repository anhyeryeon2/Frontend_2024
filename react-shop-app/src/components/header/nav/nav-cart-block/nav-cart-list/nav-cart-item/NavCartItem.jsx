import React from 'react'
import styles from './NavCartItem.module.scss'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const NavCartItem = ({item}) => {
    const dispatch = useAppDispatch();

    const deleteProduct=()=>{
        dispatch(deleteProduct(item.id));
    }

  return (
    <div className={styles.nav_cart_item}>
        <Link to={`product/${item.id}`}>
        {" "}
        <img src={item.image} alt='product image'/>
        </Link>
        <div className={styles.nav_cart_description}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
            <span>
                {item.price} x {item.quantity} = ${item.total.toFixed(2)}
            </span>
            <button onClick={deleteProduct} className={styles.nav_cart_delete}>
                <AiOutlineDelete/>
            </button>
        </div>
    </div>
  )
}

export default NavCartItem