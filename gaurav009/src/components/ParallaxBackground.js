import React from 'react';
import useParallax from '../hooks/useParallax';

const ParallaxBackground = () => {
  const { layer1, layer2 } = useParallax();

  return (
    <div className="parallax-bg">
      <div 
        className="parallax-layer layer-1"
        style={{
          transform: `translate3d(${layer1.x * 0.02}px, ${layer1.y * 0.02}px, 0)`
        }}
      />
      <div 
        className="parallax-layer layer-2"
        style={{
          transform: `translate3d(${layer2.x * 0.05}px, ${layer2.y * 0.05}px, 0)`
        }}
      />
    </div>
  );
};

export default ParallaxBackground;