import React from 'react';
import { motion } from 'framer-motion';

const RobotAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Robot Head */}
      <motion.div
        className="relative"
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        {/* Robot Body */}
        <motion.div 
          className="w-48 h-64 bg-gradient-to-b from-blue-600 to-blue-800 rounded-2xl relative overflow-hidden gradient-border glow-box"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 3,
            ease: "easeInOut"
          }}
        >
          {/* Robot Face */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-gray-900 rounded-lg">
            {/* Eyes */}
            <div className="flex justify-center space-x-8 mt-6">
              <motion.div 
                className="w-6 h-6 bg-blue-400 rounded-full"
                animate={{ 
                  boxShadow: ["0 0 5px #3b82f6", "0 0 15px #3b82f6", "0 0 5px #3b82f6"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 
                }}
              />
              <motion.div 
                className="w-6 h-6 bg-blue-400 rounded-full"
                animate={{ 
                  boxShadow: ["0 0 5px #3b82f6", "0 0 15px #3b82f6", "0 0 5px #3b82f6"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  delay: 0.5
                }}
              />
            </div>
            
            {/* Mouth */}
            <motion.div 
              className="w-16 h-2 bg-blue-400 rounded-full mx-auto mt-6"
              animate={{ 
                width: ["4rem", "2rem", "4rem"],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Robot Chest */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-28 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
            <motion.div 
              className="w-12 h-12 rounded-full bg-blue-500"
              animate={{ 
                backgroundColor: ["#3b82f6", "#8b5cf6", "#3b82f6"],
                boxShadow: ["0 0 10px #3b82f6", "0 0 20px #8b5cf6", "0 0 10px #3b82f6"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3 
              }}
            />
          </div>
          
          {/* Robot Patterns */}
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-300 rounded-full opacity-75" />
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-300 rounded-full opacity-75" />
          <div className="absolute bottom-16 left-4 w-4 h-4 bg-blue-300 rounded-full opacity-50" />
          <div className="absolute bottom-16 right-4 w-4 h-4 bg-blue-300 rounded-full opacity-50" />
        </motion.div>
        
        {/* Robot Arms */}
        <motion.div 
          className="absolute top-24 -left-8 w-12 h-32 bg-blue-700 rounded-full"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-24 -right-8 w-12 h-32 bg-blue-700 rounded-full"
          animate={{ rotate: [0, -15, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
      
      {/* Shadow */}
      <motion.div 
        className="absolute bottom-0 w-40 h-8 bg-blue-500/20 rounded-full blur-md"
        animate={{ 
          width: ["10rem", "8rem", "10rem"],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      />
      
      {/* Particles */}
      <ParticleEffect />
    </div>
  );
};

const ParticleEffect = () => {
  // Create an array of particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: "50%",
            top: "50%",
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0 
          }}
          animate={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: particle.duration, 
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default RobotAnimation;