import React from 'react';
import { motion } from 'framer-motion';

const DigitalLungAnimation = ({ isBackground = false }) => {
  const particleCount = isBackground ? 80 : 40;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * (isBackground ? 2.5 : 1.5) + 0.5,
    xInitial: (Math.random() - 0.5) * (isBackground ? 100 : 50), // Tighter cluster
    yInitial: (Math.random() - 0.5) * (isBackground ? 150 : 75), // Elongated cluster
    // Movement simulates breathing in and out from a central point (lung lobes)
    xSpread: (Math.random() - 0.5) * (isBackground ? 400 : 200), 
    ySpread: (Math.random() - 0.5) * (isBackground ? 500 : 250),
    duration: Math.random() * 5 + 4, // Slower, more deliberate
    delay: Math.random() * 2,
    color: Math.random() > 0.6 ? 'hsl(var(--primary))' : (Math.random() > 0.3 ? 'hsl(var(--secondary))' : 'hsl(200, 100%, 70%)') // Added light blue for oxygen feel
  }));

  const lungShapeVariants = {
    breathe: {
      scaleX: [1, 1.15, 0.95, 1.1, 1], // Simulates lung expansion and contraction
      scaleY: [1, 1.05, 1.15, 1, 1],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Lines representing bronchioles or data pathways
  const pathwayLine = (i) => ({
    initial: { pathLength: 0, opacity: 0.3 },
    animate: {
      pathLength: [0, 1, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "circInOut",
        delay: i * 0.3 + Math.random() * 1 // Staggered animation for pathways
      }
    }
  });


  if (isBackground) { // For full-screen background effect
    return (
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size * 2, // Larger for background
              height: p.size * 2,
              backgroundColor: p.color,
              left: '50%',
              top: '50%',
              opacity: Math.random() * 0.4 + 0.1,
            }}
            initial={{ x: p.xInitial, y: p.yInitial, scale: 0.3 }}
            animate={{ 
              x: [p.xInitial, p.xInitial + p.xSpread * 0.5, p.xInitial], // Inhale/Exhale X
              y: [p.yInitial, p.yInitial + p.ySpread * 0.7, p.yInitial], // Inhale/Exhale Y
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatType: "loop", // smoother loop for background
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  // For focused hero section animation
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg viewBox="-150 -200 300 400" className="absolute w-full h-full max-w-xl max-h-xl">
        <defs>
          <filter id="lungGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
           <radialGradient id="centerGlow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </radialGradient>
        </defs>

        <motion.g variants={lungShapeVariants} animate="breathe" style={{transformOrigin: "center"}}>
           <motion.ellipse cx="0" cy="0" rx="80" ry="150" fill="url(#centerGlow)" opacity="0.7" filter="url(#lungGlow)" />
          {/* Simplified lung lobe shapes */}
          <motion.path 
            d="M -70 -150 Q -150 -50 -70 50 Q -30 180 0 180 Q 30 180 70 50 Q 150 -50 70 -150 Q 0 -220 -70 -150 Z"
            fill="hsl(var(--primary) / 0.05)"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="1"
          />
          {/* Bronchiole-like pathways */}
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`pathR-${i}`}
              d={`M 0 0 Q ${30 + i*10} ${-50 - i*20} ${60 + i*5} ${-120 - i*10}`}
              stroke={`hsl(var(--secondary), ${50 + i*10}%)`} fill="transparent" strokeWidth="0.5"
              variants={pathwayLine(i)} initial="initial" animate="animate"
            />
          ))}
           {[...Array(5)].map((_, i) => (
            <motion.path
              key={`pathL-${i}`}
              d={`M 0 0 Q ${-30 - i*10} ${-50 - i*20} ${-60 - i*5} ${-120 - i*10}`}
              stroke={`hsl(var(--primary), ${50 + i*10}%)`} fill="transparent" strokeWidth="0.5"
              variants={pathwayLine(i+0.5)} initial="initial" animate="animate"
            />
          ))}
        </motion.g>
        
        {/* Particles flowing in and out */}
        {particles.map(p => (
          <motion.g key={p.id} variants={lungShapeVariants} animate="breathe" style={{transformOrigin: "center"}}>
            <motion.circle
              cx={0} cy={0} r={p.size} fill={p.color} opacity="0.8"
              initial={{ x: p.xInitial * 0.5, y: p.yInitial * 0.5, scale: 0.1 }}
              animate={{ 
                x: [p.xInitial * 0.5, p.xInitial * 0.5 + p.xSpread, p.xInitial * 0.5], // Flow in X
                y: [p.yInitial * 0.5, p.yInitial * 0.5 + p.ySpread, p.yInitial * 0.5], // Flow in Y
                scale: [0.1, 1, 0.1],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "circOut"
              }}
            />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export default DigitalLungAnimation;