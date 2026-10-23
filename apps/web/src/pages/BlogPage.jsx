import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { blogPosts as mockPosts } from '@/data/blogPosts';
import PageHero from '@/components/layout/PageHero';

const categories = ["All", "AI Fundamentals", "Chatbots", "Automation", "AI Ethics", "Industry Insights"];
const allTags = [...new Set(mockPosts.flatMap(post => post.tags))];


const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Blog"
          title="The Aioxify Pulse"
          subtitle="Insights, trends, and stories from the forefront of the AI revolution. Breathe in the latest knowledge."
        />

        <motion.div 
          className="mb-10 md:mb-12 flex flex-col md:flex-row gap-4 items-center"
          variants={sectionVariants} initial="hidden" animate="visible"
        >
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {setSelectedCategory(category); setSelectedTag('');}}
                className="flex-shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="mb-10 flex flex-wrap gap-2 items-center" variants={sectionVariants} initial="hidden" animate="visible">
          <Tag className="w-4 h-4 text-muted-foreground mr-1" />
          <span className="text-sm text-muted-foreground mr-2">Filter by Tag:</span>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
              className={`text-xs rounded-full ${selectedTag === tag ? 'bg-secondary/80' : 'bg-card/50'}`}
            >
              {tag}
            </Button>
          ))}
           {selectedTag && <Button variant="ghost" size="sm" onClick={() => setSelectedTag('')} className="text-xs text-destructive">Clear Tag</Button>}
        </motion.div>

        {filteredPosts.length > 0 ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={sectionVariants} initial="hidden" animate="visible"
          >
            {filteredPosts.map(post => (
              <motion.div 
                key={post.id}
                className=" group flex flex-col"
                variants={itemVariants}
              >
                <div className="x-card p-1 rounded-[calc(var(--radius)-1px)] h-full flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                     <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={post.title}
                      src={post.image} />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className={`px-2 py-0.5 rounded-full text-white ${post.category === 'AI Fundamentals' ? 'bg-primary/70' : post.category === 'Chatbots' ? 'bg-secondary/70' : post.category === 'Automation' ? 'bg-green-500/70' : 'bg-blue-500/70'}`}>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="inline-block bg-muted/50 text-muted-foreground text-xs px-2 py-1 rounded-full mr-1 mb-1">#{tag}</span>
                      ))}
                    </div>
                    <Button asChild variant="link" className="mt-auto self-start p-0 text-primary group-hover:underline">
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            variants={itemVariants} initial="hidden" animate="visible"
          >
            <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria, or check back later for new content.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;