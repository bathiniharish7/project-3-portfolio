import React from 'react'
import "./FooterStyles.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>3-89 Raigir</p>
                        <p>Bhongir Telangana</p>
                    </div>
                </div>
                <div className='phone'>
                  <h4>
                  <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                 9963025308
                  </h4>
                </div>
                <div className='email'>
                  <h4>
                  <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                 bathiniharish7@gmail.com
                  </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>This is me Harish an Front end Developer who is interested in learning and building projects</p>
                <div className='social'>
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitch size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer