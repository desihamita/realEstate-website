import React, { useEffect }  from 'react'
import './About.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Accordion = ({title, desc, active, setActive}) => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div>
        <div data-aos="fade-down" className={(active === title ? "activeAccordion": "") + "singleAccordian"}>
            <span onClick={() => setActive(title)} className={(active === title ? "activeTitle" : "") + "accordianTitle" + "flex"} >
                <span className="flex">
                    <AiFillCheckCircle className='icon'/>
                    <span className="titleText">{title}</span>
                </span>
                <span className="dropdownIcon">
                    {active === title ? (
                        <BiSolidDownArrow className="icon"/>
                    ): (
                        <BiSolidUpArrow className="icon" />
                    )}
                    
                </span>
            </span>
            <p className={(active === title ? "show" : "") + "description"}>{desc}</p>
        </div>
    </div>
  )
}

export default Accordion
