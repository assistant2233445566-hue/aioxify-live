import React from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How can AI automation help my business?',
    a: 'Aioxify infuses AI into workflows like oxygen fuels life — chatbots for support and intake, automation across apps, KYC and QBO, tenant concierge, and predictive maintenance.',
  },
  {
    q: 'Is AI automation difficult to integrate?',
    a: 'No. We connect to the stack you already use (EHR, QuickBooks, Shopify, Salesforce, Slack) with minimal disruption, then optimize over time.',
  },
  {
    q: 'What industries can benefit from AI automation?',
    a: 'Healthcare, FinTech, property management, manufacturing, and e-commerce are our core atmospheres — plus individuals, businesses, and developers.',
  },
  {
    q: 'Do I need technical knowledge to use AI automation?',
    a: 'No-code automation is built for operators. Developers can still use our APIs, models, and datasets when they want deeper control.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Free consultation, implementation support, and ongoing optimization. Enterprise plans include a dedicated specialist and 24/7 VIP coverage.',
  },
];

const FaqSection = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <SectionHeader
        kicker="FAQs"
        title="We’ve got the answers you’re looking for"
        subtitle="Quick answers to your AI automation questions."
      />
      <Accordion type="single" collapsible className="x-card px-6">
        {faqs.map((item, index) => (
          <AccordionItem key={item.q} value={`item-${index}`}>
            <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
