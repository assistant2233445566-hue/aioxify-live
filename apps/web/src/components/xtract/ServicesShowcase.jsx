import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/layout/SectionHeader';
import { TaskBoardMock, AssistantMock, OutreachMock, ScheduleMock } from '@/components/xtract/ProductMocks';

const services = [
  {
    kicker: 'AI Automation',
    title: 'Automate repetitive tasks',
    body: 'Connect apps and streamline internal operations — data entry, reporting, KYC, and approval chains — so your team spends time on work that actually needs a human.',
    tags: ['Internal task bots', '100+ automations'],
    href: '/ai-automation',
    mock: TaskBoardMock,
  },
  {
    kicker: 'AI Chatbots',
    title: 'Delegate daily tasks',
    body: 'From clinic intake to tenant chat and sales support, Aioxify assistants work around the clock — summaries, scheduling, and conversations that write back to your systems.',
    tags: ['Summaries', 'Scheduling', '24/7 agents'],
    href: '/ai-chatbots',
    mock: AssistantMock,
  },
  {
    kicker: 'Sales & growth',
    title: 'Accelerate sales growth',
    body: 'Lead generation, personalized outreach, cart recovery, and content that scales. Supercharge apps with GPT-4 and NLP so your storefront sells even when you sleep.',
    tags: ['Leads', 'Content', 'Social post'],
    href: '/platform',
    mock: OutreachMock,
  },
  {
    kicker: 'Custom projects',
    title: 'Build smarter systems',
    body: 'Whether you start from scratch or enhance what you have, we consult and ship custom AI for healthcare, FinTech, property, manufacturing, and e-commerce.',
    tags: ['Strategy', 'Custom AI', 'Consulting'],
    href: '/solutions',
    mock: ScheduleMock,
  },
];

const ServicesShowcase = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="Our Services"
          title="AI solutions that take your business to the next level"
          subtitle="We design, develop, and implement automation tools that help you work smarter, not harder."
        />
        <div className="space-y-16">
          {services.map((service, index) => {
            const Mock = service.mock;
            const reverse = index % 2 === 1;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div>
                  <p className="text-primary font-semibold mb-2">{service.kicker}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.body}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs">{tag}</span>
                    ))}
                  </div>
                  <Link to={service.href} className="text-sm font-semibold text-primary hover:underline">
                    Explore this service →
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Mock />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
