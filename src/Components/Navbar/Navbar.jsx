import React, { useState } from 'react'
import './Navbar.css'

import {SiTreehouse} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
 
function Navbar() {
  const [menu, setMenu] = useState('menu')

  function showNavbar() {
    setMenu('showNavbar menu')
  }

  function removeNavbar() {
    setMenu('menu')
  }

  const [transparent, setTransparent] = useState("Navbar")
  function addBg() {
    if (window.scrollY >= 10) {
      setTransparent('Navbar addBackground')
    } else {
      setTransparent('Navbar')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <div className={transparent}>
      <div className="logoDiv">
        <SiTreehouse className='icon' />
        <span>RealEstate</span>
      </div>
      <div className={menu}>
        <ul>
          <li className="navList">Property</li>
          <li className="navList">Services</li>
          <li className="navList">Product</li>
          <li className="navList">About Us</li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavbar} />
      </div>
      <button className="contactBtn btn">Contact</button>
      <PiDotsNineBold className='icon menuIcon' onClick={showNavbar} />
    </div>
  )
}

export default Navbar
