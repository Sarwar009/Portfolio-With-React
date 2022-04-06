import React from 'react'
import './contact.css'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <ContactCard />
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
