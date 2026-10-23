import React from 'react';
import { Target, Eye, Lightbulb } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import CallToActionSection from '@/components/CallToActionSection';

const teamMembers = [
  { name: 'Dr. Elara Vance', role: 'Chief AI Oxygenation Officer', funFact: "Elara once trained an AI to predict coffee consumption peaks in the office with 99% accuracy." },
  { name: 'Jax Solaris', role: 'Head of AI Engineering', funFact: "Jax built a custom drone that delivers snacks via voice command, powered by a Raspberry Pi and Aioxify's API." },
  { name: 'Lyra Quill', role: 'Lead Metaphor Architect', funFact: "Lyra's AI-generated poetry once won a local competition, baffling judges who thought it was human-written." },
  { name: 'Orion Praxis', role: 'Innovation Catalyst', funFact: "Orion uses an AI personal assistant he developed to manage his schedule across five different time zones seamlessly." },
];

const coreValues = [
  { icon: Target, title: 'Our Mission', description: 'Aioxify breathes intelligence into technology, empowering individuals and businesses to thrive in a world where AI is as essential as the air we breathe.' },
  { icon: Eye, title: 'Our Vision', description: 'To create a future where AI seamlessly integrates with every aspect of life and work, acting as a ubiquitous, life-sustaining force for progress and innovation.' },
  { icon: Lightbulb, title: 'Our Philosophy', description: 'In 2025, we saw businesses gasping for efficiency. So we built Aioxify—the AI oxygen mask for the digital age. We believe AI should be universally accessible, ethically developed, and powerfully transformative.' },
];

const AboutPage = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <PageHero
        kicker="About"
        title="About Aioxify"
        subtitle='We are the architects of AI’s future, framing it as the vital "oxygen" that powers modern innovation and human potential.'
      />
      <div className="grid md:grid-cols-3 gap-5 mb-20">
        {coreValues.map((value) => (
          <div key={value.title} className="x-card p-8">
            <value.icon className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-3">{value.title}</h2>
            <p className="text-muted-foreground text-sm">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <p className="x-kicker mb-4">Team</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet the Aioxifiers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">The passionate minds dedicated to making AI as vital and accessible as oxygen.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {teamMembers.map((member) => (
          <div key={member.name} className="x-card p-5 text-center">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white/10">
              <img className="w-full h-full object-cover" alt={`Portrait of ${member.name}`} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-primary mb-2">{member.role}</p>
            <p className="text-xs text-muted-foreground">{member.funFact}</p>
          </div>
        ))}
      </div>
    </div>
    <CallToActionSection />
  </div>
);

export default AboutPage;
