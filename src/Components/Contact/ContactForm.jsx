import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwti82k', 'template_06jyp5c', form.current, 'LXIawooaVboA4EWlo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Type Your Message' required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </>
  )
}

export default ContactForm