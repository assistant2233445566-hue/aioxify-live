import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RobotFilters = ({ searchTerm, onSearchChange, categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Search robots..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-2 bg-secondary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="text-muted-foreground h-5 w-5 flex-shrink-0" />
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="flex-shrink-0"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RobotFilters;