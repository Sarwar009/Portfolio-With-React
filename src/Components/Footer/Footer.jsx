import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <a href='#home' className='footer-logo'>Sarwar</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://www.facebook.com/SGSarWaRz'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/sarwar__009/'><FiInstagram /></a>
        <a href='https://twitter.com/SarwarA98844756'><AiOutlineTwitter /></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; It's Me.All Rights Reserved!!</small>
      </div>

    </div>
  )
}

export default Footer
