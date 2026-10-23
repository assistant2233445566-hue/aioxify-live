import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, CalendarDays, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import PageHero from '@/components/layout/PageHero';

const ContactPage = () => {
  const location = useLocation();
  const [initialService, setInitialService] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get('service') || queryParams.get('industry');
    if (service) setInitialService(service);
  }, [location.search]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Contact"
          title="Let’s oxygenate your ideas"
          subtitle="Reach out to discuss your project, schedule a demo, or learn how Aioxify can infuse AI into your world."
        />
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="x-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Send className="w-6 h-6 text-primary" /> Send us a message</h2>
            <ContactForm initialService={initialService} />
          </div>
          <div className="space-y-6">
            <div className="x-card p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><CalendarDays className="w-6 h-6 text-primary" /> Book a meeting</h2>
              <p className="text-muted-foreground mb-4">Schedule a free consultation with our AI specialists.</p>
              <CalendlyEmbed />
            </div>
            <div className="x-card p-8">
              <h3 className="text-xl font-semibold mb-4">Direct contact</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /><a href="mailto:breathe@aioxify.com">breathe@aioxify.com</a></li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /><a href="tel:+1800AIOXIFY">+1 (800) AIO-XIFY</a></li>
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5" /><span>123 Innovation Drive, Tech City, TX 75001</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
