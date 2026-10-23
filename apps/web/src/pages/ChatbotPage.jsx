import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Trash, Download, Cpu, Zap, RefreshCw, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageHero from '@/components/layout/PageHero';
// import ParticleBackground from '@/components/ParticleBackground'; // Not needed if oxygen-flow-bg is global

const initialMessages = [
  { id: 1, text: "Welcome to the full Aio experience! I'm here to help you explore how AI can be the 'oxygen' for your projects and ideas. What's on your mind?", isBot: true }
];

const suggestedQuestions = [
  "How can AI 'Aioxify' my small business?",
  "Explain the 'AI as Oxygen' metaphor.",
  "What AI tools can help me be more productive?",
  "How does Aioxify ensure ethical AI?"
];

const ChatbotPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isThinking]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);
    
    setTimeout(() => {
      setIsThinking(false);
      setIsTyping(true);
      
      setTimeout(() => {
        const botResponses = [
          "Fascinating! Applying the 'AI as Oxygen' principle here, we could enrich your data streams, making insights more breathable and accessible.",
          "Consider AI as the catalyst that energizes your current processes. Aioxify can help identify where this 'oxygen' will have the most impact.",
          "Your idea has great potential. Let's 'Aioxify' it by exploring how machine learning could unlock new efficiencies or capabilities.",
          "I'm analyzing that through the Aioxify lens... AI could serve as the vital, unseen force that propels this concept forward, much like oxygen sustains life.",
          "Let's 'detoxify' that problem with AI. By automating the repetitive parts, we free up resources for more strategic thinking – that's the Aioxify way!"
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botMessage = { id: Date.now(), text: randomResponse, isBot: true };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500 + Math.random() * 1000);
    }, 800 + Math.random() * 500);
  };

  const handleSuggestedQuestion = (question) => {
    // Simulate typing the question into the input and sending
    let currentText = "";
    const interval = setInterval(() => {
      if (currentText.length < question.length) {
        currentText = question.substring(0, currentText.length + 1);
        setInputValue(currentText);
      } else {
        clearInterval(interval);
        // Create a new event object for handleSendMessage
        const mockEvent = { preventDefault: () => {} };
        handleSendMessage(mockEvent);
      }
    }, 50);
  };

  const clearConversation = () => {
    setMessages(initialMessages);
    toast({
      title: "Conversation Restarted",
      description: "A fresh chat with Aio has begun!",
      variant: "default",
    });
  };

  const downloadConversation = () => {
    const conversationText = messages
      .map(msg => `${msg.isBot ? 'Aio' : 'You'}: ${msg.text}`)
      .join('\n\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aioxify-aio-chat.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Chat Downloaded",
      description: "Your conversation with Aio is saved.",
    });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PageHero
          kicker="Live chat"
          title="Chat with Aio"
          subtitle="Dive deeper with Aio. Explore complex ideas, ask challenging questions, and see how Aioxify can revolutionize your approach to technology."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <motion.div 
                className="x-card flex flex-col h-[70vh] max-h-[700px] min-h-[500px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="x-card rounded-t-[calc(var(--radius)-1px)] p-4 border-b border-border/30 flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="h-7 w-7 text-primary mr-3" />
                    <h3 className="font-medium text-xl text-foreground">Aio Chat</h3>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" size="icon" onClick={clearConversation} title="Clear conversation"
                      className="text-muted-foreground hover:text-primary">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" size="icon" onClick={downloadConversation} title="Download conversation"
                      className="text-muted-foreground hover:text-primary">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="x-card flex-grow overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map(message => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`flex items-start max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                          {message.isBot && (
                            <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-1.5 mr-2 flex-shrink-0 shadow-md">
                              <Wind className="h-4 w-4 text-background" />
                            </div>
                          )}
                          
                          <div 
                            className={`rounded-xl px-4 py-2 shadow-md ${
                              message.isBot 
                                ? 'bg-card text-foreground border border-border/20' 
                                : 'bg-gradient-to-r from-primary to-green-400 text-background'
                            }`}
                          >
                            {message.text}
                          </div>
                          
                          {!message.isBot && (
                            <div className="bg-muted rounded-full p-1.5 ml-2 flex-shrink-0 shadow-md">
                              <User className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    
                    {isThinking && (
                      <motion.div
                        className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{duration:0.2}}
                      >
                        <div className="flex items-start max-w-[85%]">
                          <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-1.5 mr-2 flex-shrink-0 shadow-md">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                              <Cpu className="h-4 w-4 text-background" />
                            </motion.div>
                          </div>
                          <div className="bg-card text-foreground rounded-xl px-4 py-2 shadow-md border border-border/20">
                            <div className="flex items-center space-x-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="text-sm">Aio is processing...</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {isTyping && (
                      <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.2}}>
                        <div className="flex items-start max-w-[85%]">
                          <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-1.5 mr-2 flex-shrink-0 shadow-md">
                            <Wind className="h-4 w-4 text-background" />
                          </div>
                          <div className="bg-card text-foreground rounded-xl px-4 py-2 shadow-md border border-border/20">
                            <motion.div 
                              className="flex space-x-1"
                              initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animation-delay-100"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animation-delay-200"></div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>
                
                <div className="x-card rounded-b-[calc(var(--radius)-1px)] p-4 border-t border-border/30">
                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Infuse your query here..."
                      className="flex-grow bg-input text-foreground rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70 text-sm"
                    />
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-background px-5 py-3">
                      <Send className="h-4 w-4 mr-2" /> Send
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div 
                className=""
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="x-card rounded-[calc(var(--radius)-1px)]">
                  <div className="p-4 border-b border-border/30">
                    <h3 className="font-medium text-lg text-foreground">Oxygenate Your Thoughts</h3>
                  </div>
                  <div className="p-4 space-y-3 max-h-[calc(70vh-150px)] overflow-y-auto">
                    {suggestedQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 3, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                        className="w-full text-left x-card p-3 rounded-md cursor-pointer hover:text-primary transition-all duration-200 text-sm text-muted-foreground border border-transparent hover:border-primary/30"
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;