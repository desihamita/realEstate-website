import React, { useState, useEffect } from 'react'
import './About.css'

import Accordion from './Accordion'
import aboutImg from '../../Assets/aboutImg.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const [active, setActive] = useState("Proven Track Record")
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='About section container'>
      <div className="secContainer flex">
        <div data-aos="fade-up" className="imgDiv">
          <img src={aboutImg} alt="About Image" />
        </div>
        <div className="textDiv">
          <div data-aos="fade-down" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Our Values</span>
              <h1>
                Value We Give You
                <span className="orangeDot">.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, mollitia harum recusandae molestiae dolor ab.
              </p>
            </div>
          </div>
          <div data-aos="fade-down" className="accordian grid">
            <Accordion 
              title='Proven Track Record'
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, mollitia harum recusandae molestiae dolor ab.'
              active={active}
              setActive={setActive}
            />
            <Accordion 
              title='Local Market Knowladge'
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, mollitia harum recusandae molestiae dolor ab.'
              active={active}
              setActive={setActive}
            />
            <Accordion 
              title='Prersonalized Service'
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, mollitia harum recusandae molestiae dolor ab.'
              active={active}
              setActive={setActive}
            />
            <Accordion 
              title='Ethical Pratices'
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, mollitia harum recusandae molestiae dolor ab.'
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
