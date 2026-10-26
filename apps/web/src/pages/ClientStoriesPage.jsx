import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { clientStories as stories } from '@/data/clientStories';
import PageHero from '@/components/layout/PageHero';

const ClientStoriesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Case studies"
          title="What founders & CEOs say"
          subtitle="The same SopnoTec reviews from our site — PUZZLE X, Longevity Labs, Soluorient, and GroundScapes."
        />

        <motion.div 
          className="space-y-12 md:space-y-16"
          variants={sectionVariants} initial="hidden" animate="visible"
        >
          {stories.map((story, index) => (
            <motion.div 
              key={story.id}
              className=" group"
              variants={itemVariants}
            >
              <div className={`x-card p-1 rounded-[calc(var(--radius)-1px)] shadow-xl hover:shadow-primary/20 transition-shadow duration-300 ${index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5'}`}>
                <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex flex-col items-center">
                     <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                       <img
                        className="w-full h-full object-cover"
                        alt={story.videoPlaceholder}
                        src={story.photo} />
                     </div>
                     <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary mb-2">
                       <img
                        className="w-full h-full object-cover"
                        alt={`Portrait of ${story.person}`}
                        src={story.photo} />
                     </div>
                     <p className="text-sm font-semibold text-foreground">{story.person}</p>
                     <p className="text-xs text-muted-foreground">{story.companyName} - {story.industry}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <MessageCircle className="w-10 h-10 text-primary mb-3 opacity-70" />
                    <blockquote className="text-lg md:text-xl italic text-foreground mb-4 border-l-4 border-primary pl-4">
                      "{story.quote}"
                    </blockquote>
                    <h4 className="text-md font-semibold text-muted-foreground mb-2">Key Results Achieved:</h4>
                    <ul className="space-y-1 mb-6">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                      <Link to={`/client-stories/${story.slug}`}>Read full case study</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

         <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stories.length * 0.2 + 0.5, duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-4">Ready to write your own success story with Aioxify?</p>
          <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-background font-semibold shadow-lg hover:shadow-primary/40">
            <Link to="/contact">
              Share Your Challenge With Us
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default ClientStoriesPage;