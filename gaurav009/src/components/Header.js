import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const Header = ({ currentPage, setCurrentPage }) => {
  const { playHover, playClick } = useSound();

  const navItems = [
    { id: 'home', label: 'Home', color: '#4285F4' },
    { id: 'about', label: 'About', color: '#EA4335' },
    { id: 'projects', label: 'Projects', color: '#FBBC05' },
    { id: 'contact', label: 'Contact', color: '#34A853' }
  ];

  const handleNavClick = (pageId) => {
    playClick();
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const handleBrandClick = () => {
    playClick();
    setCurrentPage('home');
    // Scroll to profile photo section
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
      profilePhoto.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const GoogleText = ({ text, color }) => (
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
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="nav">
        {/* Logo/Brand */}
        <motion.div 
          className="nav-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={playHover}
          onClick={handleBrandClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="brand-text">
            <GoogleText text="Gaurav Chaudhari" />
          </span>
        </motion.div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={playHover}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--item-color': item.color,
                background: 'none',
                border: 'none',
                font: 'inherit'
              }}
            >
              <span className="nav-text">{item.label}</span>
              <div className="nav-indicator"></div>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Add CSS Styles */}
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .nav-brand:hover {
          border-color: var(--google-blue);
          background: rgba(66, 133, 244, 0.1);
        }

        .brand-text {
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-items {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 0.5rem;
          border: 1px solid var(--border);
        }

        .nav-item {
          position: relative;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid transparent;
          cursor: default;
        }

        .nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border);
        }

        .nav-item.active {
          color: white;
          background: linear-gradient(135deg, var(--item-color), var(--item-color)dd);
          border-color: var(--item-color);
          box-shadow: 
            0 4px 15px var(--item-color)40,
            0 0 20px var(--item-color)20;
        }

        .nav-item.active .nav-text {
          text-shadow: 0 0 10px var(--item-color);
        }

        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--item-color);
          border-radius: 2px;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .nav-item.active .nav-indicator {
          width: 60%;
          opacity: 1;
        }

        .nav-text {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        /* Remove cursor pointer from all interactive elements */
        .nav-brand,
        .nav-item {
          cursor: none;
        }

        /* Google gradient styles - matching home.js */
        .google-blue { color: #4285F4 !important; }
        .google-red { color: #EA4335 !important; }
        .google-yellow { color: #FBBC05 !important; }
        .google-green { color: #34A853 !important; }
        .space { margin: 0 1px; }

        .google-gradient-text {
          font-weight: 700;
          letter-spacing: -0.5px;
          display: inline-block;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .header {
            padding: 1rem;
          }

          .nav {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-items {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .nav-item {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }

          .nav-brand {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .nav-items {
            gap: 0.25rem;
            padding: 0.25rem;
          }

          .nav-item {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
          }

          .nav-brand {
            font-size: 1.2rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;