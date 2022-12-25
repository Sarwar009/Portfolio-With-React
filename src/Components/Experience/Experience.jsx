import React from 'react'
import {FrontendData} from './Data'
import { BackendData } from './Data'
import './experience.css'

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h5>What skill I have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='frontend'>
          <h3>Front-end Development</h3>
          <div className='content'>
            
              {
                FrontendData.map(({icon, title, skill}, index) => {
                  return (
                    <div className='details' key={index}>
                        <div className='ex-details-icon'>{icon}</div>
                        <div>
                            <h4>{title}</h4>
                            <small className='text-light'>{skill}</small>
                        </div>
                    </div>
                  )
                })
              }
          </div>
        </div>

        <div className='backend'>
          <h3>Backend Development</h3>
          <div className='content'>
              {
                BackendData.map(({icon, title, skill}, index)=> {
                  return (
                    <div className='details' key={index}>
                        <div className='ex-details-icon'>{icon}</div>
                        <div>
                            <h4>{title}</h4>
                            <small className='text-light'>{skill}</small>
                        </div>
                    </div>
                  )
                })
              }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
