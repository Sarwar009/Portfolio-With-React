import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <div className="header" id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Md Sarwar Ahmed</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>

        
      </div>
    </div>
  )
}

export default Header
