import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotDemo = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Aio, your Aioxify demo assistant. Try asking: 'Show me pricing options' or 'How do you help support teams?'", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    
    // Simulate bot response based on input
    let botResponseText = "Thanks for your message! An Aioxify specialist will be in touch. For now, explore more on our site!";
    if (inputValue.toLowerCase().includes("pricing")) {
      botResponseText = "Our pricing is flexible and tailored to your needs! For a custom quote, please fill out our contact form or book a consultation. We have plans starting from $X/month for basic chatbot features.";
    } else if (inputValue.toLowerCase().includes("support")) {
      botResponseText = "Aioxify chatbots can handle up to 80% of common support queries, provide instant answers 24/7, and escalate complex issues to human agents seamlessly. This reduces wait times and boosts customer satisfaction!";
    } else if (inputValue.toLowerCase().includes("hello") || inputValue.toLowerCase().includes("hi")) {
       botResponseText = "Hello there! How can Aioxify 'oxygenate' your business today?";
    }

    setInputValue(''); // Clear input after processing

    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, text: botResponseText, isBot: true };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Experience Aioxify <span className="text-gradient-oxygen">Live</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Interact with our demo chatbot. Ask it about pricing, features, or how it can help your specific use case.
          </p>
        </div>
        <motion.div 
          className="max-w-xl mx-auto "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="x-card rounded-[calc(var(--radius)-1px)] overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-border/30 flex items-center bg-card/30">
              <Wind className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-medium text-lg text-foreground">Aio Demo Chat</h3>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/30">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={`max-w-[85%] rounded-lg px-4 py-2.5 shadow-md text-sm ${
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
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  <div className="bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2.5 shadow-md">
                    <motion.div 
                      className="flex space-x-1.5 items-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <span className="text-xs">Aio is typing</span>
                      <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-100"></div>
                      <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-200"></div>
                      <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-300"></div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-border/30 bg-card/30">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask our AI about pricing!"
                  className="flex-grow bg-input text-foreground rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70 text-sm"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-background flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotDemo;