import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Settings, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <MessageSquare className="w-10 h-10 group-hover:animate-pulse" />,
    title: "AI Chatbots",
    description: "24/7 AI Agents for Support, Sales, and Beyond.",
    link: "/ai-chatbots",
    color: "text-primary"
  },
  {
    icon: <Zap className="w-10 h-10 group-hover:animate-bounce" />,
    title: "AI Automation",
    description: "Connect Apps, Automate Workflows, Soar Higher.",
    link: "/ai-automation",
    color: "text-secondary"
  },
  {
    icon: <Brain className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />,
    title: "OpenAI Integrations",
    description: "Supercharge Apps with GPT-4 & NLP Magic.",
    link: "/platform#openai",
    color: "text-blue-400"
  }
];

const KeyServicesPreview = () => {
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
    <section className="py-20 md:py-28 bg-background/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
            >
              <Link to={service.link} className="block group" style={{ perspective: '900px' }}>
                <div className=" h-full tilt-card">
                  <div className="x-card p-8 rounded-[calc(var(--radius)-1px)] h-full flex flex-col items-center text-center hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-primary/20">
                    <div className={`mb-6 p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 breath-ring ${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-2xl font-semibold mb-3 ${service.color}`}>{service.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyServicesPreview;