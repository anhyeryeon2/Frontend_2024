import React from 'react'
import styles from '../nav/Nav.module.scss'
import { Link } from 'react-router-dom'
import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi'
import { GoSignOut } from 'react-icons/go'
import { useAuth } from '../../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { removeUserId } from '../../../store/cart/cart.slice'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../../firebase'
import {removeUser} from '../../../store/user/user.slice';
import { useAppSelector } from '../../../hooks/redux'
import NavCartBlock from './nav-cart-block/NavCartBlock'

const Nav = () => {

    const {isAuth} = useAuth();
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const {products}= useAppSelector((state)=> state.cart);


    const handleSignOut =() =>{
        signOut(auth).then(()=> {
            dispatch(removeUser());
            dispatch(removeUserId());
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"cart"}>
              {" "}
              <FiShoppingCart />
              {products.length >0 && <b>{products.length}</b>}
              {products.length >0 && <div className={styles.nav_hover_cart}>
                <NavCartBlock/>
                </div>}
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={"/order"}>
              {" "}
              <FiUser title="주문" />
            </Link>
          </div>
        </li>
        <li>
          {isAuth ? (
            <GoSignOut className={styles.nav_sign_out} title="로그아웃" onClick={handleSignOut} />
          ) : (
            <Link to={"/login"}>
              <FiLogIn title="뢰그인" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav