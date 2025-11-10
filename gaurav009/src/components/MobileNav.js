import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const MobileNav = ({ currentPage, setCurrentPage }) => {
  const { playClick, playHover } = useSound();

  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home', color: '#4285F4' },
    { id: 'about', icon: '👤', label: 'About', color: '#EA4335' },
    { id: 'projects', icon: '💼', label: 'Projects', color: '#FBBC05' },
    { id: 'contact', icon: '📱', label: 'Contact', color: '#34A853' }
  ];

  const handleNavClick = (pageId) => {
    playClick();
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.nav 
        className="mobile-nav"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`mobile-nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={playHover}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2 + index * 0.1,
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }}
          >
            <div className="mobile-nav-icon-container">
              <span className="mobile-nav-icon">
                {item.icon}
              </span>
              {currentPage === item.id && (
                <motion.div 
                  className="mobile-nav-dot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  style={{ backgroundColor: item.color }}
                />
              )}
            </div>
            <span className="mobile-nav-label">{item.label}</span>
          </motion.button>
        ))}
      </motion.nav>

      <style jsx>{`
        .mobile-nav {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(66, 133, 244, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          width: 90%;
          max-width: 350px;
          min-width: 280px;
          justify-content: space-between;
        }

        .mobile-nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 11px;
          color: #999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid transparent;
          flex: 1;
          min-width: 0;
          cursor: none;
          background: transparent;
          font-family: inherit;
          max-width: 80px;
        }

        .mobile-nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-item.active {
          color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .mobile-nav-item.active .mobile-nav-label {
          color: inherit;
          font-weight: 700;
        }

        /* Individual color styles for active states */
        .mobile-nav-item[data-id="home"].active {
          background: rgba(66, 133, 244, 0.2);
          border-color: rgba(66, 133, 244, 0.4);
          color: #4285F4;
        }

        .mobile-nav-item[data-id="about"].active {
          background: rgba(234, 67, 53, 0.2);
          border-color: rgba(234, 67, 53, 0.4);
          color: #EA4335;
        }

        .mobile-nav-item[data-id="projects"].active {
          background: rgba(251, 188, 5, 0.2);
          border-color: rgba(251, 188, 5, 0.4);
          color: #FBBC05;
        }

        .mobile-nav-item[data-id="contact"].active {
          background: rgba(52, 168, 83, 0.2);
          border-color: rgba(52, 168, 83, 0.4);
          color: #34A853;
        }

        .mobile-nav-icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
        }

        .mobile-nav-icon {
          font-size: 22px;
          transition: all 0.3s ease;
          filter: grayscale(0.8) brightness(0.8);
          position: relative;
          z-index: 2;
        }

        .mobile-nav-item.active .mobile-nav-icon {
          filter: grayscale(0) brightness(1.2);
          transform: scale(1.15);
        }

        .mobile-nav-item:hover .mobile-nav-icon {
          filter: grayscale(0.4) brightness(1.1);
          transform: scale(1.1);
        }

        .mobile-nav-dot {
          position: absolute;
          top: -1px;
          right: -1px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          z-index: 3;
          box-shadow: 0 0 12px currentColor;
        }

        .mobile-nav-label {
          font-size: 11px;
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        /* Enhanced press effect */
        .mobile-nav-item:active {
          transform: scale(0.92);
          transition: transform 0.1s ease;
        }

        /* Mobile responsiveness */
        @media (max-width: 480px) {
          .mobile-nav {
            bottom: 15px;
            padding: 10px 14px;
            width: 92%;
            max-width: 320px;
            min-width: 260px;
          }

          .mobile-nav-item {
            padding: 6px 10px;
            gap: 4px;
            font-size: 10px;
            max-width: 70px;
          }

          .mobile-nav-icon {
            font-size: 20px;
          }

          .mobile-nav-label {
            font-size: 10px;
          }

          .mobile-nav-icon-container {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 360px) {
          .mobile-nav {
            padding: 8px 12px;
            width: 94%;
            max-width: 300px;
            min-width: 240px;
            gap: 6px;
          }

          .mobile-nav-item {
            padding: 5px 8px;
            max-width: 65px;
          }

          .mobile-nav-icon {
            font-size: 18px;
          }

          .mobile-nav-label {
            font-size: 9px;
          }

          .mobile-nav-icon-container {
            width: 22px;
            height: 22px;
          }
        }

        /* Landscape mode support */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-nav {
            bottom: 10px;
            padding: 8px 12px;
          }
        }

        /* Ensure it's always visible on mobile */
        @media (max-width: 768px) {
          .mobile-nav {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }

        /* High contrast for better visibility */
        .mobile-nav {
          background: rgba(10, 10, 10, 0.95) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }

        /* Smooth transitions for all states */
        .mobile-nav-item,
        .mobile-nav-icon,
        .mobile-nav-label {
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Force visibility */
        .mobile-nav {
          opacity: 1 !important;
          transform: translateX(-50%) !important;
          pointer-events: all !important;
        }
      `}</style>
    </>
  );
};

export default MobileNav;