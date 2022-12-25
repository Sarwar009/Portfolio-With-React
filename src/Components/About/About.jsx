import React from 'react'
import './about.css';
import AboutImg from '../../assets/me-about.jpg';
import CardDetails from './CardDetails';

const About = () => {
  return (
    <div id="about" className='section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>

        <div className='about-me'>
          <div className='about-img'>
            <img src={AboutImg} alt='About' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            {
              CardDetails.map(({img, title, details},index) => {
                return (
                <div className='about-card' key={index}>
                  <div className='about-icon'>{img}</div>
                  <h5>{title}</h5>
                  <small>{details}</small>
                </div>
                )
              })
            }
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
        

      </div>
    </div>
  )
}

export default About   