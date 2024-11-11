import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../header/Header.module.scss'
import Nav from './Nav/Nav'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className='container'>
            <div className={styles.header_wrapper}>
                <div className={styles.header_logo}>
                    <Link to={"/"}>
                        <h2>gproro:Shop</h2>
                    </Link>
                </div>
                <Nav/>
            </div>
        </div>
    </div>
  )
}

export default Header