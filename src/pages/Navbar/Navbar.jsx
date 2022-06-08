import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../images/joao-cookingcode-logo_v5 copy.png'
import { Link } from 'react-scroll'
import './Navbar.css';


function NavigationBar () {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='#' className='logo'>
                    <p>Casa do Sr. Paulo</p>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="history" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>History</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="gallery" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>Gallery</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="references" spy={true} smooth={true} offset={50} duration={50} onClick={closeMenu}>References</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
};


export default NavigationBar;