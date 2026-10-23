import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Download, Zap, FileText, Settings2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';

const resources = [
  {
    id: 1,
    title: "50 AI Prompts for QuickBooks Automation",
    type: "Prompt Guide",
    icon: <FileText className="w-8 h-8 text-primary" />,
    description: "Unlock the power of AI in your accounting with these expertly crafted prompts for QuickBooks automation tasks.",
    downloadLink: "/downloads/qb-prompts.pdf",
    tags: ["QuickBooks", "Prompts", "Accounting", "Automation"]
  },
  {
    id: 2,
    title: "AI Chatbot Implementation Checklist",
    type: "Checklist",
    icon: <Settings2 className="w-8 h-8 text-secondary" />,
    description: "A step-by-step guide to ensure a smooth and successful AI chatbot deployment for your business.",
    downloadLink: "/downloads/chatbot-checklist.pdf",
    tags: ["Chatbots", "Implementation", "Best Practices"]
  },
  {
    id: 3,
    title: "Aioxify API Starter Kit (Python)",
    type: "Code Snippets",
    icon: <Zap className="w-8 h-8 text-green-500" />,
    description: "Quickly integrate Aioxify's capabilities into your Python applications with this handy starter kit.",
    downloadLink: "/downloads/aioxify-python-starter.zip",
    tags: ["API", "Python", "Development", "Integration"]
  },
  {
    id: 4,
    title: "The 'AI as Oxygen' Whitepaper",
    type: "Whitepaper",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    description: "A deep dive into the philosophy and practical applications of our core 'AI as Oxygen' metaphor.",
    downloadLink: "/downloads/ai-as-oxygen-whitepaper.pdf",
    tags: ["AI Theory", "Innovation", "Strategy", "Whitepaper"]
  },
];

const ToolkitPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Resources"
          title="Aioxify toolkit & resources"
          subtitle='Equip yourself with valuable guides, templates, and tools to make the most of Aioxify’s "AI oxygen."'
        />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={sectionVariants} initial="hidden" animate="visible"
        >
          {resources.map(resource => (
            <motion.div 
              key={resource.id}
              className=" group flex flex-col"
              variants={itemVariants}
            >
              <div className="x-card p-6 rounded-[calc(var(--radius)-1px)] h-full flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-card-foreground/5 mr-4">
                    {resource.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-muted/50 text-muted-foreground`}>{resource.type}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{resource.title}</h2>
                <p className="text-sm text-muted-foreground mb-5 flex-grow">{resource.description}</p>
                <div className="mb-4">
                  {resource.tags.map(tag => (
                    <span key={tag} className="inline-block bg-muted/40 text-muted-foreground/80 text-xs px-2 py-0.5 rounded-full mr-1 mb-1">#{tag}</span>
                  ))}
                </div>
                <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                  <Link to={`/contact?service=${encodeURIComponent(resource.title)}`}>
                    <Download className="mr-2 h-4 w-4" /> Request this resource
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

export default ToolkitPage;