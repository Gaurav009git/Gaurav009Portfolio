import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const Home = () => {
  const { playHover, playClick } = useSound();

  const handleCardClick = () => {
    playClick();
  };

  const handleStatHover = () => {
    playHover();
  };

  const handlePhotoHover = () => {
    playHover();
  };

  const handleSocialClick = (url) => {
    playClick();
    window.open(url, '_blank');
  };

  const services = [
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites.',
      hoverText: 'I design and develop fast, mobile-friendly websites with clean layouts, ensuring an engaging user experience that helps your brand stand out and attract more visitors.',
      color: '#4285F4'
    },
    {
      title: 'Frontend Development',
      description: 'Interactive user interfaces.',
      hoverText: 'Using React and modern frameworks, I build visually appealing, high-performance frontends with smooth animations, fast loading speeds, and responsive designs across all devices.',
      color: '#EA4335'
    },
    {
      title: 'Backend Development',
      description: 'Secure and scalable systems.',
      hoverText: 'I create reliable backend systems with Node.js and databases that handle complex data efficiently, keeping your applications secure, scalable, and always running smoothly.',
      color: '#FBBC05'
    },
    {
      title: 'Website Maintenance & Optimization',
      description: 'Performance and updates.',
      hoverText: 'I continuously improve website performance, enhance security, and update content to maintain top speed, reliability, and user engagement for your digital presence.',
      color: '#34A853'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/gaurav-chaudhari009',
      color: '#0077B5'
    },
    {
      platform: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Gaurav009git',
      color: '#6e5494'
    },
    {
      platform: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/_gaurav.009',
      color: '#E1306C'
    }
  ];

  const stats = [
    { number: '05', label: 'Projects Completed', color: '#4285F4' },
    { number: '06+', label: 'Months Experience', color: '#EA4335' },
    { number: '100%', label: 'Client Satisfaction', color: '#FBBC05' },
    { number: '24/7', label: 'Learning Mindset', color: '#34A853' }
  ];

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
    <div className="page home-section">
      {/* Hero Section - Enhanced */}
      <section className="hero">
        {/* Mobile First - Photo at Top */}
        <motion.div
          className="hero-image-mobile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-photo-container">
            <div 
              className="profile-photo"
              onMouseEnter={handlePhotoHover}
              onClick={handleCardClick}
            >
              <div className="photo-image-container">
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Gaurav Chaudhari - Full Stack Developer"
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder">
                  <span className="photo-icon">👨‍💻</span>
                </div>
              </div>
              <div className="photo-glow"></div>
            </div>
          </div>
        </motion.div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="google-gradient-text">
              <GoogleText text="Creative Full-Stack Developer" />
            </h1>
            <p className="hero-subtitle">
              Crafting seamless, high-performance web solutions with modern technologies and innovative design.
            </p>
            
            {/* Enhanced Stats */}
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item"
                  onMouseEnter={handleStatHover}
                  onClick={handleCardClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span 
                    className="stat-number"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Only - Photo on Right */}
          <motion.div
            className="hero-image-desktop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-photo-container">
              <div 
                className="profile-photo"
                onMouseEnter={handlePhotoHover}
                onClick={handleCardClick}
              >
                <div className="photo-image-container">
                  <img 
                    src="/images/profile-photo.jpg" 
                    alt="Gaurav Chaudhari - Full Stack Developer"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="photo-placeholder">
                    <span className="photo-icon">👨‍💻</span>
                  </div>
                </div>
                <div className="photo-glow"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        className="services-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="google-gradient-text">
            <GoogleText text="My Services" />
          </h2>
          <p className="services-subtitle">
            "Turning Creativity into Powerful Digital Solutions"
          </p>
          
          {/* Social Media Links - Small Logos */}
          <motion.div 
            className="social-links-mini"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.platform}
                className="social-link-mini"
                style={{ '--social-color': social.color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                onMouseEnter={playHover}
                onClick={() => handleSocialClick(social.url)}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="social-icon-mini">{social.icon}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              onMouseEnter={playHover}
              onClick={handleCardClick}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover">
                <p className="service-hover-text">{service.hoverText}</p>
              </div>
              <div 
                className="service-glow"
                style={{ 
                  background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Add CSS Styles */}
      <style jsx>{`
        .home-section {
          padding-bottom: 2rem;
        }

        .hero {
          text-align: center;
          padding: 4rem 0 3rem;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          margin-top: 1rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 50vh;
          width: 100%;
        }

        .hero-text {
          text-align: left;
          width: 100%;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
          text-align: left;
          width: 100%;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          text-align: left;
          width: 100%;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin: 2.5rem 0;
          width: 100%;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: var(--google-blue);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .stat-number {
          display: block;
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* Enhanced Profile Photo Styles - Rounded */
        .hero-image-mobile {
          display: none;
        }

        .hero-image-desktop {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-photo-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-photo {
          position: relative;
          width: 380px;
          height: 380px;
          border-radius: 30px; /* Changed from 50% to rounded corners */
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 6px;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(66, 133, 244, 0.1);
          border: 4px solid transparent;
          background-clip: padding-box;
        }

        .profile-photo::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853);
          border-radius: 34px; /* Adjusted for rounded corners */
          background-size: 400% 400%;
          animation: googleGradient 4s ease infinite;
          z-index: -1;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .photo-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 26px; /* Adjusted for rounded corners */
          overflow: hidden;
          background: var(--card-bg);
          border: 3px solid var(--card-bg);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 23px; /* Adjusted for rounded corners */
          transition: all 0.4s ease;
          filter: grayscale(0.1);
          border: 2px solid transparent;
        }

        .photo-placeholder {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 26px; /* Match photo-image-container */
          justify-content: center;
          align-items: center;
          font-size: 4rem;
          border: 3px solid var(--card-bg);
        }

        .photo-glow {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 44px; /* Adjusted for rounded corners */
          background: 
            radial-gradient(circle at 30% 30%, rgba(66, 133, 244, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(234, 67, 53, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(251, 188, 5, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(52, 168, 83, 0.2) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -2;
          filter: blur(8px);
        }

        /* Hover Effects */
        .profile-photo:hover {
          transform: scale(1.05);
          box-shadow: 
            0 20px 45px rgba(0, 0, 0, 0.4),
            0 0 80px rgba(66, 133, 244, 0.2);
        }

        .profile-photo:hover::before {
          opacity: 1;
          animation-duration: 2s;
        }

        .profile-photo:hover .profile-image {
          transform: scale(1.08);
          filter: grayscale(0) brightness(1.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .profile-photo:hover .photo-glow {
          opacity: 1;
        }

        /* Click Animation */
        .profile-photo:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }

        /* Services Section */
        .services-section {
          margin-top: 4rem;
          padding: 3rem 0;
        }

        .services-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .services-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .services-subtitle {
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        /* Social Links Mini */
        .social-links-mini {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .social-link-mini {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-bg);
          border: 2px solid var(--border);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link-mini:hover {
          border-color: var(--social-color);
          background: var(--social-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .social-icon-mini {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-link-mini:hover .social-icon-mini {
          color: white;
          transform: scale(1.1);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--google-blue);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(66, 133, 244, 0.1);
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .service-hover {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
          height: 0;
          overflow: hidden;
        }

        .service-card:hover .service-hover {
          opacity: 1;
          transform: translateY(0);
          height: auto;
        }

        .service-hover-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        .service-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: -1;
        }

        .service-card:hover .service-glow {
          opacity: 1;
        }

        /* Google gradient styles */
        .google-gradient-bg {
          background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853) !important;
          background-size: 300% 300% !important;
          animation: googleGradient 3s ease infinite !important;
        }

        @keyframes googleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

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
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-image-mobile {
            display: flex;
            justify-content: center;
            order: -1;
          }

          .hero-image-desktop {
            display: none;
          }

          .profile-photo {
            width: 300px;
            height: 300px;
            border-radius: 25px; /* Adjusted for mobile */
            padding: 5px;
          }

          .profile-photo::before {
            border-radius: 29px; /* Adjusted for mobile */
          }

          .photo-image-container {
            border-radius: 21px; /* Adjusted for mobile */
            border-width: 2px;
          }

          .profile-image {
            border-radius: 18px; /* Adjusted for mobile */
          }

          .photo-placeholder {
            border-radius: 21px; /* Adjusted for mobile */
          }

          .photo-glow {
            top: -12px;
            left: -12px;
            right: -12px;
            bottom: -12px;
            border-radius: 37px; /* Adjusted for mobile */
          }

          .hero-text h1 {
            font-size: 2.5rem;
            text-align: center;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            text-align: center;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-item {
            padding: 1rem 0.5rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 2rem;
          }

          .social-links-mini {
            gap: 1rem;
          }

          .social-link-mini {
            width: 45px;
            height: 45px;
          }

          .social-icon-mini {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }

          .profile-photo {
            width: 250px;
            height: 250px;
            border-radius: 20px; /* Adjusted for smaller screens */
            padding: 4px;
          }

          .profile-photo::before {
            border-radius: 24px; /* Adjusted for smaller screens */
          }

          .photo-image-container {
            border-radius: 16px; /* Adjusted for smaller screens */
          }

          .profile-image {
            border-radius: 13px; /* Adjusted for smaller screens */
          }

          .photo-placeholder {
            border-radius: 16px; /* Adjusted for smaller screens */
            font-size: 3rem;
          }

          .photo-glow {
            border-radius: 30px; /* Adjusted for smaller screens */
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .services-header h2 {
            font-size: 2rem;
          }

          .services-subtitle {
            font-size: 1.1rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-title {
            font-size: 1.2rem;
          }

          .social-links-mini {
            gap: 0.8rem;
          }

          .social-link-mini {
            width: 40px;
            height: 40px;
          }

          .social-icon-mini {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 360px) {
          .profile-photo {
            width: 200px;
            height: 200px;
            border-radius: 15px; /* Adjusted for smallest screens */
            padding: 3px;
          }

          .profile-photo::before {
            border-radius: 19px; /* Adjusted for smallest screens */
          }

          .photo-image-container {
            border-radius: 12px; /* Adjusted for smallest screens */
          }

          .profile-image {
            border-radius: 9px; /* Adjusted for smallest screens */
          }

          .photo-placeholder {
            border-radius: 12px; /* Adjusted for smallest screens */
            font-size: 2.5rem;
          }

          .photo-glow {
            border-radius: 25px; /* Adjusted for smallest screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;