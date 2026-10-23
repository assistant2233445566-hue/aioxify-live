import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Landmark, Building2, Factory, ShoppingCart, ArrowRight, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const industries = [
  {
    name: 'Healthcare',
    Icon: Stethoscope,
    headline: 'Voice agents that take the front desk off your clinicians.',
    description: 'HIPAA-compliant AI voice agents answer calls, book and reschedule appointments, run symptom triage, send follow-ups, and update medical records — so care teams spend time with patients, not phone trees.',
    highlights: ['AI voice agents', 'Symptom triage', 'Appointment scheduling', 'Medical record automation', 'HIPAA compliant'],
    color: 'text-red-400',
    glow: 'rgba(248, 113, 113, 0.45)',
    accent: 'from-background via-red-500/10 to-black',
  },
  {
    name: 'FinTech',
    Icon: Landmark,
    headline: 'Onboard faster with AI-powered KYC and fraud control.',
    description: 'Aioxify automates AI-powered KYC and identity checks, flags suspicious activity in real time, keeps QuickBooks Online bookkeeping current, and guides loan decisions — without slowing down compliant onboarding.',
    highlights: ['AI-powered KYC', 'Fraud detection', 'QBO bookkeeping', 'Loan advisory', 'PCI-ready workflows'],
    color: 'text-blue-400',
    glow: 'rgba(96, 165, 250, 0.45)',
    accent: 'from-background via-blue-500/10 to-black',
  },
  {
    name: 'Property Management',
    Icon: Building2,
    headline: 'A 24/7 digital concierge for every property you run.',
    description: 'Voice and chat agents handle tenant questions, log work orders, schedule repairs, chase rent reminders, and keep lease files organized — so property managers stay on top of every building without growing the night shift.',
    highlights: ['Tenant voice & chat', 'Repair scheduling', 'Lease management', 'Rent follow-ups', 'Vendor coordination'],
    color: 'text-sky-400',
    glow: 'rgba(56, 189, 248, 0.4)',
    accent: 'from-background via-sky-500/10 to-black',
  },
  {
    name: 'Manufacturing',
    Icon: Factory,
    headline: 'Keep the line breathing with predictive, connected AI.',
    description: 'Sensors and shop-floor data feed models that predict machine failure, catch quality defects early, and balance supply chain inventory — so plants ship on time instead of fighting surprise downtime.',
    highlights: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Downtime alerts', 'Production insights'],
    color: 'text-emerald-400',
    glow: 'rgba(52, 211, 153, 0.35)',
    accent: 'from-background via-emerald-500/10 to-black',
  },
  {
    name: 'E-commerce',
    Icon: ShoppingCart,
    headline: 'Storefronts that sell, support, and restock themselves.',
    description: 'Personalized recommendation engines, AI shopping assistants, and inventory bots recover abandoned carts, answer product questions instantly, and keep stock aligned with demand across channels.',
    highlights: ['Product recommendations', 'AI shopping assistants', 'Inventory bots', 'Cart recovery', 'Omnichannel support'],
    color: 'text-purple-400',
    glow: 'rgba(192, 132, 252, 0.45)',
    accent: 'from-background via-purple-500/10 to-black',
  },
];

const IndustrySpotlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = industries[activeIndex];
  const ActiveIcon = active.Icon;

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [paused, activeIndex]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,hsl(var(--secondary)/0.12),transparent_42%),radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.1),transparent_38%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Solutions Tailored for <span className="text-gradient-oxygen glow-secondary">Your Industry</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aioxify breathes specialized AI intelligence into diverse sectors, understanding the unique "atmospheric pressure" of each.
          </p>
        </div>

        <div
          className=""
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="x-card rounded-[calc(var(--radius)-1px)] overflow-hidden">
            <div className={`relative grid lg:grid-cols-[0.9fr_1.5fr] min-h-[480px] bg-gradient-to-br ${active.accent}`}>
              <div
                className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-50"
                style={{ background: active.glow }}
              />

              <div className="relative flex items-center justify-center py-12 px-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, scale: 0.82, rotateY: 18 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -18 }}
                    transition={{ duration: 0.45 }}
                    className="relative h-56 w-56 md:h-64 md:w-64"
                    style={{ perspective: '900px' }}
                  >
                    <motion.span
                      className={`absolute inset-0 rounded-full border ${active.color}`}
                      style={{ opacity: 0.25 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.span
                      className={`absolute inset-6 rounded-full border border-dashed ${active.color}`}
                      style={{ opacity: 0.4 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.span
                      className="absolute inset-14 rounded-full"
                      style={{ boxShadow: `0 0 48px ${active.glow}` }}
                      animate={{ scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className={`absolute inset-[4.5rem] rounded-full x-card flex items-center justify-center ${active.color}`}>
                      <ActiveIcon className="w-14 h-14 md:w-16 md:h-16" />
                    </div>
                    <Wind className={`absolute -top-1 right-8 h-5 w-5 ${active.color} animate-breath`} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative flex flex-col justify-center px-6 pb-10 lg:px-12 lg:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className={`text-xs uppercase tracking-[0.28em] mb-3 ${active.color}`}>Industry atmosphere</p>
                    <h3 className={`text-3xl md:text-5xl font-bold mb-3 ${active.color}`}>{active.name}</h3>
                    <p className="text-foreground text-lg md:text-xl font-medium mb-4 max-w-xl">
                      {active.headline}
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                      {active.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6 max-w-xl">
                      {active.highlights.map((item) => (
                        <span
                          key={item}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full bg-black/30 ring-1 ring-inset ${active.color} ring-current/30`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Link to="/industries">
                        Explore industries
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 h-1 w-full max-w-md rounded-full bg-muted overflow-hidden">
                  <motion.div
                    key={`${active.name}-bar`}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? undefined : '100%' }}
                    transition={{ duration: paused ? 0 : 8, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 md:p-5 border-t border-border">
              {industries.map((industry, index) => {
                const Icon = industry.Icon;
                const selected = index === activeIndex;
                return (
                  <motion.button
                    key={industry.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-xl px-3 py-4 text-left transition-all duration-300 ${
                      selected
                        ? 'bg-white/10 shadow-[0_0_24px_rgba(0,0,0,0.25)]'
                        : 'hover:bg-white/5'
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${industry.color}`}
                        style={selected ? { boxShadow: `0 0 18px ${industry.glow}` } : undefined}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`text-sm font-semibold ${selected ? industry.color : 'text-muted-foreground'}`}>
                        {industry.name}
                      </span>
                    </div>
                    {selected && (
                      <motion.span
                        layoutId="industry-underline"
                        className="mt-3 block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySpotlight;
