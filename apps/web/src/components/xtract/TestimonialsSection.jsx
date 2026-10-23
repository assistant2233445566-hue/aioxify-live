import React from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import { clientStories } from '@/data/clientStories';

const extras = [
  {
    quote: 'AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions.',
    person: 'Operations lead',
    company: 'E-commerce partner',
  },
];

const TestimonialsSection = () => {
  const items = [
    ...clientStories.map((s) => ({ quote: s.quote, person: s.person, company: s.companyName })),
    ...extras,
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="Testimonials"
          title="Why businesses love our AI solutions"
          subtitle="Real businesses, real results with AI automation."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.person} className="x-card p-7">
              <p className="text-lg mb-6 leading-relaxed">“{item.quote}”</p>
              <p className="font-semibold">{item.person}</p>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
