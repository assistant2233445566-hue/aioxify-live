import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Users, Sparkles } from 'lucide-react';

const useCases = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    oxygenAnalogy: "Purifies air for better health",
    aiEquivalent: "Purifies data for better decisions",
    description: "Aioxify cleanses and refines your data streams, turning raw information into actionable insights, ensuring healthier, more informed strategies."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-secondary" />,
    oxygenAnalogy: "Enhances physical performance",
    aiEquivalent: "Enhances productivity with automation",
    description: "Supercharge your operations. Aioxify's AI tools automate repetitive tasks, boosting efficiency and allowing your team to focus on high-impact work."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    oxygenAnalogy: "Accessible to all who need it",
    aiEquivalent: "Democratizes AI tools for everyone",
    description: "We believe AI's power should be universal. Aioxify provides intuitive tools and platforms, making advanced AI capabilities accessible to all users."
  },
   {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    oxygenAnalogy: "Detoxifies the body",
    aiEquivalent: "Detoxifies workflows",
    description: "Just as oxygen cleanses, AI with Aioxify streamlines your processes by removing bottlenecks and outdated methods, fostering a healthier operational flow."
  }
];

const UseCaseSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: i * 0.15
      }
    })
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient-oxygen glow-primary">Oxy-AI</span> Metaphor in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Aioxify acts like an "Oxygen Chamber" for your technology, revitalizing every aspect of your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className=""
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="x-card p-6 rounded-[calc(var(--radius)-1px)] h-full">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 breath-ring bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20' }`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{useCase.oxygenAnalogy}</h4>
                    <h3 className="text-xl font-bold text-gradient-oxygen">{useCase.aiEquivalent}</h3>
                  </div>
                </div>
                <motion.div
                  className="h-px mb-4 bg-gradient-to-r from-primary via-secondary to-transparent origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 }}
                />
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;