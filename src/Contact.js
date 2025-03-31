import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { blastConfetti } from './confetti';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submissionType, setSubmissionType] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });

    emailjs.sendForm(
      'service_qlqfr28',
      'template_cc2wh4f',
      form.current,
      'pZtlnSO7NHel0tpbW'
    )
      .then((result) => {
        setStatus({
          message: 'Message sent successfully!',
          isError: false,
          isSubmitting: false
        });
        form.current.reset();
        blastConfetti();
      }, (error) => {
        setStatus({
          message: 'Failed to send message. Please try again.',
          isError: true,
          isSubmitting: false
        });
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className='glass'>
        <div className="contact-header">
          <h1>Contact</h1>
          <p>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

            <div className="form-group">
              <select
                name="submission_type"
                required
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
                className="contact-input"
              >
                <option value="" disabled>Select a submission type</option>
                <option value="more_info">I'd like more information about your services</option>
                <option value="feedback">Feedback on my experience</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Anything else you want to share?"
                className="contact-input"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
