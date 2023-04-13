import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <h6>Demo made by <a href={'https://github.com/tamirossmbox'} target='_blank'>@Tamiross</a></h6>
    </div>
  )
}

export default Footer