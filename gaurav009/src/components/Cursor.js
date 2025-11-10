import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRefs = useRef([]);
  const rafRef = useRef();
  
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  
  // Create 5 segments for the snake cursor
  const segments = 5;
  const segmentPositions = useRef(Array(segments).fill().map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (window.innerWidth <= 768) {
      document.body.style.cursor = 'auto';
      return;
    }

    const onMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const onMouseDown = () => {
      // Add click class to head cursor
      if (cursorRefs.current[0]) {
        cursorRefs.current[0].classList.add('cursor-click');
      }
    };

    const onMouseUp = () => {
      // Remove click class from head cursor
      if (cursorRefs.current[0]) {
        cursorRefs.current[0].classList.remove('cursor-click');
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (target.matches('a, button, .nav-item, .cta-button, .card, .mobile-nav-item, .form-input, .form-textarea, .stat-item, .profile-photo, .contact-info-card')) {
        // Add hover class to all cursor segments
        cursorRefs.current.forEach((ref, index) => {
          if (ref) {
            if (index === 0) {
              ref.classList.add('cursor-hover');
            } else {
              ref.classList.add('cursor-hover');
            }
          }
        });
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (target.matches('a, button, .nav-item, .cta-button, .card, .mobile-nav-item, .form-input, .form-textarea, .stat-item, .profile-photo, .contact-info-card')) {
        // Remove hover class from all cursor segments
        cursorRefs.current.forEach((ref, index) => {
          if (ref) {
            if (index === 0) {
              ref.classList.remove('cursor-hover');
            } else {
              ref.classList.remove('cursor-hover');
            }
          }
        });
      }
    };

    // Ultra smooth snake animation loop
    const animateCursor = () => {
      const speed = 0.2; // Smooth speed for natural movement
      
      // Update head position (follows mouse directly)
      segmentPositions.current[0].x += (mouseX.current - segmentPositions.current[0].x) * speed;
      segmentPositions.current[0].y += (mouseY.current - segmentPositions.current[0].y) * speed;
      
      // Update tail positions with decreasing delay for snake effect
      for (let i = 1; i < segments; i++) {
        const tailSpeed = speed * (0.8 - (i * 0.1)); // Each tail segment is slightly slower
        segmentPositions.current[i].x += (segmentPositions.current[i-1].x - segmentPositions.current[i].x) * tailSpeed;
        segmentPositions.current[i].y += (segmentPositions.current[i-1].y - segmentPositions.current[i].y) * tailSpeed;
      }
      
      // Update all cursor segments positions
      cursorRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.style.left = `${segmentPositions.current[index].x}px`;
          ref.style.top = `${segmentPositions.current[index].y}px`;
        }
      });

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Initialize positions to center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    mouseX.current = centerX;
    mouseY.current = centerY;
    
    // Initialize all segments to center position
    segmentPositions.current = Array(segments).fill().map(() => ({
      x: centerX,
      y: centerY
    }));

    // Start animation
    rafRef.current = requestAnimationFrame(animateCursor);

    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Hide custom cursor on mobile
        document.body.style.cursor = 'auto';
        cursorRefs.current.forEach(ref => {
          if (ref) ref.style.display = 'none';
        });
      } else {
        // Show custom cursor on desktop
        document.body.style.cursor = 'none';
        cursorRefs.current.forEach(ref => {
          if (ref) ref.style.display = 'block';
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      // Cleanup event listeners
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('resize', handleResize);

      // Stop animation loop
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Reset cursor to default
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Don't render cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      {/* Head of the snake */}
      <div
        ref={el => cursorRefs.current[0] = el}
        className="cursor-segment cursor-head"
        style={{
          left: '50%',
          top: '50%',
        }}
      />
      
      {/* Tail segment 1 */}
      <div
        ref={el => cursorRefs.current[1] = el}
        className="cursor-segment cursor-tail-1"
        style={{
          left: '50%',
          top: '50%',
        }}
      />
      
      {/* Tail segment 2 */}
      <div
        ref={el => cursorRefs.current[2] = el}
        className="cursor-segment cursor-tail-2"
        style={{
          left: '50%',
          top: '50%',
        }}
      />
      
      {/* Tail segment 3 */}
      <div
        ref={el => cursorRefs.current[3] = el}
        className="cursor-segment cursor-tail-3"
        style={{
          left: '50%',
          top: '50%',
        }}
      />
      
      {/* Tail segment 4 */}
      <div
        ref={el => cursorRefs.current[4] = el}
        className="cursor-segment cursor-tail-4"
        style={{
          left: '50%',
          top: '50%',
        }}
      />
    </>
  );
};

export default Cursor;