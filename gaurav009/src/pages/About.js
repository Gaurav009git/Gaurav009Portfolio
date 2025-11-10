import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const About = () => {
  const { playHover, playClick } = useSound();

  const handleCardClick = () => {
    playClick();
  };

  const handleSkillHover = () => {
    playHover();
  };

  const handleStatHover = () => {
    playHover();
  };

  const handleCardHover = () => {
    playHover();
  };

  const skills = [
    { name: 'React', level: 90, color: '#4285F4', icon: '⚛️' },
    { name: 'Bootstrap', level: 90, color: '#FBBC05', icon: '🧩' },
    { name: 'Node.js', level: 80, color: '#4285F4', icon: '🟢' },
    { name: 'MongoDB', level: 95, color: '#34A853', icon: '🗃️' },
    { name: 'Git & GitHub', level: 95, color: '#EA4335', icon: '🧠' },
    { name: 'Postman', level: 85, color: '#34A853', icon: '🧪' },
    { name: 'HTML5', level: 90, color: '#8AB4F8', icon: '🌐' },
    { name: 'CSS3', level: 90, color: '#E1306C', icon: '🎨' }
  ];

  const stats = [
    { number: '06+', label: 'Months Experience', color: '#4285F4' },
    { number: '05', label: 'Projects Completed', color: '#34A853' },
    { number: '100%', label: 'Client Satisfaction', color: '#FBBC05' },
    { number: '24/7', label: 'Learning Mindset', color: '#EA4335' }
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
    <div className="page about-section">
      {/* Header Section - Matching Contact Page */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h1 className="google-gradient-text">
          <GoogleText text="About Me" />
        </h1>
        <p className="about-subtitle">
          "Passionate Full-Stack Developer Crafting the Future of the Web"
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="about-stats"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            onMouseEnter={handleStatHover}
            onClick={handleCardClick}
            whileHover={{ 
              y: -5,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="stat-number"
              style={{ color: stat.color }}
            >
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="about-container">
        {/* Journey Card */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onMouseEnter={handleCardHover}
          onClick={handleCardClick}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-header">
            <div className="card-icon" style={{ color: '#4285F4' }}>🚀</div>
            <h3 className="card-title">My Journey</h3>
          </div>
          <div className="card-content">
            <p className="card-description">
              I’m Gaurav Mukesh Chaudhari, a dedicated Full-Stack Developer with a passion for crafting seamless digital experiences. I specialize in React, Node.js, Bootstrap, and MongoDB, building solutions that combine design precision with technical excellence. My focus is on creating fast, scalable, and user-centered applications that bring ideas to life.
            </p>
            <p className="card-description">
             My journey began with an endless curiosity about how technology shapes the world around us. What started as simple experimentation soon grew into a deep commitment to development and innovation. Over time, I’ve evolved from writing my first lines of code to delivering full-stack projects that solve real-world challenges.

For me, coding isn’t just a profession — it’s a creative process of problem-solving, learning, and growth. I aim to build scalable apps that not only perform flawlessly but also make a lasting impact.
            </p>
          </div>
          <div 
            className="card-glow"
            style={{ 
              background: 'radial-gradient(circle, #4285F420 0%, transparent 70%)'
            }}
          />
        </motion.div>

        {/* Skills Card */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onMouseEnter={handleCardHover}
          onClick={handleCardClick}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-header">
            <div className="card-icon" style={{ color: '#34A853' }}>💻</div>
            <h3 className="card-title">Skills & Technologies</h3>
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                onMouseEnter={handleSkillHover}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{
                      backgroundColor: skill.color,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div 
            className="card-glow"
            style={{ 
              background: 'radial-gradient(circle, #34A85320 0%, transparent 70%)'
            }}
          />
        </motion.div>
      </div>

      {/* Add CSS Styles */}
      <style jsx>{`
        .about-section {
          padding-bottom: 2rem;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .about-subtitle {
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          line-height: 1.6;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: var(--card-bg);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border);
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--google-blue);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
        }

        .about-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--google-blue);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(66, 133, 244, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .card-icon {
          font-size: 2.5rem;
          transition: transform 0.3s ease;
        }

        .about-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .card-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .card-description:last-child {
          margin-bottom: 0;
        }

        .skills-container {
          margin-top: 1rem;
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-item:last-child {
          margin-bottom: 0;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-icon {
          font-size: 1.2rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: var(--border);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          border-radius: 10px;
          position: relative;
          transition: all 0.3s ease;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        .card-glow {
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

        .about-card:hover .card-glow {
          opacity: 1;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
          .about-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .about-card {
            padding: 2rem;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .about-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .about-stats {
            grid-template-columns: 1fr;
          }

          .about-card {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .card-description {
            font-size: 0.9rem;
          }

          .stat-card {
            padding: 1.2rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;