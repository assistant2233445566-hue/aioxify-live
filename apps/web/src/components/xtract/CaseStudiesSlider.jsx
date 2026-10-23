import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/layout/SectionHeader';
import { clientStories } from '@/data/clientStories';

const CaseStudiesSlider = () => (
  <section id="cases" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <SectionHeader
        kicker="Case Studies"
        title="See how smart AI automation transforms businesses"
        subtitle="See how AI automation streamlines operations, boosts teams, and drives growth."
      />
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Drag to explore</p>
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
        {clientStories.map((story) => (
          <Link
            key={story.slug}
            to={`/client-stories/${story.slug}`}
            className="x-card min-w-[85%] md:min-w-[420px] snap-start p-6 md:p-8 hover:bg-white/10 transition-colors"
          >
            <p className="text-xs text-primary mb-3">{story.industry}</p>
            <h3 className="text-2xl font-bold mb-3 leading-snug">“{story.quote}”</h3>
            <p className="text-sm text-muted-foreground mb-5">{story.outcome}</p>
            <p className="text-sm font-semibold mb-3">Impact</p>
            <div className="grid grid-cols-2 gap-2">
              {story.results.map((result) => (
                <span key={result} className="rounded-xl bg-white/10 px-3 py-2 text-xs">{result}</span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{story.companyName} · {story.person}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSlider;
