import React from 'react'
import {FiLinkedin} from 'react-icons/fi';
import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/golam-sarwar-323a48239/"><FiLinkedin /></a>
        <a href="https://github.com/Sarwar009"><AiOutlineGithub /></a>
        <a href="https://twitter.com/SarwarA98844756"><AiOutlineTwitter /></a>
    </div>
  )
}

export default HeaderSocials