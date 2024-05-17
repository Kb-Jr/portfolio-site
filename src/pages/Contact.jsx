import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126074.76497289546!2d7.356478829195972!3d9.078663955115497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715971328753!5m2!1sen!2sng" width="600" height="450" style={{ border: 0, borderRadius: 20 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="contact-form">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact