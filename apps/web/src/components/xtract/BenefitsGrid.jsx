import React from 'react';
import { Gauge, HeartHandshake, Clock3, Wallet, LineChart, Rocket } from 'lucide-react';
import SectionHeader from '@/components/layout/SectionHeader';

const benefits = [
  { icon: Gauge, title: 'Increased productivity', body: 'Energize workflows and remove inefficiencies so teams ship faster.' },
  { icon: HeartHandshake, title: 'Better customer experience', body: 'Voice and chat agents improve response times, engagement, and satisfaction.' },
  { icon: Clock3, title: '24/7 availability', body: 'AI-powered systems operate around the clock — clinics, tenants, and stores never go quiet.' },
  { icon: Wallet, title: 'Cost reduction', body: 'Automation cuts manual work and overhead, like FinFlow’s hours saved each week.' },
  { icon: LineChart, title: 'Data-driven insights', body: 'Purify data for better decisions — KYC, forecasting, and inventory that stay honest.' },
  { icon: Rocket, title: 'Scalability & growth', body: 'Aioxify adapts as you grow across industries without adding headcount at the same rate.' },
];

const BenefitsGrid = () => (
  <section id="benefits" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <SectionHeader
        kicker="Benefits"
        title="The key benefits of AI for your business growth"
        subtitle="Discover how AI automation enhances efficiency, reduces costs, and drives growth with smarter, faster processes."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((item) => (
          <div key={item.title} className="x-card p-6">
            <item.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsGrid;
