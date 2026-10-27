import React from 'react';
import { CALENDLY_URL } from '@/lib/contact';

const CalendlyEmbed = () => {
  const embedUrl = `${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&background_color=050505&text_color=f8fafc&primary_color=8b5cf6`;

  return (
    <div className="w-full">
      <iframe
        title="Book a 30 minute meeting"
        src={embedUrl}
        className="w-full rounded-md border border-border/30 bg-[#050505]"
        style={{ minWidth: '320px', height: '1200px', overflow: 'hidden' }}
        loading="lazy"
      />
      <p className="text-center text-sm text-muted-foreground mt-3">
        Calendar not loading?{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          Open Calendly
        </a>
      </p>
    </div>
  );
};

export default CalendlyEmbed;
