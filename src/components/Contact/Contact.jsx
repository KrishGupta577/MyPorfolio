import React, { useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="contact-methods">
            <a href="mailto:krishgupta577@gmail.com" className="contact-method">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <span>krishgupta577@gmail.com</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/krish-gupta-138b482a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method">
              <Linkedin className="contact-icon" />
              <div>
                <h4>LinkedIn</h4>
                <span>Connect with me</span>
              </div>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <span className="focus-border"></span>
          </div>
          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus ? 'success' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading-spinner"></span>
            ) : submitStatus === 'success' ? (
              'Message Sent!'
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;