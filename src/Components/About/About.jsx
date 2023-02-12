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
          I am a highly motivated and results-driven person
          seeking a challenging and growth-oriented position in
          the field of Web development. With a strong
          background in frontend development specially in
          ReactJs. I am eager to improve my skills and experience
          to contribute to the success of a dynamic organization.
          My ultimate goal is to apply my creativity and strategic
          thinking to develop modern websites and help our
          clients to grow their business.
          
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
        

      </div>
    </div>
  )
}

export default About   