import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPosts.find((item) => String(item.id) === String(postId));

  if (!post) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <Button asChild>
          <Link to="/blog">Back to the Pulse</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 text-primary">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> All articles
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mb-3">{post.date} · {post.author} · {post.category}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        <div className="aspect-video overflow-hidden rounded-xl mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
