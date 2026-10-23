import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => (
  <div className="py-28 container mx-auto px-4 text-center">
    <p className="x-kicker mb-4">404</p>
    <h1 className="text-5xl md:text-7xl font-bold mb-4">This page has no air yet</h1>
    <p className="text-muted-foreground mb-8">The route you opened is not in the Aioxify map.</p>
    <Button asChild size="lg"><Link to="/">Return home</Link></Button>
  </div>
);

export default NotFoundPage;
