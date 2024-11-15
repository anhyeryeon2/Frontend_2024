import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import styles from "../orders-list/OrderList.module.scss"
import OrderItem from './order-item/OrderItem';
import { fetchOrder } from '../../../store/order/order.slice';
import CartEmpty from '../../../components/cart-empty/CartEmpty';

const OrderList = () => {
    const {id} = useAuth();
    const {order} = useAppSelector((state)=> state.order);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchOrder(id));
    },[id]);

    if(!order.length) return <CartEmpty title={"주문내역"}/>;

  return (
    <div className={styles.orders}>
        {order.map((item)=> (
            <div key={item.id}>
                <div className={styles.order_header}>
                    <h3>주문번호 _{item.id}</h3>
                    <p>합계 : $ {item.totalPrice.toFixed(2)}</p>
                </div>

                <ul className={styles.orders_list}>
                    {item.products.map((order)=>(
                        <OrderItem key={order.id} order={order}/>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default OrderList