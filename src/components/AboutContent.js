import React from 'react'
import "./AboutContentStyles.css"
import { Link } from 'react-router-dom'
import react1 from "../Assets/react1.jpg"
import react2 from "../Assets/react2.webp"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a React Front End Developer. I will create user friendly and responsive websites</p>
            <Link to="/contact" >
                <button className='btn'>CONTACT</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react1} alt='React 1' className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={react2} alt='React 2' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent