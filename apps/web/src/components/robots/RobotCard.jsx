import React from 'react';
import { motion } from 'framer-motion';

const RobotCard = ({ robot, onClick, index }) => {
  return (
    <motion.div
      key={robot.id}
      className="glass rounded-lg overflow-hidden gradient-border cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onClick?.(robot)}
      id={`robot-card-${robot.id}`}
    >
      <div className="p-6">
        <div className="mb-6 relative h-48 overflow-hidden rounded-md">
          <img
            className="w-full h-full object-cover"
            alt={`${robot.name} robot with futuristic design`}
            src={robot.image} />
          <div className="absolute top-2 right-2 bg-secondary/80 text-xs font-medium py-1 px-2 rounded">
            {robot.category}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gradient">{robot.name}</h3>
        <p className="text-muted-foreground line-clamp-3">{robot.description}</p>
      </div>
    </motion.div>
  );
};

export default RobotCard;