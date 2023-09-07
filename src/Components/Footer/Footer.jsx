import React, { useEffect } from 'react'
import './Footer.css'

import {SiTreehouse} from 'react-icons/si'
import {BiLogoLinkedin, BiLogoGmail, BiLogoGithub} from 'react-icons/bi'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Footer'>
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            <SiTreehouse className='icon' />
            <span>realEstate</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, impedit.</p>
          <div className="socials flex">
            <BiLogoGithub className='icon' />
            <BiLogoLinkedin className='icon' />
            <BiLogoGmail className='icon' />
          </div>
        </div>
        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Home</a></li>
          <li><a href="">Explore</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Blog</a></li>
        </div>
        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li><a href="">Destination</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Travel & Condition</a></li>
          <li><a href="">Privacy</a></li>
        </div>
        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+858 5436 7564</span>
          <span className="email">realEstate@gmail.com</span>
          <span className="website">www.realEsate.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
