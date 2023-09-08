import React, { useEffect } from 'react'
import './Contact.css'

import {BiSolidPhoneCall, BiSolidVideo,BiSolidMessageDetail} from 'react-icons/bi'
import {BsFillChatDotsFill} from 'react-icons/bs'

import contactImg from '../../Assets/contactImg.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='Contact container section'>
      <div className="secContainer flex">
        <div data-aos="fade-down" className="imgDiv"><img src={contactImg} alt="Contact Image" /></div>
        <div className="textDiv">
          <div className="secHeader">
            <div className="secTitle">
              <span data-aos="fade-down" className="orangeText">
                Contact us
              </span>
              <h1 data-aos="fade-down" className="title">Easy way to contact us<span className='orangeDot'>.</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.
              </p>
            </div>
          </div>
          <div className="secContent grid">
            <div data-aos="fade-up" className="phone active">
              <div className="info flex">
                <BiSolidPhoneCall className="icon"/>
                <span>
                  <h4>Phone Call</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>Call Now</button>
            </div>
            <div data-aos="fade-up" className="chat">
              <div className="info flex">
                <BsFillChatDotsFill className="icon"/>
                <span>
                  <h4>Chat</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>Chat Now</button>
            </div>
            <div data-aos="fade-up" className="videoCall">
              <div className="info flex">
                <BiSolidVideo className="icon"/>
                <span>
                  <h4>Video Call</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>Video Call Now</button>
            </div>
            <div data-aos="fade-up" className="message">
              <div className="info flex">
                <BiSolidMessageDetail className="icon"/>
                <span>
                  <h4>Chat</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>Message Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact



