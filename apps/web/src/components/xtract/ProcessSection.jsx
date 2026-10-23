import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/layout/SectionHeader';

const steps = [
  {
    step: 'Step 1',
    title: 'Smart analyzing',
    body: 'We assess your needs and identify AI solutions to streamline workflows — voice agents, KYC, tenant ops, or shop-floor signals.',
    panel: (
      <div className="x-panel p-4 text-sm space-y-2">
        <p className="font-semibold">Analyzing current workflow…</p>
        {['System check', 'Process check', 'Speed check', 'Manual work', 'Repetitive task'].map((item) => (
          <div key={item} className="rounded-xl bg-white px-3 py-2">{item}</div>
        ))}
      </div>
    ),
  },
  {
    step: 'Step 2',
    title: 'AI development',
    body: 'Our team builds intelligent automation systems tailored to your processes — chatbots, QBO bots, and custom agents.',
    panel: (
      <div className="x-panel p-4 font-mono text-[11px] leading-5 overflow-hidden">
        <p>class AutomationTrigger:</p>
        <p className="pl-4">def __init__(self, threshold):</p>
        <p className="pl-8">self.status = "inactive"</p>
        <p className="pl-4">def check_trigger(self, value):</p>
        <p className="pl-8">return "Automation triggered!"</p>
      </div>
    ),
  },
  {
    step: 'Step 3',
    title: 'Seamless integration',
    body: 'We integrate into your stack with minimal disruption — EHR, QuickBooks, Shopify, Salesforce, Slack, and vendor APIs.',
    panel: (
      <div className="x-panel p-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-white p-3 font-semibold">Our solution</div>
        <div className="rounded-xl bg-white p-3 font-semibold">Your stack</div>
        <div className="col-span-2 rounded-xl bg-emerald-100 p-3 text-emerald-800">Connected · HIPAA / PCI aware</div>
      </div>
    ),
  },
  {
    step: 'Step 4',
    title: 'Continuous optimization',
    body: 'We refine performance, analyze insights, and keep automation growing with your business.',
    panel: (
      <div className="x-panel p-4 space-y-2 text-sm">
        <div className="rounded-xl bg-white p-3">Chatbot system · +20% efficiency</div>
        <div className="rounded-xl bg-white p-3">Workflow system · update available</div>
        <div className="rounded-xl bg-white p-3">Sales system · up to date</div>
      </div>
    ),
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <SectionHeader
        kicker="Our Process"
        title="Our simple, smart, and scalable process"
        subtitle="We design, develop, and implement automation tools that help you work smarter, not harder."
      />
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="x-card p-6 md:p-8"
          >
            <p className="text-primary text-sm font-semibold mb-2">{item.step}</p>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground mb-6">{item.body}</p>
            {item.panel}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
