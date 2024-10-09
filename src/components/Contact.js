import React, { useState } from 'react';
import { init, send } from '@emailjs/browser'; // Import from the new package

// Initialize EmailJS with your User ID
init('Ld4KztV37Xk0hxfUu');

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    send('service_zg9utex', 'template_cmrgdhl', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        <button className='btn' type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
