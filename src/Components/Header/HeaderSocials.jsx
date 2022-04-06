import React from 'react'
import {FiLinkedin} from 'react-icons/fi';
import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://linkedin.com"><FiLinkedin /></a>
        <a href="https://github.com"><AiOutlineGithub /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
    </div>
  )
}

export default HeaderSocials