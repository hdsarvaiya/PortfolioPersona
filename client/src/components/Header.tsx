import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import { scrollToElement } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    closeMenu();
    const elementId = href.replace('#', '');
    scrollToElement(elementId);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 bg-black
        ${scrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-sm' : 'bg-opacity-100'} 
        transition-all duration-300`}>
        <div className="container mx-auto px-4 md:px-8 py-4">
          <nav className="flex justify-between items-center">
            <a href="#home" className="text-xl md:text-2xl font-bold" onClick={(e) => handleNavClick(e, '#home')}>
              <span className="text-white">Harshvardhansinh</span>
              <span className="text-[#aaff00]">.dev</span>
            </a>
            
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-200 nav-link relative px-1 py-2 hover:text-[#aaff00] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
            </div>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md focus:outline-none text-white"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button 
              onClick={closeMenu} 
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl text-white hover:text-[#aaff00] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            
            <ThemeToggle size="lg" className="mt-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
