import React from 'react'
import './portfolio.css'
// import PortfolioCard from './PortfolioCard'
import { PortfolioData } from './PortfolioData'
// import IMG1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
  return (
    <div className='section' id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>

          {
            PortfolioData.map(({img, title, github, liveDemo}, index) => {
              return (
                  <div className='portfolio-item' key={index}>
                    <div className='item-img'>
                    <img src={img} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className='item-cta'>
                    <a href={github} className='btn'>Github</a>
                    <a href={liveDemo} className='btn btn-primary'>Live Demo</a>
                    </div>
                  </div>
              )
            })
          }

      </div>
    </div>
  )
}

export default Portfolio
