import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Zap, Settings, ArrowRight, Share2, Activity, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ToolLogosAnimation from '@/components/animations/ToolLogosAnimation';
import PageHero from '@/components/layout/PageHero';

const workflowExamples = [
  {
    id: 1,
    title: "Marketing Hyper-Automation",
    description: "AI syncs leads from Salesforce to email campaigns, personalizes outreach messages based on behavior, and scores leads for sales team prioritization.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    steps: ["Lead Capture (Salesforce)", "AI Segmentation", "Personalized Email (Mailchimp)", "Behavior Tracking", "SMS Alert (Twilio) for Hot Leads"]
  },
  {
    id: 2,
    title: "Accounting AI-ssistant",
    description: "AI scans QuickBooks for discrepancies, cross-references with bank statements, flags anomalies, and alerts your accounting team via Slack with detailed reports.",
    icon: <Activity className="w-10 h-10 text-secondary" />,
    steps: ["QuickBooks Monitoring", "Bank Statement Sync", "AI Anomaly Detection", "Slack Notification", "Auto-Generated Report"]
  },
  {
    id: 3,
    title: "Operations Streamliner",
    description: "Automate inventory management by connecting your e-commerce platform to supplier databases, triggering reorders, and updating stock levels in real-time.",
    icon: <Share2 className="w-10 h-10 text-green-500" />,
    steps: ["E-commerce Sales Data (Shopify)", "Inventory Check", "AI Reorder Prediction", "Supplier API Integration", "Stock Level Update"]
  }
];

const AiAutomationPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, delay: i * 0.15, type: "spring", stiffness:100 } 
    })
  };
  
  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <PageHero
          kicker="AI Automation"
          title="No-code automation: your apps, speaking the same language"
          subtitle="Aioxify connects your favorite tools, letting AI orchestrate complex workflows seamlessly. It's like giving your business an intelligent nervous system."
        />

        <motion.section 
          className="mb-20"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount:0.1}}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">Tools We <span className="text-gradient-oxygen">Oxygenate</span> & Integrate</h2>
          <ToolLogosAnimation />
        </motion.section>

        <motion.section
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount:0.1}}
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            Example <span className="text-gradient-oxygen">AI-nergized</span> Workflows
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {workflowExamples.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                className=" flex flex-col"
                custom={index}
                variants={itemVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{once: true, amount:0.2}}
              >
                <div className="x-card p-8 rounded-[calc(var(--radius)-1px)] h-full flex flex-col shadow-xl hover:shadow-secondary/20 transition-shadow duration-300">
                  <div className="mb-6 self-start p-3 rounded-lg bg-card-foreground/5">
                    {workflow.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{workflow.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">{workflow.description}</p>
                  <div className="space-y-1 mt-auto">
                    {workflow.steps.map((step, i) => (
                        <p key={i} className="text-xs text-muted-foreground/80 flex items-center">
                           <Zap size={12} className="mr-2 text-primary/70 flex-shrink-0" />
                           {step}
                        </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div 
          className="text-center mt-20"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount:0.1}}
        >
          <Button asChild size="lg" className="group bg-gradient-to-r from-secondary to-purple-500 hover:from-secondary/90 hover:to-purple-500/90 text-background font-semibold shadow-lg hover:shadow-secondary/40">
            <Link to="/contact?service=ai-automation">
              Automate Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AiAutomationPage;