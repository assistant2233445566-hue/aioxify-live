import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Landmark, Building2, Factory, ShoppingCart, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';

const industriesData = [
  { 
    name: 'Healthcare', 
    icon: <Stethoscope className="w-12 h-12" />, 
    title: "AI Voice Agents for Scheduling, Triage & Records",
    description: "HIPAA-compliant voice agents answer inbound clinic calls, book and reschedule appointments, run structured symptom triage, send reminders, and write back to the medical record. Care teams keep the human moments; Aioxify handles the front-desk load without putting PHI at risk.",
    stats: "Voice agents covering after-hours calls; fewer no-shows; faster chart updates.",
    badges: ["HIPAA Compliant", "GDPR Ready", "Voice Agents", "EHR-friendly"],
    color: "text-red-400", 
    bgColor: "bg-red-400/10",
    mapPosition: { top: '18%', left: '28%' }
  },
  { 
    name: 'FinTech', 
    icon: <Landmark className="w-12 h-12" />, 
    title: "AI-Powered KYC, Fraud Detection & Loan Advisory",
    description: "Onboard customers with AI-powered KYC and document checks, watch transactions for fraud in real time, automate QuickBooks Online bookkeeping, and give loan teams an advisor that scores risk without burying analysts in files. Fast decisions, still inside your compliance envelope.",
    stats: "Faster KYC clearance; stronger fraud catch-rate; shorter loan cycles.",
    badges: ["AI-Powered KYC", "PCI DSS Compliant", "ISO 27001 Certified", "AML-aware"],
    color: "text-blue-400", 
    bgColor: "bg-blue-400/10",
    mapPosition: { top: '38%', left: '62%' }
  },
  { 
    name: 'Property Management', 
    icon: <Building2 className="w-12 h-12" />, 
    title: "24/7 Tenant Voice Support, Repairs & Lease Ops",
    description: "Aioxify gives property management teams a round-the-clock concierge: voice and chat agents that answer tenant questions, log work orders, schedule repairs with vendors, send rent reminders, and keep lease documents current across every building in the portfolio.",
    stats: "Most routine tenant queries resolved by AI; fewer stalled maintenance tickets.",
    badges: ["Fair Housing Act Aware", "Data Encrypted", "Voice & Chat", "Work-order automation"],
    color: "text-sky-400", 
    bgColor: "bg-sky-400/10",
    mapPosition: { top: '58%', left: '18%' }
  },
  { 
    name: 'Manufacturing', 
    icon: <Factory className="w-12 h-12" />, 
    title: "Predictive Maintenance, Quality & Supply Chain AI",
    description: "Connect shop-floor signals to models that forecast machine failure, flag quality defects before they ship, and rebalance inventory across plants and suppliers. Production stays moving; surprises get caught in the data, not on the line.",
    stats: "Less unplanned downtime; tighter quality gates; cleaner inventory turns.",
    badges: ["Predictive Maintenance", "Quality Control", "OT/IT aware", "Traceability"],
    color: "text-emerald-400", 
    bgColor: "bg-emerald-400/10",
    mapPosition: { top: '22%', left: '68%' }
  },
  { 
    name: 'E-commerce', 
    icon: <ShoppingCart className="w-12 h-12" />, 
    title: "Recommendation Engines, Shopping Assistants & Inventory Bots",
    description: "Turn storefront traffic into orders with personalized recommendations, AI shopping assistants that answer product questions, cart-recovery flows, and inventory bots that keep stock honest across channels so you do not oversell or sit on dead SKUs.",
    stats: "Higher conversion from recommendations; faster support replies; fewer stockouts.",
    badges: ["Personalization", "AI Support", "Inventory Bots", "Omnichannel"],
    color: "text-purple-400", 
    bgColor: "bg-purple-400/10",
    mapPosition: { top: '70%', left: '48%' }
  },
];

const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Industries"
          title="Industries we serve & oxygenate"
          subtitle="Aioxify tailors AI solutions to the specific needs and regulatory landscapes of diverse sectors, ensuring compliance and peak performance."
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            className="lg:col-span-1 relative "
            variants={sectionVariants} initial="hidden" animate="visible" transition={{delay:0.2}}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">Explore Our Expertise</h2>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none x-card rounded-full p-4 shadow-xl">
                <Globe className="w-full h-full text-primary/10 opacity-50" />
                {industriesData.map((industry) => (
                    <motion.button
                        key={industry.name}
                        onClick={() => setSelectedIndustry(industry)}
                        className={`absolute p-2 rounded-full transition-all duration-300 transform flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24
                                    ${selectedIndustry.name === industry.name ? `${industry.bgColor} ${industry.color} ring-2 ring-primary shadow-2xl scale-110` : 'x-card hover:bg-card/90'}`}
                        style={{ top: industry.mapPosition.top, left: industry.mapPosition.left }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        title={industry.name}
                    >
                        <div className={selectedIndustry.name === industry.name ? industry.color : 'text-muted-foreground group-hover:text-primary'}>
                            {React.cloneElement(industry.icon, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                        </div>
                         <span className={`mt-1 text-[10px] md:text-xs font-medium ${selectedIndustry.name === industry.name ? industry.color : 'text-muted-foreground group-hover:text-primary'}`}>
                            {industry.name}
                        </span>
                    </motion.button>
                ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 "
            key={selectedIndustry.name} 
            variants={sectionVariants} initial="hidden" animate="visible" transition={{delay:0.4}}
          >
            <div className={`x-card p-8 md:p-12 rounded-[calc(var(--radius)-1px)] ${selectedIndustry.bgColor}`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${selectedIndustry.bgColor} ring-1 ring-inset ${selectedIndustry.color.replace('text-', 'ring-')}`}>
                  {React.cloneElement(selectedIndustry.icon, { className: `w-10 h-10 ${selectedIndustry.color}`})}
                </div>
                <h2 className={`text-3xl font-bold ${selectedIndustry.color}`}>{selectedIndustry.name}</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{selectedIndustry.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedIndustry.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Outcomes:</h4>
                <p className="text-primary font-medium italic">{selectedIndustry.stats}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Compliance & Security:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.badges.map(badge => (
                    <span key={badge} className={`text-xs font-medium px-3 py-1 rounded-full ${selectedIndustry.bgColor} ring-1 ring-inset ${selectedIndustry.color.replace('text-','ring-')} ${selectedIndustry.color}`}>
                      <ShieldCheck className="inline w-3 h-3 mr-1" />{badge}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button asChild className={`group ${selectedIndustry.color.replace('text-','bg-').replace('-400','-500')} hover:${selectedIndustry.color.replace('text-','bg-').replace('-400','-600')} text-background font-semibold`}>
                <Link to={`/contact?industry=${selectedIndustry.name.toLowerCase().replace(' ','-')}`}>
                  Discuss Your {selectedIndustry.name} Needs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;