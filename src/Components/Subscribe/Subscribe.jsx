import React, { useEffect } from 'react'
import './Subscribe.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Subscribe section container'>
      <div className="secContent">
        <h1 data-aos="fade-up">Get Started With realEstate</h1>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vero?</p>
        <button data-aos="fade-up" className='btn'>Get Started</button>
      </div>
    </div>
  )
}

export default Subscribe
