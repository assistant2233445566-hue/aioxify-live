import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BookCallDialog from '@/components/layout/BookCallDialog';
import SopnotecReviews from '@/components/xtract/SopnotecReviews';

const logos = ['PUZZLE X', 'MATTER', 'Longevity Labs', 'Soluorient', 'GroundScapes', 'The Good Life Bars', 'SopnoTec', 'Aioxify'];
const tags = ['SopnoTec', 'Executive support', 'Calendly', 'Airtable', 'HubSpot', 'QuickBooks', 'Zapier', 'CRM'];
const photos = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
];

const Cta = ({ label = 'Get a Free Consultation', className = '' }) => (
  <BookCallDialog triggerLabel={label} className={`bg-white text-black hover:bg-white/90 rounded-full ${className}`} />
);

const StudioHome = () => {
  const marquee = [...logos, ...logos];
  const tagRow = [...tags, ...tags, ...tags];

  return (
    <div className="studio-page">
      <section className="relative container mx-auto px-4 pt-16 pb-20 min-h-[86vh] flex flex-col items-center justify-center text-center">
        <motion.div
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 pr-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="rounded-full bg-[#6d28d9] px-3 py-1 text-xs font-bold text-white">2025</span>
          <span className="ml-3 text-sm text-white/80">AI Oxygen for Business</span>
        </motion.div>
        <motion.p
          className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-white mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
        >
          Automate, Integrate,
        </motion.p>
        <motion.h1
          className="font-sans font-extrabold text-5xl sm:text-7xl md:text-[6.5rem] tracking-[-0.04em] leading-[0.9] text-white mb-8 max-w-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Dominate.
        </motion.h1>
        <motion.p
          className="max-w-xl text-white/50 text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.45 }}
        >
          Aioxify infuses AI into your workflows like oxygen fuels life. Voice agents, KYC, tenant ops, shop-floor AI, and no-code automation—so operations keep breathing after hours.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          <Cta label="Get a Free Consultation" />
          <Link to="/solutions" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm hover:bg-white/10">
            Explore AI Solutions <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-white/10 py-6">
        <div className="flex w-[200%] animate-marquee gap-16">
          {marquee.map((name, i) => (
            <span key={`${name}-${i}`} className="text-2xl md:text-4xl font-sans font-extrabold tracking-tight text-white/35 whitespace-nowrap">{name}</span>
          ))}
        </div>
      </div>

      <section className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">About Us</p>
          <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-6 leading-tight">AI as oxygen for real operations.</h2>
          <p className="text-white/60 mb-8 max-w-md">
            We are not a marketing shop. Aioxify builds the systems clinics, lenders, property teams, factories, and stores run on—chat, voice, KYC, QBO, and shop-floor AI.
          </p>
          <Cta />
        </div>
        <div className="relative h-[480px]">
          <div className="absolute right-8 top-4 h-40 w-40 rounded-full border-[18px] border-violet-500/80 animate-[spin_18s_linear_infinite]" />
          <div className="absolute right-16 top-12 h-24 w-24 rounded-full border-[10px] border-fuchsia-400/70 animate-[spin_12s_linear_infinite_reverse]" />
          <img src={photos[0]} alt="" className="absolute left-0 top-8 h-56 w-40 object-cover rounded-2xl rotate-[-8deg]" />
          <img src={photos[2]} alt="" className="absolute right-4 bottom-8 h-48 w-64 object-cover rounded-2xl rotate-[6deg]" />
          <img src={photos[1]} alt="" className="absolute left-24 bottom-16 h-44 w-36 object-cover rounded-2xl" />
          <img src={photos[3]} alt="" className="absolute left-8 top-48 h-32 w-28 object-cover rounded-2xl rotate-3" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">Features</p>
            <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl">Built for operators.</h2>
          </div>
          <Cta />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ['Seamless API Integrations', 'Connect EHR, QuickBooks, Shopify, Salesforce, and Slack.'],
            ['Trusted Authentication', 'HIPAA / PCI-aware delivery with project keys and rotation.'],
            ['AI-Speech Recognition', 'Voice agents for clinics, tenants, and after-hours intake.'],
            ['Predictive Analytics', 'Forecast demand, downtime, and fraud before it hits.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 min-h-[220px]">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-white/55">{body}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden mt-8 rounded-full border border-white/10 py-3">
          <div className="flex w-[200%] animate-marquee gap-8">
            {tagRow.map((t, i) => (
              <span key={`${t}-${i}`} className="text-sm text-white/50 whitespace-nowrap">• {t}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">Services</p>
            <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl leading-tight">AI that keeps the business running</h2>
          </div>
          <Cta label="Book a 15-min call" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['AI Chatbots', '24/7 Customer Support', 'Instant agents that book, triage, and write back to your systems.', '/ai-chatbots', photos[4]],
            ['AI Automation', 'Smart Workflows', 'No-code automations across marketing, accounting, and ops.', '/ai-automation', photos[2]],
            ['Predictive Analytics', 'Driven Decisions', 'KYC, fraud, inventory, and line-downtime signals in one place.', '/platform', photos[1]],
            ['Industry Systems', 'World Through AI', 'Healthcare, FinTech, property, manufacturing, e-commerce.', '/industries', photos[0]],
            ['Custom Projects', 'Smart Actions', 'Strategy, custom AI, and consulting aligned to your stack.', '/solutions', photos[5]],
            ['OpenAI Platform', 'Driven Decisions', 'GPT-4, APIs, datasets, and developer kits to ship faster.', '/platform', photos[3]],
          ].map(([kicker, title, body, href, img]) => (
            <Link key={title} to={href} className="group relative overflow-hidden rounded-[1.6rem] min-h-[280px] border border-white/10">
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <p className="text-xs uppercase tracking-widest text-white/70 mb-1">{kicker}</p>
                <h3 className="text-2xl font-sans font-extrabold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-white/70">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SopnotecReviews />

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">24/7 Support</p>
          <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-6">Here when you need us most.</h2>
          <p className="text-white/60 mb-8">Specialists who stay after go-live—tuning agents, workflows, and compliance with you.</p>
          <div className="space-y-4">
            {[['Fast responses', 'Sales and ops get answers when a queue or ticket stalls.'], ['Industry guidance', 'Benefits sales, operations, UK property, and author programmes.'], ['Continuous optimization', 'Sopnotec stays on the desk after go-live—setters, VAs, and tickets.']].map(([t, b]) => (
              <div key={t}>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-white/55">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-8 relative overflow-hidden">
          <p className="text-sm text-white/50 mb-2">Problem solved</p>
          <p className="font-sans font-extrabold tracking-tight text-4xl mb-6">Ops stay online.</p>
          <img src={photos[1]} alt="" className="h-64 w-full object-cover rounded-2xl" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-12">Our proven process for AI-driven success</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['01', 'Map the work', 'We sit with ops: after-hours calls, KYC queues, tenant tickets, line downtime.'],
            ['02', 'Build the oxygen', 'Voice agents, chatbots, and no-code automations wired into EHR, QBO, Shopify, Slack.'],
            ['03', 'Keep it breathing', 'We integrate, measure, and tune so the system stays accurate after launch.'],
          ].map(([n, t, b]) => (
            <div key={n} className="border-t border-white/20 pt-6">
              <p className="text-white/40 mb-3">{n}</p>
              <h3 className="text-2xl font-sans font-extrabold tracking-tight mb-3">{t}</h3>
              <p className="text-white/55 text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-12">Aioxify vs. The Rest</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-[1.6rem] bg-white/[0.03] border border-white/10 p-8">
            <p className="mb-6 text-white/40">The rest</p>
            {['Generic chat widgets', 'No write-back to EHR / QBO / PMS', 'Manual KYC and night phones', 'One-size marketing bots', 'Stops at launch'].map((item) => (
              <p key={item} className="flex gap-2 text-white/50 mb-3"><X className="h-4 w-4" /> {item}</p>
            ))}
          </div>
          <div className="rounded-[1.6rem] bg-white text-black p-8">
            <p className="mb-6 text-black/50">Aioxify</p>
            {['Voice + chat that file into systems', 'HIPAA / PCI-aware delivery', 'No-code ops automation', 'Industry-specific agents', 'Tuned after go-live'].map((item) => (
              <p key={item} className="flex gap-2 mb-3"><Check className="h-4 w-4" /> {item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">Our Team</p>
            <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl leading-tight">Meet the Aioxifiers making things happen</h2>
          </div>
          <Link to="/about" className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-sm">View About Aioxify</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ['Dr. Elara Vance', 'Chief AI Oxygenation Officer'],
            ['Jax Solaris', 'Head of AI Engineering'],
            ['Lyra Quill', 'Lead Metaphor Architect'],
            ['Orion Praxis', 'Innovation Catalyst'],
          ].map(([name, role], i) => (
            <div key={name} className="rounded-[1.6rem] border border-white/10 overflow-hidden">
              <img src={photos[i]} alt={name} className="h-56 w-full object-cover" />
              <div className="p-4">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-white/50">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20 max-w-3xl">
        <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-10">Frequently asked questions</h2>
        <Accordion type="single" collapsible>
          {[
            ['What do I need to get started?', 'A free consultation. We map your stack—EHR, QBO, Shopify, Salesforce—and propose the first automation.'],
            ['What kind of customization is available?', 'Chatbots, voice agents, KYC, tenant ops, custom AI projects, and OpenAI-backed workflows.'],
            ['Do I need to know how to code?', 'No. Operators use no-code automation. Developers can still use our APIs when they want to.'],
            ['What industries do you serve?', 'The same desks founders already trust us with—quantum summits, multi-venture ops, accounting SaaS, and consumer-goods launches.'],
          ].map(([q, a], i) => (
            <AccordionItem key={q} value={`f-${i}`}>
              <AccordionTrigger className="text-left text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-white/55">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent px-6 py-16 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Let’s oxygenate the work</p>
          <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl mb-6">Ready to put AI on the operations that never sleep?</h2>
          <Cta />
        </div>
      </section>
    </div>
  );
};

export default StudioHome;
