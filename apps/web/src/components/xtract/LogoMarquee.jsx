import React from 'react';

const names = [
  'PUZZLE X',
  'MATTER',
  'Longevity Labs',
  'Soluorient',
  'GroundScapes',
  'The Good Life Bars',
  'SopnoTec',
  'Aioxify',
];

const LogoMarquee = () => {
  const row = [...names, ...names];
  return (
    <section className="py-8 overflow-hidden relative z-10">
      <p className="text-center text-sm text-muted-foreground mb-6">Over 50+ business trust us</p>
      <div className="relative">
        <div className="flex w-[200%] animate-marquee gap-10">
          {row.map((name, i) => (
            <span key={`${name}-${i}`} className="text-lg md:text-2xl font-display font-semibold whitespace-nowrap text-white/55">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
