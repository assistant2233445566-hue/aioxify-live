import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, BrainCircuit, Rocket } from 'lucide-react';
import OxygenBreathScene from '@/components/animations/OxygenBreathScene';

const features = [
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'AI as Oxygen',
    description: 'AI is the invisible but critical force sustaining modern innovation, just like oxygen sustains life.'
  },
  {
    icon: <Zap className="h-10 w-10 text-secondary" />,
    title: 'Energize Workflows',
    description: 'Inject AI to "AI-nergize" your systems, accelerating outcomes and removing inefficiencies.'
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Intelligent Systems',
    description: 'Our platform provides the "oxygen" for intelligent systems to learn, adapt, and evolve.'
  },
  {
    icon: <Rocket className="h-10 w-10 text-secondary" />,
    title: 'Fuel Innovation',
    description: 'Aioxify provides AI models and datasets—the building blocks to "oxygenate" your creations.'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-background/50 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <OxygenBreathScene variant="background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Aioxify <span className="text-gradient-oxygen glow-primary">Oxygenates</span> Your World
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Just as oxygen revitalizes cells, AI revitalizes systems, enabling growth and evolution. We make AI accessible and transformative for everyone.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className=" flex flex-col"
              variants={itemVariants}
            >
              <div className="x-card p-6 rounded-[calc(var(--radius)-1px)] h-full flex flex-col items-center text-center hover:bg-card/80 transition-colors duration-300 tilt-card">
                <div className={`mb-5 p-3 rounded-full breath-ring bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20' }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;