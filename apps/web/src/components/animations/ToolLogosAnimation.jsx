import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Sliders, Bot, Share2 } from 'lucide-react'; // Using Lucide icons as placeholders

const tools = [
  { name: "Zapier", icon: <Zap size={36} />, color: "text-orange-500" },
  { name: "Make.com", icon: <Settings size={36} />, color: "text-purple-500" },
  { name: "n8n", icon: <Sliders size={36} />, color: "text-red-500" },
  { name: "OpenAI", icon: <Bot size={36} />, color: "text-green-500" },
  { name: "QuickBooks", icon: <Share2 size={36} />, color: "text-teal-500" },
  { name: "Salesforce", icon: <Zap size={36} />, color: "text-blue-500" }
];

const ToolLogosAnimation = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20, scale:0.8 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: i * 0.1,
        
      },
    }),
  };

  // For connecting lines
  const lineVariants = (i) => ({
      initial: { pathLength: 0, opacity:0 },
      animate: {
          pathLength: 1,
          opacity: 0.3,
          transition: { duration: 1, delay: i * 0.2 + 0.5, ease:"easeInOut" }
      }
  });

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
      <svg className="absolute inset-0 w-full h-full opacity-50 z-0" viewBox="0 0 400 200">
        {/* Example lines, you'd need to calculate positions based on layout */}
        <motion.line x1="70" y1="100" x2="130" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" variants={lineVariants(0)} initial="initial" animate="animate" />
        <motion.line x1="130" y1="50" x2="200" y2="100" stroke="hsl(var(--secondary))" strokeWidth="1" variants={lineVariants(1)} initial="initial" animate="animate" />
        <motion.line x1="200" y1="100" x2="270" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" variants={lineVariants(2)} initial="initial" animate="animate" />
        <motion.line x1="270" y1="50" x2="330" y2="100" stroke="hsl(var(--secondary))" strokeWidth="1" variants={lineVariants(3)} initial="initial" animate="animate" />
        <motion.line x1="130" y1="150" x2="200" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" variants={lineVariants(4)} initial="initial" animate="animate" />
        <motion.line x1="200" y1="100" x2="270" y2="150" stroke="hsl(var(--secondary))" strokeWidth="1" variants={lineVariants(5)} initial="initial" animate="animate" />
      </svg>

      {tools.map((tool, i) => (
        <motion.div
          key={tool.name}
          custom={i}
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true, amount:0.3}}
          className="flex flex-col items-center p-4 x-card rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow duration-300 z-10 w-32 h-32 justify-center"
          whileHover={{ y: -5 }}
        >
          <div className={`${tool.color} mb-2`}>{tool.icon}</div>
          <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ToolLogosAnimation;