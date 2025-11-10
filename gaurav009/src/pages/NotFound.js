import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const NotFound = () => {
  const { playClick } = useSound();

  const handleBackClick = () => {
    playClick();
    window.history.back();
  };

  return (
    <div className="page not-found">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          Looks like you've stumbled into the digital void. 
          Even my best code can't find this page! 🤖
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Don't worry, even the best developers get lost sometimes. 
          Let me help you find your way back!
        </p>
        <motion.button
          className="cta-button"
          onClick={handleBackClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take Me Back!
        </motion.button>
      </motion.div>
      
      <motion.div
        style={{ marginTop: '3rem', fontSize: '4rem' }}
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        🚀
      </motion.div>
    </div>
  );
};

export default NotFound;