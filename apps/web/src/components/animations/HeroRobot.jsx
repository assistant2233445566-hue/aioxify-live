import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Network, PieChart } from 'lucide-react';

const cards = [
  { title: 'AI Analytics', value: '+24.5%', Icon: Activity, x: '-18%', y: '8%' },
  { title: 'Automation', value: 'Live', Icon: Network, x: '72%', y: '10%' },
  { title: 'Data Insights', value: '82%', Icon: PieChart, x: '-22%', y: '58%' },
  { title: 'Performance', value: '↑ 18%', Icon: BarChart3, x: '74%', y: '62%' },
];

const HeroRobot = () => {
  return (
    <div className="relative h-[520px] w-full max-w-[560px] mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute z-20 w-40 rounded-2xl border border-primary/25 bg-[#121a22]/90 p-3 backdrop-blur-md shadow-[0_0_24px_rgba(46,229,157,0.12)]"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.45 + index * 0.12, duration: 0.4 },
            y: { duration: 3.4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="flex items-center gap-2 text-primary mb-2">
            <card.Icon className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{card.title}</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{card.value}</p>
          <div className="mt-2 h-8 overflow-hidden">
            <svg viewBox="0 0 80 24" className="w-full h-full text-primary/80">
              <motion.path
                d="M0 18 C12 18 10 6 22 8 C34 10 32 20 46 12 C58 6 62 16 80 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.8, ease: 'easeOut' }}
              />
            </svg>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-x-0 bottom-8 mx-auto h-24 w-52"
        animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.92, 1.05, 0.92] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full rounded-full bg-primary/20 blur-2xl" />
      </motion.div>
      <div className="absolute bottom-16 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full border border-primary/30" />
      <div className="absolute bottom-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full border border-primary/15" />

      <motion.div
        className="absolute left-1/2 top-[18%] z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: 40, scale: 0.86 }}
        animate={{ opacity: 1, y: [0, -14, 0], scale: 1 }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          scale: { duration: 0.6, delay: 0.25 },
          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="relative h-56 w-44">
          <span className="absolute left-[22%] top-2 h-6 w-2 rounded-full bg-slate-300" />
          <span className="absolute right-[22%] top-2 h-6 w-2 rounded-full bg-slate-300" />
          <span className="absolute left-[18%] top-0 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_#2ee59d]" />
          <span className="absolute right-[18%] top-0 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_#2ee59d]" />

          <div className="absolute left-1/2 top-8 h-36 w-36 -translate-x-1/2 rounded-[42%] bg-gradient-to-b from-slate-100 to-slate-300 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="absolute left-6 top-10 h-7 w-8 rounded-full bg-[#111827]">
              <motion.span
                className="absolute left-1.5 top-1.5 h-4 w-5 rounded-full bg-primary"
                animate={{ scaleY: [1, 0.12, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.06, 0.12], ease: 'easeInOut' }}
              />
            </div>
            <div className="absolute right-6 top-10 h-7 w-8 rounded-full bg-[#111827]">
              <motion.span
                className="absolute left-1.5 top-1.5 h-4 w-5 rounded-full bg-primary"
                animate={{ scaleY: [1, 0.12, 1] }}
                transition={{ duration: 3.6, delay: 0.08, repeat: Infinity, times: [0, 0.06, 0.12], ease: 'easeInOut' }}
              />
            </div>
            <div className="absolute bottom-8 left-1/2 h-10 w-10 -translate-x-1/2 rounded-2xl bg-primary text-primary-foreground grid place-items-center text-lg font-black shadow-[0_0_18px_rgba(46,229,157,0.55)]">
              A
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-16 w-28 -translate-x-1/2 rounded-[40%] bg-gradient-to-b from-slate-200 to-slate-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroRobot;
