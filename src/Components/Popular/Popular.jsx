import Reac, { useEffect } from 'react'
import './Popular.css'

import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import {populars} from '../../data'

import AOS from 'aos'
import 'aos/dist/aos.css' 

const Popular = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Popular container section'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <span data-aos="fade-down" className="orangeText">
              Best Choice
            </span>
            <h1 data-aos="fade-down" className="title">Popular Residences <span className='orangeDot'>.</span></h1>
          </div>
          <div data-aos="fade-down" className="icons flex">
            <BiLeftArrowAlt className='icon'/>
            <BiRightArrowAlt className="icon"/>
          </div>
        </div>
        <div className="secContent grid">
          {populars.map((item) => (
              <div data-aos="fade-up" className="singleProperti" key={item.id}>
                <div className="imgDiv">
                  <img src={item.img} alt="House Image" />
                </div>
                <div data-aos="fade-up" className="info">
                  <span className="price">
                    <span className="orangeText">Rp.</span>
                    <span className="digits">{item.harga}</span>
                  </span>
                  <h2 className="name">{item.nama}</h2>
                  <p>{item.keterangan}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Popular
