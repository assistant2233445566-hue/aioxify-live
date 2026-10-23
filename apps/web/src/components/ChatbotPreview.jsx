import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ChatbotPreview = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Aio, your AI guide. How can I help you oxygenate your ideas today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponses = [
        "That's an interesting thought! Let's explore how AI can 'Aioxify' that.",
        "I'm processing how we can inject some AI 'oxygen' into that concept.",
        "Aioxify is all about breathing new life into ideas like yours with AI. Tell me more!",
        "Like oxygen to a flame, AI can accelerate that idea. What's your vision?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = { id: Date.now(), text: randomResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chat with <span className="text-gradient-oxygen glow-primary">Aio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our intelligent assistant. Ask Aio how to "Aioxify" your challenges or ideas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="x-card rounded-[calc(var(--radius)-1px)] overflow-hidden shadow-xl">
              <div className="p-4 border-b border-border/30 flex items-center">
                <Wind className="h-6 w-6 text-primary mr-3" />
                <h3 className="font-medium text-lg text-foreground">Aio Assistant</h3>
              </div>
              
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map(message => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg px-4 py-2 shadow-md ${
                        message.isBot 
                          ? 'bg-secondary/80 text-secondary-foreground' 
                          : 'bg-primary/80 text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 shadow-md">
                      <motion.div 
                        className="flex space-x-1 items-center"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 0.6
                        }}
                      >
                        <span className="text-sm">Aio is thinking</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-100"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-200"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-300"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="p-4 border-t border-border/30">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Aio about 'oxygenating' your ideas..."
                    className="flex-grow bg-input text-foreground rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70"
                  />
                  <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-background">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
              <Link to="/chatbot-full">
                Engage in Full Aio Conversation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;