import React from 'react';
import BookCallDialog from '@/components/layout/BookCallDialog';

const CallToActionSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="x-card px-6 py-16 md:py-20 text-center bg-gradient-to-br from-primary/25 via-white/5 to-secondary/20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let AI do the work so you can scale faster</h2>
        <p className="text-muted-foreground mb-8">Book a Call Today and Start Automating</p>
        <BookCallDialog triggerLabel="Book a free call" size="lg" className="px-8" />
      </div>
    </div>
  </section>
);

export default CallToActionSection;
