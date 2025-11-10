import { useState, useEffect } from 'react';

const useParallax = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2),
        y: (e.clientY - window.innerHeight / 2)
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return {
    layer1: mousePosition,
    layer2: { x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }
  };
};

export default useParallax;