import React from 'react'
import styles from '../footer/footer.module.scss'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
   <footer className={styles.footer}>
    <div className='container'>
        <div className={styles.contacts}>
            <a href='http://github.com/'>
            {" "}
            <BsGithub/>
            </a>
        </div>
    </div>
   </footer>
  )
}

export default Footer