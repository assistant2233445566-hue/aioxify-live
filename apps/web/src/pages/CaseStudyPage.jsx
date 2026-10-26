import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clientStories } from '@/data/clientStories';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const story = clientStories.find((item) => item.slug === slug);

  if (!story) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold mb-4">Case study not found</h1>
        <Button asChild>
          <Link to="/client-stories">Back to client stories</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/client-stories" className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> All case studies
        </Link>
        <p className="text-xs uppercase tracking-[0.22em] text-violet-300 mb-3">{story.industry}</p>
        <div className="flex items-center gap-4 mb-6">
          {story.photo && (
            <img src={story.photo} alt={story.person} className="h-20 w-20 rounded-2xl object-cover border border-white/15" />
          )}
          <div>
            <h1 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight mb-2">{story.companyName}</h1>
            <p className="text-white/50">{story.person}</p>
            {story.role && <p className="text-sm text-white/40">{story.role}</p>}
          </div>
        </div>
        {story.website && (
          <a href={story.website} target="_blank" rel="noreferrer" className="text-sm text-violet-300 hover:text-white mb-10 inline-block">
            {story.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </a>
        )}

        <blockquote className="text-2xl font-extrabold tracking-tight leading-snug mb-12">
          “{story.quote}”
        </blockquote>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {story.results.map((result) => (
            <div key={result} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
              {result}
            </div>
          ))}
        </div>

        <section className="space-y-8 text-white/60 leading-relaxed">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-3">The challenge</h2>
            <p>{story.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-3">What Sopnotec deployed</h2>
            <p>{story.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-3">The outcome</h2>
            <p>{story.outcome}</p>
          </div>
        </section>

        <Button asChild size="lg" className="mt-12 bg-white text-black hover:bg-white/90">
          <Link to="/contact">
            Start a similar project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyPage;
