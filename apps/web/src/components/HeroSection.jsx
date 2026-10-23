import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BookCallDialog from '@/components/layout/BookCallDialog';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center pt-10 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="x-kicker">New</span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Intelligent Automation for Modern Businesses.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aioxify brings AI automation to your fingertips & streamline tasks.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <BookCallDialog triggerLabel="Get in touch" size="lg" className="px-8 bg-white text-black hover:bg-white/90" />
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent hover:bg-white/10">
              <a href="#services">View services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
