import React from 'react';

const SectionHeader = ({ kicker, title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'left' ? 'text-left' : 'text-center max-w-3xl mx-auto'}`}>
      {kicker && (
        <div className={align === 'center' ? 'flex justify-center mb-4' : 'mb-4'}>
          <p className="x-kicker">{kicker}</p>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
