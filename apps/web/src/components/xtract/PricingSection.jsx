import React, { useState } from 'react';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/layout/SectionHeader';
import BookCallDialog from '@/components/layout/BookCallDialog';

const plans = [
  {
    name: 'Starter',
    monthly: 37,
    blurb: 'Perfect for small businesses starting with AI automation.',
    items: ['Basic workflow automation', 'AI-powered personal assistant', 'Standard analytics & reporting', 'Email & chat support', 'Up to 3 AI integrations'],
  },
  {
    name: 'Professional',
    monthly: 75,
    featured: true,
    blurb: 'Perfect for growing teams ready to scale AI across sales and ops.',
    items: ['Advanced workflow automation', 'AI-driven sales & marketing tools', 'Enhanced data analytics & insights', 'Priority customer support', 'Up to 10 AI integrations'],
  },
  {
    name: 'Enterprise',
    monthly: null,
    blurb: 'Fully customizable AI automation for larger organizations.',
    items: ['Fully customizable AI automation', 'Dedicated AI business consultant', 'Enterprise-grade compliance', '24/7 VIP support', 'Unlimited AI integrations'],
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="Pricing"
          title="The best AI automation, at the right price"
          subtitle="Choose a plan that fits your business needs and start automating with AI"
        />
        <div className="flex justify-center mb-10">
          <div className="rounded-full bg-white/10 p-1 flex">
            <button type="button" onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm ${!annual ? 'bg-primary text-primary-foreground' : ''}`}>Monthly</button>
            <button type="button" onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm ${annual ? 'bg-primary text-primary-foreground' : ''}`}>Annually</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div key={plan.name} className={`x-card p-7 ${plan.featured ? 'ring-2 ring-primary' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {plan.featured && <span className="text-xs rounded-full bg-primary text-primary-foreground px-2 py-0.5">Popular</span>}
              </div>
              <p className="text-3xl font-display font-bold mb-2">
                {plan.monthly
                  ? `$${annual ? Math.round(plan.monthly * 0.8) : plan.monthly}/month`
                  : 'Custom'}
              </p>
              <p className="text-sm text-muted-foreground mb-6">{plan.blurb}</p>
              <BookCallDialog triggerLabel={plan.name === 'Enterprise' ? 'Schedule a call' : 'Choose this plan'} className="w-full mb-6" />
              <p className="text-sm font-semibold mb-3">What’s included</p>
              <ul className="space-y-2">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
