import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import telephoneImage from '../pages/img/telephone.png'
import Logo from '../pages/img/logo.png'
import Carts from '../pages/img/cart.png'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
            < Image src={telephoneImage} alt="" width="32" height="32" />
            </div>

            <div className={styles.texts}>
                <div className={styles.text}>Order Now! </div>
                <div className={styles.text}>012 345 456</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Homepage</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <Image src={Logo} alt='' width="130" height="69" />
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
            <Image src={Carts} alt='' width="30" height="30" />
            <div className={styles.counter}>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
