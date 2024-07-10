import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { routeVariants } from '../data'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5rnafma', 'template_fu0r0ru', form.current, {
        publicKey: 'neDg_F-hE9b9Wyi4j',
      })
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Sorry, there was an error occured while sending your email');
        },
      );

        e.target.reset();
    };

  return (
    <motion.div
      variants={routeVariants}
      initial='initial'
      animate='final'
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className='contact-container'>
        <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/certifications')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
        </div>
      <div className="contact-main">
        <div className="contact-map">
          <motion.iframe  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126074.76497289546!2d7.356478829195972!3d9.078663955115497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715971328753!5m2!1sen!2sng" style={{ border: 5}} allowFullScreen="" loading='eager' referrerPolicy="no-referrer-when-downgrade"></motion.iframe>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }} className="address-card">
            <div className="phone"><p>Phone: +234 7035885308</p></div>
            <div className="address-address"><p>Location: Abuja, Nigeria</p></div>
            <div className="address-email"><p>email: abdulkabiruj@gmail.com</p></div>
          </motion.div>
        </div>


        <div className="contact-form">
          <div className="contact-header">
            <h1 className="contact-title">Hire <span>Me</span></h1>
            <p>Have a job for me or interested in my services? send me a personalized mail.</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor='subject'>Subject:</label>
              <input type="text" name="subject" required placeholder='Mail subject' autoComplete='off'/>
            </div>
            <div>
              <label htmlFor='user_email'>Email:</label>
              <input type="email" name="user_email" required placeholder='Your email address' autoComplete='off'/>
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea name="message" required placeholder='Your message....' autoComplete='off'/>
            </div>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact