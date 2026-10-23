import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Background3D = () => {
  const numParticles = 70; 
  const particles = Array.from({ length: numParticles }).map((_, i) => ({
    id: i,
    x: Math.random() * 200 - 100, // % values for positioning across screen
    y: Math.random() * 200 - 100,
    z: Math.random() * 1000 - 500, // Depth
    size: Math.random() * 3 + 1, // px
    opacity: Math.random() * 0.3 + 0.1,
    color: Math.random() > 0.5 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
    duration: Math.random() * 20 + 15, // seconds for one cycle
    delay: Math.random() * 10,
  }));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        perspective: '800px', 
        zIndex: 0,
        background: 'hsl(210 18% 16%)',
      }}
    >
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            transformStyle: 'preserve-3d',
          }}
          initial={{
            translateX: `${p.x}vw`,
            translateY: `${p.y}vh`,
            translateZ: `${p.z}px`,
            scale: 0.5,
          }}
          animate={{
            translateX: [`${p.x}vw`, `${p.x + (Math.random() - 0.5) * 20}vw`, `${p.x}vw`],
            translateY: [`${p.y}vh`, `${p.y + (Math.random() - 0.5) * 20}vh`, `${p.y}vh`],
            translateZ: [`${p.z}px`, `${p.z + (Math.random() - 0.5) * 300}px`, `${p.z}px`],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
       <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80" />
       <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, hsl(var(--primary) / 0.02) 0%, transparent 20%),
            radial-gradient(circle at 85% 75%, hsl(var(--secondary) / 0.02) 0%, transparent 20%)
          `,
          mixBlendMode: 'normal',
        }}
      />
    </div>
  );
};

export default Background3D;