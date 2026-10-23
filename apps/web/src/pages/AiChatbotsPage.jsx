import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sliders, BarChart2, Settings, ArrowRight, Smile, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ChatbotDemo from '@/components/ChatbotDemo';
import PageHero from '@/components/layout/PageHero';

const useCases = [
  {
    scenario: "Customer Support",
    aiSolution: "AI resolves 80% of tickets instantly via Slack/Teams.",
    outcomeIcon: <DollarSign className="w-6 h-6 text-green-500" />,
    outcomeText: "40% cost reduction",
    bgColor: "bg-primary/5",
  },
  {
    scenario: "QBO Bookkeeping",
    aiSolution: "AI fetches invoices, reconciles accounts automatically.",
    outcomeIcon: <Clock className="w-6 h-6 text-blue-500" />,
    outcomeText: "15 hrs/week saved",
    bgColor: "bg-secondary/5",
  },
  {
    scenario: "Property Management",
    aiSolution: "AI answers tenant queries, schedules repairs 24/7.",
    outcomeIcon: <Smile className="w-6 h-6 text-primary" />,
    outcomeText: "24/7 responsiveness",
    bgColor: "bg-accent/5",
  }
];

const AiChatbotsPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="AI Chatbots"
          title="Conversational AI that works like your best employee"
          subtitle="Deploy multilingual, self-learning chatbots for support, sales, and operations—no downtime, no coffee breaks."
        />

        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">
            How Aioxify Chatbots <span className="text-gradient-oxygen">Transform</span> Your Business
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border/20 x-card rounded-lg">
              <thead className="bg-card/50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Scenario</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">AI Solution by Aioxify</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Tangible Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/10">
                {useCases.map((useCase, index) => (
                  <motion.tr 
                    key={useCase.scenario} 
                    className={`${useCase.bgColor} hover:bg-card/70 transition-colors`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{useCase.scenario}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{useCase.aiSolution}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      <div className="flex items-center">
                        {useCase.outcomeIcon}
                        <span className="ml-2">{useCase.outcomeText}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
        
        <ChatbotDemo />

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-background font-semibold shadow-lg hover:shadow-primary/40">
            <Link to="/contact?service=ai-chatbots">
              Customize Your AI Agent
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AiChatbotsPage;