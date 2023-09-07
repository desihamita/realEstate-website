import React, { useEffect } from 'react'
import './Listing.css'

import {FaBed} from 'react-icons/fa'
import {MdPool, MdFastfood} from 'react-icons/md'
import {AiOutlineWifi} from 'react-icons/ai'

import {properties} from '../../data'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Listing = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Listing container section'>
      <div className="secContainer">
        <div className="secHeader">
          <span data-aos="fade-up" className="orangeText">Our Listing</span>
          <h1 data-aos="fade-up" className="title">Buy And Sell Your Aset
          <span className="orangeDot">.</span></h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rem.
          </p>
          <div className="btns flex">
            <button className="btn active">Exclusive</button>
            <button className="btn">standard</button>
          </div>
        </div>
        <div className="secContent grid">
          {properties.map((item) => (
            <div data-aos="fade-down" className="singleListing" key={item.id}>
              <div className="imgDiv">
                  <img src={item.img} alt="House Image" />
              </div>
              <div data-aos="fade-up" className="info">
                <h2 className="name">{item.nama}</h2>
                <span className="price">
                  <span className="orangeText">RP.</span>
                  <span className="digits">{item.harga}</span>
                  <span className="duration">/Day</span>
                </span>
                <p>{item.keterangan}</p>
                <div className="ammenities flex">
                  <span className="flex"><FaBed className='icon'/><blockquote>x{item.beds}</blockquote></span>

                  <span className="flex"><MdPool className='icon'/></span>

                  <span className="flex"><AiOutlineWifi className='icon'/></span>
                    
                  <span className="flex"><MdFastfood className='icon'/></span>

                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Listing
