import React from 'react';
import { Bot } from 'lucide-react';

const NoRobotsFound = () => {
  return (
    <div className="text-center py-12">
      <Bot className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-xl font-medium mb-2">No robots found</h3>
      <p className="text-muted-foreground">
        Try adjusting your search or filter criteria.
      </p>
    </div>
  );
};

export default NoRobotsFound;