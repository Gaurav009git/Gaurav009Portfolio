import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';

const Projects = () => {
  const { playHover, playClick } = useSound();

  const projects = [
    {
      title: 'Loopixs',
      description: 'Loopixs is a modern social media web application inspired by Instagram and Snapchat, designed for seamless content sharing and real-time engagement. It allows users to upload photos, short videos (Reels), share stories, like, comment, and interact with other users in a dynamic and visually appealing interface.',
      tech: ['React', 'Bootsrap', 'Node.js', 'MongoDB','GitHub'],
      status: 'Completed',
      icon: 'ᦠ',
      color: '#4285F4',
      link: '#'
    },
    {
      title: 'RentHub',
      description: 'A web application for listing, browsing, and booking rental properties with filters for location, price, and availability — includes an interactive map and image uploads.',
      tech: ['React','Node.js','MongoDB','Google Maps API','Bootstrap','GitHub'],
      status: 'In Progress',
      icon: '🏠',
      color: '#FBBC05',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, dark mode toggle, and responsive design using Framer Motion and modern CSS.',
      tech: ['React', 'Framer Motion','Emailjs','Css','GitHub'],
      status: 'Completed',
      icon: '💼',
      color: '#34A853',
      link: '#'
    },
    {
      title: 'ShopEase',
      description: 'A modern online shopping platform with product listings, cart management, and secure checkout. Includes an admin dashboard for managing inventory and orders.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Bootstrap','GitHub'],
      status: 'Completed',
      icon: '🛍️',
      color: '#EA4335',
      link: '#'
    },
    {
      title: 'Connectoo',
      description: 'A secure, real-time messaging platform with private and group chats, typing indicators, and message notifications using WebSocket communication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Bootstrap','GitHub'],
      status: 'Planning',
      icon: '💬',
      color: '#8AB4F8',
      link: '#'
    },
    {
      title: 'TaskFlow',
      description: 'A full-featured task management web app that lets users create, organize, and track daily activities with deadlines, priorities, and progress tracking. Includes authentication and real-time updates.',
      tech: ['React','Node.js','MongoDB','Bootstrap','JWT Auth','GitHub'],
      status: 'In Progress',
      icon: '💼',
      color: '#E1306C',
      link: '#'
    }
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

  const handleProjectClick = (project) => {
    playClick();
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank');
    }
  };

  const handleStatClick = () => {
    playClick();
  };

  const handleStatHover = () => {
    playHover();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#34A853';
      case 'In Progress': return '#FBBC05';
      case 'Planning': return '#4285F4';
      default: return '#5F6368';
    }
  };

  return (
    <div className="page projects-section">
      {/* Header Section - Matching Contact Page */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-header"
      >
        <h1 className="google-gradient-text">
          <GoogleText text="My Projects" />
        </h1>
        <p className="projects-subtitle">
          A Showcase of My Recent Work
        </p>
      </motion.div>

      {/* Projects Grid - Enhanced Styling */}
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={playHover}
              onClick={() => handleProjectClick(project)}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Header */}
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <div 
                    className="project-status"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{ 
                      borderColor: project.color,
                      color: project.color
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div 
                className="project-glow"
                style={{ 
                  background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="projects-stats"
      >
        <motion.div 
          className="stat-item"
          onMouseEnter={handleStatHover}
          onClick={handleStatClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">
            {projects.filter(p => p.status === 'Completed').length}+
          </div>
          <div className="stat-label">Projects Completed</div>
        </motion.div>
        <motion.div 
          className="stat-item"
          onMouseEnter={handleStatHover}
          onClick={handleStatClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">
            {projects.filter(p => p.status === 'In Progress').length}
          </div>
          <div className="stat-label">In Progress</div>
        </motion.div>
        <motion.div 
          className="stat-item"
          onMouseEnter={handleStatHover}
          onClick={handleStatClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">
            {projects.reduce((acc, project) => acc + project.tech.length, 0)}+
          </div>
          <div className="stat-label">Technologies Used</div>
        </motion.div>
      </motion.div>

      {/* Add CSS Styles */}
      <style jsx>{`
        .projects-section {
          padding-bottom: 2rem;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .projects-subtitle {
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          line-height: 1.6;
        }

        .projects-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--google-blue);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(66, 133, 244, 0.1);
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .project-title-section {
          flex: 1;
          min-width: 0;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.3;
        }

        .project-status {
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          border: 1.5px solid;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .project-glow {
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

        .project-card:hover .project-glow {
          opacity: 1;
        }

        .projects-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 20px;
          border: 1px solid var(--border);
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
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
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            padding: 2rem;
          }

          .project-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .project-icon {
            align-self: center;
          }

          .projects-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .projects-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            padding: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.9rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
          }

          .stat-item {
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;