import React from 'react'
import './service.css'
import { Backend, Frontend, FullStack } from './SerivceData'

import {BsCheck} from 'react-icons/bs'

const Service = () => {
  return (
    <div className='section' id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container service-container'>
        <div className='service'>
          <div className='service-head'>
            <h3>Front-end Development</h3>
          </div>
          <ul className='service-list'>
            {
              Frontend.map(({text}, index)=> {
                return (
                <li key={index}>
                  <BsCheck className='service-icon'/>
                  <p>{text}</p>
                </li>
                )
              }
              )}
          </ul>
        </div>

        <div className='service'>
          <div className='service-head'>
            <h3>Backnend Development</h3>
          </div>
          <ul className='service-list'>
            {
              Backend.map(({text}, index)=> {
                return (
                <li key={index}>
                  <BsCheck className='service-icon'/>
                  <p>{text}</p>
                </li>
                )
              }
              )}
          </ul>
        </div>

        <div className='service'>
          <div className='service-head'>
            <h3>Full Stack Development</h3>
          </div>
          <ul className='service-list'>
            {
              FullStack.map(({text}, index)=> {
                return (
                <li key={index}>
                  <BsCheck className='service-icon'/>
                  <p>{text}</p>
                </li>
                )
              }
              )}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Service
