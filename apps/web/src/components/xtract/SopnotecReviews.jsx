import React from 'react';
import { testimonials } from '@/data/testimonials';

const Stars = () => (
  <p className="text-amber-400 tracking-[0.22em] text-sm mb-4" aria-label="5 stars">
    ★★★★★
  </p>
);

const SopnotecReviews = () => (
  <section id="testimonials" className="container mx-auto px-4 py-20 md:py-28">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">Client Testimonials</p>
      <h2 className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl leading-tight">
        What founders & CEOs <span className="text-violet-300">say about us.</span>
      </h2>
      <p className="text-white/50 mt-5">
        Visionary CEOs trust Aioxify to streamline their workflows — here’s what they say.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-5 mb-20">
      {testimonials.map((item) => (
        <article key={item.id} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 md:p-9 relative">
          <div className="absolute -top-4 left-7 h-12 w-12 rounded-2xl bg-violet-600 grid place-items-center text-2xl font-black">
            “
          </div>
          <Stars />
          <blockquote className="text-base md:text-lg leading-relaxed text-white/85 mb-8">{item.quote}</blockquote>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <img src={item.photo} alt={item.person} className="h-14 w-14 rounded-full object-cover border border-white/15" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{item.person}</p>
              <p className="text-sm text-white/45">{item.role}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-violet-300 leading-none">{item.stat}</p>
              <p className="text-[11px] uppercase tracking-widest text-white/45 mt-1">{item.statLabel}</p>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="text-center max-w-3xl mx-auto mb-10">
      <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">Client Reviews</p>
      <h3 className="font-sans font-extrabold tracking-tight text-3xl md:text-5xl">
        Reviews about <span className="text-violet-300">our work.</span>
      </h3>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      {testimonials.map((item) => (
        <article key={`${item.id}-tile`} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={item.photo} alt="" className="h-12 w-12 rounded-full object-cover border border-white/15" />
            <div>
              <p className="font-semibold leading-tight">{item.person}</p>
              <Stars />
            </div>
          </div>
          <p className="text-white/75 leading-relaxed mb-4">“{item.shortQuote}”</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55">
                {chip}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/40 leading-relaxed">{item.bio}</p>
        </article>
      ))}
    </div>
  </section>
);

export default SopnotecReviews;
