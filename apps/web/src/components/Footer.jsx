import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
      <div>
        <p className="tracking-[0.22em] uppercase text-sm mb-3">Aioxify</p>
        <p className="text-sm text-white/45 max-w-xs">Breathe AI, accelerate growth. Chatbots, automation, and industry agents for real operations.</p>
        <p className="text-sm text-white/55 mt-4">
          <a href="mailto:breathe@aioxify.com">breathe@aioxify.com</a>
          <span className="mx-2">·</span>
          <a href="tel:+16363308881">+1 636 330 8881</a>
        </p>
      </div>
      <div className="flex gap-16 text-sm text-white/60">
        <div className="flex flex-col gap-2">
          <Link to="/about">About</Link>
          <Link to="/client-stories">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/ai-chatbots">Chatbots</Link>
          <Link to="/ai-automation">Automation</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/solutions">Solutions</Link>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
      <p>© {new Date().getFullYear()} Aioxify. All rights reserved.</p>
      <p>Terms & Conditions · Privacy Policy</p>
    </div>
  </footer>
);

export default Footer;
