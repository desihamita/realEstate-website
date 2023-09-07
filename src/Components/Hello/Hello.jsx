import React, { useEffect } from 'react'
import './Hello.css'

import {HiLocationMarker} from 'react-icons/hi'
import HelloImg from '../../Assets/HelloImg.png'

import AOS from 'aos'
import 'aos/dist/aos.css' 

const Hello = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Hello'>
      <div className="secContainer container flex">
        <div className="textDiv">
          <h1 data-aos="fade-up">Discover Most Suitable Property</h1>
          <span className='design'></span>
          <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur eaque itaque, magni accusamus sit?</p>
          <div data-aos="fade-up" className="searchBar flex">
            <div className="inputBox flex">
              <HiLocationMarker className='icon'/>
              <input type="text" placeholder='Search by location' />
            </div>
            <button className="btn">Search</button>
          </div>
          <div data-aos='fade-up' className="numbers flex">
            <div className="singleNumber">
              <span>
                9k <blockquote>+</blockquote>
              </span>
              <small>Premium Product</small>
            </div>
            <div className="singleNumber">
              <span>
                2k <blockquote>+</blockquote>
              </span>
              <small>Happy Customers</small>
            </div>
            <div className="singleNumber">
              <span>
                48k <blockquote>+</blockquote>
              </span>
              <small>Awards Winning</small>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="imgDiv">
          <img src={HelloImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hello


