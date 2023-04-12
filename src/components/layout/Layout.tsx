import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}