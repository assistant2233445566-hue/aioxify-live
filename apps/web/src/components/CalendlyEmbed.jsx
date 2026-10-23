import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up Calendly popup if it exists
      const calendlyPopup = document.querySelector('.calendly-popup-content');
      if (calendlyPopup) calendlyPopup.parentElement.remove();
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full min-h-[680px] rounded-md overflow-hidden border border-border/30"
      data-url="https://calendly.com/YOUR_USERNAME/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0d1a2e&text_color=f8fafc&primary_color=3beb84"
      style={{ minWidth: '320px', height: '680px' }}
    >
      <p className="text-center text-muted-foreground p-8">Loading booking calendar... If it doesn't appear, please ensure JavaScript is enabled or <a href="https://calendly.com/YOUR_USERNAME/30min" target="_blank" rel="noopener noreferrer" className="text-primary underline">book directly on Calendly</a>.</p>
    </div>
  );
};

export default CalendlyEmbed;