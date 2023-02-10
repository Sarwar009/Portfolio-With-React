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
        <h1 id="myName">
          <span>M</span>
          <span>D</span>
          <span> </span>
          <span>S</span>
          <span>A</span>
          <span>R</span>
          <span>W</span>
          <span>A</span>
          <span>R</span>
          <span> </span>
          <span>A</span>
          <span>H</span>
          <span>M</span>
          <span>E</span>
          <span>D</span>

        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        
        <HeaderSocials />

        <div className="me">
          <img id="meImg" src={ME} alt='me' />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>

        
      </div>
    </div>
  )
}

export default Header
