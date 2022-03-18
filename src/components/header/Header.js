import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import '../../style/header/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header