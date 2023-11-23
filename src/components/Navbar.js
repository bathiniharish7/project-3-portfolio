import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import React, { useState } from 'react'


const Navbar = () => {
    let [click,setClick] = useState(false);
    let [color,setColor] = useState(false);

    const changeColor =()=>{
        if(window.scrollY>=100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    };
    window.addEventListener("scroll",changeColor);
    function handleClick(){
        console.log("Clicked");
        setClick(!click)

    }

  return (
    <div className={color? "header header-bg" :"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick} >
            {
            click? (<FaTimes size={20} style={{color:"#fff"}}/>) : (<FaBars size={20} style={{color:"#fff"}}/>)
            }
            
        </div>
    </div>
  )
}

export default Navbar