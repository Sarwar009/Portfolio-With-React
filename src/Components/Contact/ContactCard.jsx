import React from 'react'
import { ContactCardData } from './ContactCardData'

const ContactCard = () => {
  return (
    <>
        {
            ContactCardData.map(({icon,title,ownerId,link}, index) => {
                return (
                    <div className='contact-card' key={index}>
                        <div className='contact-card-icon'>{icon}</div>
                        <h4>{title}</h4>
                        <h5>{ownerId}</h5>
                        <a href={link} target='blank'>Send a message</a>
                    </div>
                )
            })
        }
    </>
  )
}

export default ContactCard