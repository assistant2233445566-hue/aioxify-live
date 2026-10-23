import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { robotsData } from '@/data/robotsData';


const RobotShowcase = () => {
  const featuredRobots = robotsData.slice(0, 3); 

  return (
    <section className="py-20 md:py-28 relative bg-background">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Placeholder for a subtle background animation or image related to airflow/data */}
        {/* <AioxygenAnimation isBackground={true} />  Could be too much, consider static SVG patterns */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-oxygen glow-primary">Aioxify</span> Engines
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Meet our core AI models designed to "oxygenate" various aspects of your work and life.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/10 hover:text-primary group">
            <Link to="/robots" className="flex items-center">
              View all engines
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRobots.map((robot, index) => (
            <RobotCard key={robot.id} robot={robot} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RobotCard = ({ robot, index }) => {
  return (
    <motion.div
      className=" flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
      viewport={{ once: true, amount: 0.2 }}
      
    >
      <div className="x-card p-6 rounded-[calc(var(--radius)-1px)] h-full flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
        <div className="mb-6 relative h-48 overflow-hidden rounded-md">
          <img  
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            alt={`${robot.name} AI model visual representation`}
            src={robot.image} 
          />
          <div className="absolute top-2 right-2 bg-secondary/80 text-white text-xs font-medium py-1 px-2 rounded">
            {robot.category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gradient-oxygen">{robot.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{robot.description}</p>
        
        <Button asChild variant="secondary" className="w-full mt-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
          <Link to={`/solutions#solution-${robot.id}`}>
            Discover Engine
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default RobotShowcase;