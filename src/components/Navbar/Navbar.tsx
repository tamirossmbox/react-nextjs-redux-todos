import React from 'react'
import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Link href={'/'}><h1>WhaTodo</h1></Link>
        <div className={styles['nav-items']}>
          <Link href={'/about'}>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar