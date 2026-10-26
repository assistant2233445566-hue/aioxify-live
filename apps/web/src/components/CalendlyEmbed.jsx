import React, { useEffect } from 'react';
import { CALENDLY_URL } from '@/lib/contact';

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  const embedUrl = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=050505&text_color=f8fafc&primary_color=8b5cf6`;

  return (
    <div
      className="calendly-inline-widget w-full min-h-[680px] rounded-md overflow-hidden border border-border/30"
      data-url={embedUrl}
    >
      <p className="text-center text-muted-foreground p-8">
        Loading booking calendar... If it does not appear,{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          book on Calendly
        </a>
        .
      </p>
    </div>
  );
};

export default CalendlyEmbed;
