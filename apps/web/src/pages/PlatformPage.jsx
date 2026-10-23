import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Share2, Activity, Settings, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';

const platformFeatures = [
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Modular AI Core",
    description: "Access a flexible and scalable AI engine. Plug in pre-trained models or build your own with our intuitive tools."
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: "Oxygenated Datasets",
    description: "Fuel your AI with high-quality, curated datasets. Cleaned and optimized for peak model performance."
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Seamless Integration APIs",
    description: "Breathe AI into any application with our robust and well-documented APIs. Easy to connect, easy to scale."
  },
  {
    icon: <Activity className="w-8 h-8 text-secondary" />,
    title: "Real-time Analytics",
    description: "Monitor your AI's performance and impact with live dashboards. Understand how AI is oxygenating your results."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Customizable Workflows",
    description: "Tailor AI processes to your exact needs. Our platform adapts to your flow, not the other way around."
  },
  {
    icon: <Lock className="w-8 h-8 text-secondary" />,
    title: "Secure & Ethical AI",
    description: "Built with privacy and ethical considerations at its core. Trustworthy AI you can depend on."
  }
];

const PlatformPage = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      rotateY: -30
    },
    onscreen: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1
      }
    })
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Platform"
          title="The Aioxify Platform"
          subtitle='Our robust platform is the engine that delivers "AI as Oxygen", providing the tools and infrastructure to build, deploy, and manage transformative AI solutions.'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className=""
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="x-card p-6 rounded-[calc(var(--radius)-1px)] h-full flex flex-col items-start text-left shadow-lg hover:shadow-secondary/20 transition-shadow duration-300">
                 <div className={`mb-5 p-3 rounded-lg bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20' }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          id="openai"
          className="mt-20 x-card p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            OpenAI <span className="text-gradient-oxygen">Integrations</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-6 leading-relaxed">
            Supercharge your apps with GPT-4 and NLP through Aioxify. We wrap OpenAI models with your tools, policies, and data: healthcare voice agents that stay HIPAA-aware, FinTech KYC flows with an audit trail, and property management concierges that write work orders back to your system.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <li>GPT-powered chat and voice with your prompts and guardrails</li>
            <li>Function calling into QuickBooks, EHR, PMS, and Shopify</li>
            <li>Embeddings over your knowledge base, not the open web</li>
            <li>Logging, evals, and human escalation when confidence drops</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/documentation">View platform documentation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact?service=openai">Talk to an AI specialist</Link>
            </Button>
          </div>
        </motion.section>

        <motion.div 
          className="text-center mt-16"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: platformFeatures.length * 0.1 + 0.5, duration: 0.5}}
        >
          <Button size="lg" asChild className="bg-gradient-to-r from-secondary to-purple-500 hover:from-secondary/90 hover:to-purple-500/90 text-background font-semibold shadow-xl hover:shadow-secondary/50 transition-all duration-300">
            <Link to="/robots">
              Explore Aioxify engines
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformPage;