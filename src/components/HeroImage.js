import "./HeroImageStyles.css"
import React from 'react'
import introImg from '../Assets/intro-bg.jpg'
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask" >
            <img className="intro-img" src={introImg} alt="Intro Image"/>
        </div>
        <div className="content">
            <p>Hi, MYSELF HARISH</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage