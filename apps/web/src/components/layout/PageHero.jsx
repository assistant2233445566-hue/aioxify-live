import React from 'react';

const PageHero = ({ kicker, title, subtitle }) => (
  <div className="mb-14 text-center md:text-left">
    {kicker && <p className="text-xs tracking-[0.22em] uppercase text-white/45 mb-4">{kicker}</p>}
    <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-tight mb-5">{title}</h1>
    {subtitle && <p className="text-lg text-white/55 max-w-2xl md:mx-0 mx-auto">{subtitle}</p>}
  </div>
);

export default PageHero;
