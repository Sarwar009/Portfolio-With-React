import React from 'react';

const AboutCard = (props) => {

    const {img, title, details} = props.data;
    
  return (
    <div className='about-card'>
        
        <div className='about-icon'>{img}</div>
        <h5>{title}</h5>
        <small>{details}</small>

    </div>
  )
}

export default AboutCard