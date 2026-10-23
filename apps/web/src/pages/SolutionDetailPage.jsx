import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { solutionsDetail } from '@/data/solutionsDetail';

const SolutionDetailPage = () => {
  const { audience } = useParams();
  const solution = solutionsDetail[audience];

  if (!solution) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Solution not found</h1>
        <Button asChild>
          <Link to="/solutions">Back to solutions</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 text-primary">
          <Link to="/solutions">
            <ArrowLeft className="mr-2 h-4 w-4" /> All solutions
          </Link>
        </Button>
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{solution.kicker}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{solution.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{solution.description}</p>
        <p className="text-muted-foreground leading-relaxed mb-10">{solution.story}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="x-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">What is included</h2>
            <ul className="space-y-2">
              {solution.details.map((detail) => (
                <li key={detail} className="flex items-start text-muted-foreground">
                  <Zap className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="x-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Where it shows up</h2>
            <ul className="space-y-2">
              {solution.uses.map((use) => (
                <li key={use} className="flex items-start text-muted-foreground">
                  <Zap className="w-4 h-4 mr-2 mt-1 text-secondary flex-shrink-0" />
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-green-400 text-background">
          <Link to="/contact">
            Talk through this solution
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SolutionDetailPage;
