import React, { useEffect } from 'react'
import './Sponsors.css'

import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'

import AOS from 'aos'
import 'aos/dist/aos.css' 
 
const Sponsors = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Sponsors'>
      <div data-aos="fade-up" className="secContainer flex">
        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
      </div>
    </div>
  )
}

export default Sponsors
