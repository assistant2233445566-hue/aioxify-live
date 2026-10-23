import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookCallDialog from '@/components/layout/BookCallDialog';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/client-stories' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/aioxify-logo.svg" alt="Aioxify" className="h-7 w-7" />
          <span className="text-base font-medium">Aioxify</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? 'text-white' : 'hover:text-white'}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <BookCallDialog triggerLabel="Get In Touch" className="bg-white text-black hover:bg-white/90" />
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="py-2">
              {item.name}
            </Link>
          ))}
          <BookCallDialog triggerLabel="Get In Touch" className="w-full bg-white text-black" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
