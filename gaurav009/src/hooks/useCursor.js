import React, { useEffect, useState } from 'react';

const SimpleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      setPosition({ x: cursorX, y: cursorY });
      requestAnimationFrame(updateCursor);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onMouseDown = () => setClick(true);
    const onMouseUp = () => setClick(false);

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Link hover detection
    const handleLinkHover = () => {
      document.querySelectorAll('a, button, .nav-item, .cta-button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHover(true));
        el.addEventListener('mouseleave', () => setLinkHover(false));
      });
    };

    handleLinkHover();
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (window.innerWidth <= 768) return null;

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    transform: `translate(-50%, -50%) scale(${click ? 0.8 : linkHover ? 1.5 : 1})`
  };

  const followerStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    transform: `translate(-50%, -50%) scale(${linkHover ? 2.5 : 1})`
  };

  return (
    <>
      <div className="custom-cursor" style={cursorStyle} />
      <div className="cursor-follower" style={followerStyle} />
    </>
  );
};

export default SimpleCursor;