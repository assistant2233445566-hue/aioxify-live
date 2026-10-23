import React from 'react';
import { motion } from 'framer-motion';

const AioxygenAnimation = ({ isBackground = false }) => {
  const particleCount = isBackground ? 60 : 30;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * (isBackground ? 6 : 3) + 1,
    xInitial: (Math.random() - 0.5) * (isBackground ? 800 : 400),
    yInitial: (Math.random() - 0.5) * (isBackground ? 800 : 400),
    xFinal: (Math.random() - 0.5) * (isBackground ? 1000 : 500),
    yFinal: (Math.random() - 0.5) * (isBackground ? 1000 : 500),
    duration: Math.random() * (isBackground ? 20 : 10) + (isBackground ? 15 : 5),
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'
  }));

  const coreVariants = {
    animate: {
      scale: [1, 1.05, 1, 1.03, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const circuitLineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i) => ({
      pathLength: 1,
      opacity: [0, 0.7, 0],
      transition: {
        pathLength: { duration: 3, ease: "easeInOut" },
        opacity: { duration: 3, ease: "easeInOut" },
        repeat: Infinity,
        repeatDelay: 2,
        delay: i * 0.5
      }
    })
  };


  if (isBackground) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              left: '50%',
              top: '50%',
              opacity: Math.random() * 0.3 + 0.1,
            }}
            initial={{ x: p.xInitial, y: p.yInitial, scale: 0.5 }}
            animate={{ x: p.xFinal, y: p.yFinal, scale: 1 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }


  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <motion.svg viewBox="0 0 200 200" className="absolute w-full h-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="70%" stopColor="hsl(var(--primary) / 0.2)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </radialGradient>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        
        <motion.circle 
          cx="100" cy="100" r="40" 
          fill="url(#coreGlow)"
          variants={coreVariants}
          animate="animate"
        />
        <motion.circle 
          cx="100" cy="100" r="30" 
          fill="hsl(var(--background))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          variants={coreVariants}
          animate="animate"
        />
        <motion.path
          d="M100 70 V 30 Q 100 10 120 10 H 150"
          stroke="hsl(var(--primary))" fill="transparent" strokeWidth="1.5"
          variants={circuitLineVariants} custom={0} animate="animate"
        />
        <motion.path
          d="M100 70 A 30 30 0 0 0 70 100"
          stroke="hsl(var(--secondary))" fill="transparent" strokeWidth="1.5"
          variants={circuitLineVariants} custom={0.5} animate="animate"
        />
        <motion.path
          d="M70 100 H 30 Q 10 100 10 120 V 150"
          stroke="hsl(var(--primary))" fill="transparent" strokeWidth="1.5"
          variants={circuitLineVariants} custom={1} animate="animate"
        />
         <motion.path
          d="M100 130 V 170 Q 100 190 80 190 H 50"
          stroke="hsl(var(--secondary))" fill="transparent" strokeWidth="1.5"
          variants={circuitLineVariants} custom={1.5} animate="animate"
        />
        <motion.path
          d="M130 100 H 170 Q 190 100 190 80 V 50"
          stroke="hsl(var(--primary))" fill="transparent" strokeWidth="1.5"
          variants={circuitLineVariants} custom={2} animate="animate"
        />
      </motion.svg>

      {particles.slice(0,15).map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            left: '50%',
            top: '50%',
            opacity: 0.7
          }}
          initial={{ x: 0, y: 0, scale: 0.1 }}
          animate={{ 
            x: p.xInitial * 0.3, 
            y: p.yInitial * 0.3, 
            scale: [0.5,1,0.5],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: p.duration * 0.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "circOut"
          }}
        />
      ))}
       <motion.div 
        className="absolute font-bold text-2xl text-gradient-oxygen"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:1}}
        style={{textShadow: '0 0 5px hsl(var(--primary))'}}
       >
         AI
       </motion.div>
    </div>
  );
};

export default AioxygenAnimation;