import React from 'react'
import "../styles/NavBarStyles.css"
import { useState } from 'react';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home'); // home is default
    
    const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
    <div>
        <div className='nav-bar-main-container'>
            <div className="topnav">

            <a className={`home ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleLinkClick('home')}>home</a>
            <a className={`tournaments ${activeLink === 'tournaments' ? 'active' : ''}`} href="#tournaments" onClick={() => handleLinkClick('tournaments')}>tournaments</a>
            <a className={`teams ${activeLink == 'teams' ? 'active' : ''}`} href='#teams' onClick={()=> handleLinkClick('teams')}>teams</a>
            <a className={`players ${activeLink == 'players' ? 'active' : ''}`} href='#players' onClick={()=> handleLinkClick('players')}>players</a>
            <a className={`about ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleLinkClick('about')}>about</a>

            </div>
        </div>
    </div>
  )
}

export default NavBar