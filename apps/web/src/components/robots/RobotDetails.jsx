import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const RobotDetails = ({ robot }) => {
  if (!robot) return null;

  return (
    <section id="robot-details" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass rounded-lg overflow-hidden gradient-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-6 relative h-64 md:h-80 overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    alt={`Detailed view of ${robot.name} robot`}
                    src={robot.detailImage} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="glass rounded-md p-4">
                    <p className="text-sm text-muted-foreground mb-1">Height</p>
                    <p className="font-medium">{robot.specifications.height}</p>
                  </div>
                  <div className="glass rounded-md p-4">
                    <p className="text-sm text-muted-foreground mb-1">Weight</p>
                    <p className="font-medium">{robot.specifications.weight}</p>
                  </div>
                  <div className="glass rounded-md p-4">
                    <p className="text-sm text-muted-foreground mb-1">Battery Life</p>
                    <p className="font-medium">{robot.specifications.battery}</p>
                  </div>
                  <div className="glass rounded-md p-4">
                    <p className="text-sm text-muted-foreground mb-1">Processor</p>
                    <p className="font-medium">{robot.specifications.processor}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gradient">{robot.name}</h2>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {robot.category}
                  </span>
                </div>
                <p className="text-lg mb-6">{robot.description}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {robot.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button className="w-full sm:w-auto">Request Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RobotDetails;