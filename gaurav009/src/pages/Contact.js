import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { playHover, playClick } = useSound();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_gc009',
    TEMPLATE_ID: 'template_usmaglm',
    PUBLIC_KEY: 'Z8RhXDbzwfhsBAGEm'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const contactInfo = [
    { icon: '📧', title: 'Email', content: 'gauravchaudhari160@gmail.com', type: 'email', color: '#34A853' },
    { icon: '💻', title: 'GitHub', content: 'Gaurav009git', type: 'github', color: '#6e5494' },
    { icon: '📷', title: 'Instagram', content: '_gaurav.009', type: 'instagram', color: '#E1306C' },
    { icon: '📍', title: 'Location', content: 'Nandurbar, Maharashtra', type: 'location', color: '#FBBC05' },
    { icon: '💼', title: 'LinkedIn', content: 'Gaurav Chaudhari', type: 'linkedin', color: '#4285F4' }
  ];

  const handleContactClick = (type) => {
    playClick();
    const urls = {
      email: 'mailto:gauravchaudhari160@gmail.com?subject=Portfolio Contact&body=Hello Gaurav, I would like to get in touch with you.',
      github: 'https://github.com/Gaurav009git',
      instagram: 'https://instagram.com/_gaurav.009',
      location: 'https://maps.app.goo.gl/a8E6Eh3NTk26g8t57',
      linkedin: 'https://www.linkedin.com/in/gaurav-chaudhari009'
    };
    window.open(urls[type], type === 'email' ? '_self' : '_blank');
  };

  const GoogleText = ({ text }) => (
    <span className="google-gradient-text">
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={
            char === ' ' ? 'space' :
            index % 4 === 0 ? 'google-blue' :
            index % 4 === 1 ? 'google-red' :
            index % 4 === 2 ? 'google-yellow' : 'google-green'
          }
        >
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <div className="page contact-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1><GoogleText text="Get In Touch" /></h1>
        <p className="contact-subtitle">Let's create something amazing together</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form"
        >
          <h3 className="form-title"><GoogleText text="Send Message" /></h3>
          
          {submitStatus === 'success' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="status-message success">
              ✅ Message sent successfully!
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="status-message error">
              ❌ Failed to send message. Please try again.
            </motion.div>
          )}

          {['name', 'email', 'subject'].map((field) => (
            <div key={field} className="form-group">
              <label className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)} *
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="form-input"
                onMouseEnter={playHover}
                placeholder={`Enter your ${field}`}
                disabled={isSubmitting}
              />
            </div>
          ))}

          <div className="form-group">
            <label className="form-label">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="form-textarea"
              onMouseEnter={playHover}
              placeholder="Tell me about your project or just say hello!"
              disabled={isSubmitting}
            />
          </div>

          <motion.button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            onMouseEnter={playHover}
            whileHover={isSubmitting ? {} : { scale: 1.02 }}
            whileTap={isSubmitting ? {} : { scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="contact-info"
        >
          <h3 className="info-title"><GoogleText text="Contact With Me" /></h3>
          <div className="contact-cards">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-card"
                style={{ '--card-color': item.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onMouseEnter={playHover}
                onClick={() => handleContactClick(item.type)}
                whileHover={{ scale: 1.02 }}
              >
                <span className="contact-icon" style={{ color: item.color }}>{item.icon}</span>
                <div className="contact-content">
                  <h4 className="contact-title" style={{ color: item.color }}>{item.title}</h4>
                  <p className="contact-detail">{item.content}</p>
                </div>
                <span className="contact-action" style={{ color: item.color }}>
                  {item.type === 'email' ? 'Email' : item.type === 'github' ? 'View' : item.type === 'instagram' ? 'Follow' : 'View'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add CSS Styles */}
      <style jsx>{`
        .contact-section {
          padding: 2rem 0;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-form {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--border);
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--google-blue);
          box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
        }

        .form-input:hover,
        .form-textarea:hover {
          border-color: var(--google-blue);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-button:disabled {
          opacity: 0.7;
        }

        .submit-button.submitting {
          background: var(--border);
        }

        .loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .status-message {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        }

        .status-message.success {
          background: rgba(52, 168, 83, 0.1);
          color: #34A853;
          border: 1px solid #34A853;
        }

        .status-message.error {
          background: rgba(234, 67, 53, 0.1);
          color: #EA4335;
          border: 1px solid #EA4335;
        }

        .contact-info {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--border);
        }

        .info-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: all 0.3s ease;
          gap: 1rem;
        }

        .contact-card:hover {
          transform: translateY(-2px);
          border-color: var(--google-blue);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .contact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .contact-content {
          flex: 1;
        }

        .contact-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .contact-detail {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .contact-action {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Google gradient text colors */
        .google-blue { color: #4285F4 !important; }
        .google-red { color: #EA4335 !important; }
        .google-yellow { color: #FBBC05 !important; }
        .google-green { color: #34A853 !important; }
        .space { margin: 0 2px; }

        .google-gradient-text {
          font-weight: 700;
          letter-spacing: -0.5px;
          display: inline-block;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }

          .contact-header h1 {
            font-size: 2.5rem;
          }

          .contact-subtitle {
            font-size: 1.1rem;
          }

          .contact-form,
          .contact-info {
            padding: 2rem;
          }

          .contact-card {
            padding: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-header h1 {
            font-size: 2rem;
          }

          .contact-form,
          .contact-info {
            padding: 1.5rem;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .contact-content {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;