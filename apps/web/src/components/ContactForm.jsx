import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = ({ initialService = '', minimal = false }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form Data Submitted:", formData);
    toast({
      title: "Message Sent! Whoosh!",
      description: "Thanks for reaching out. We'll be in touch shortly to discuss how Aioxify can help.",
      variant: "default",
      className: "bg-primary/10 border-primary text-primary"
    });
    
    setFormData({ name: '', email: '', company: '', service: initialService, message: '' });
    setIsSubmitting(false);
    
    // Play whoosh sound (conceptual)
    // const audio = new Audio('/sounds/whoosh.mp3'); // Make sure you have this file
    // audio.play();
  };

  const servicesOptions = [
    { value: "", label: "Select a service interest..." },
    { value: "ai-chatbots", label: "AI Chatbots" },
    { value: "ai-automation", label: "AI Automation" },
    { value: "openai-integration", label: "OpenAI Integration" },
    { value: "healthcare-ai", label: "AI for Healthcare" },
    { value: "fintech-ai", label: "AI for FinTech" },
    { value: "property-ai", label: "AI for Property Management" },
    { value: "general-consultation", label: "General Consultation" }
  ];

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
               className="w-full px-4 py-2.5 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/60 text-sm" 
               placeholder="e.g., Ada Lovelace" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
               className="w-full px-4 py-2.5 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/60 text-sm"
               placeholder="e.g., ada@example.com" />
      </div>
      {!minimal && (
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-1">Company (Optional)</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange}
                className="w-full px-4 py-2.5 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/60 text-sm"
                placeholder="e.g., Babbage Analytical Engines Inc." />
        </div>
      )}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-1">I'm interested in...</label>
        <select name="service" id="service" required value={formData.service} onChange={handleChange}
                className="w-full px-4 py-2.5 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm appearance-none">
          {servicesOptions.map(opt => <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Your Message</label>
        <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/60 text-sm resize-none"
                  placeholder="Tell us about your project or how AI can 'oxygenate' your business..."></textarea>
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-background font-semibold shadow-md hover:shadow-primary/30 transition-all duration-300 group py-3 text-base">
          {isSubmitting ? (
            <motion.div className="flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span className="w-2 h-2 bg-current rounded-full mx-0.5 animate-pulse delay-0"></span>
              <span className="w-2 h-2 bg-current rounded-full mx-0.5 animate-pulse delay-100"></span>
              <span className="w-2 h-2 bg-current rounded-full mx-0.5 animate-pulse delay-200"></span>
            </motion.div>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4 group-hover:animate-[whoosh_0.5s_ease-in-out]" />
            </>
          )}
        </Button>
      </div>
      <style jsx>{`
        @keyframes whoosh {
          0% { transform: translateX(0) rotate(0deg); opacity: 1;}
          50% { transform: translateX(10px) rotate(45deg); opacity: 0.5;}
          100% { transform: translateX(0px) rotate(0deg); opacity: 1;}
        }
      `}</style>
    </motion.form>
  );
};

export default ContactForm;