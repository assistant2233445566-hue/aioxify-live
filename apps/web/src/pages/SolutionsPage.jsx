import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';

const solutions = [
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "AI for Individuals",
    description: "Breathe easier with AI tools that simplify daily tasks, from smart home automation to personalized learning and creative assistance.",
    link: "/solutions/individual",
    details: [
      "Personalized AI assistants",
      "Smart scheduling and reminders",
      "AI-powered content creation tools",
      "Adaptive learning platforms"
    ]
  },
  {
    icon: <Briefcase className="w-10 h-10 text-secondary" />,
    title: "AI for Businesses",
    description: "Infuse your workflows with AI to eliminate inefficiencies, unlock new growth channels, and gain a competitive edge.",
    link: "/solutions/business",
    details: [
      "Automated customer support chatbots",
      "AI-driven data analytics and insights",
      "Process optimization and automation",
      "Predictive maintenance and forecasting"
    ]
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "AI for Developers",
    description: "Fuel your creations with AI models, APIs, and datasets—the building blocks of tomorrow’s innovations.",
    link: "/solutions/developer",
    details: [
      "Access to pre-trained AI models",
      "Robust API for AI integration",
      "Curated datasets for model training",
      "Developer tools and SDKs"
    ]
  }
];

const SolutionsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, duration: 0.6 }
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Solutions"
          title="Aioxify solutions"
          subtitle='Discover how Aioxify "oxygenates" different aspects of your world, providing tailored AI solutions to meet diverse needs.'
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className=" flex flex-col"
              variants={itemVariants}
            >
              <div className="x-card p-8 rounded-[calc(var(--radius)-1px)] h-full flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                <div className={`mb-6 p-4 rounded-full self-start bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20' }`}>
                  {solution.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">{solution.title}</h2>
                <p className="text-muted-foreground mb-6 flex-grow">{solution.description}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {solution.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary/70 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10 hover:text-primary group w-full">
                  <Link to={solution.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsPage;