import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'


interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}