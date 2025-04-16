import React from 'react';
import { Download } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elementId = href.replace('#', '');
    scrollToElement(elementId);
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold">
              <span className="font-young-serif">Harshvardhansinh</span>
              <span className="text-accent">.dev</span>
            </a>
            <p className="mt-2 text-gray-400">Software Developer & Tech Enthusiast</p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0 items-center md:items-end">
            <p className="text-gray-400 mb-2">Download my resume</p>
            <a 
              href="#" 
              className="px-6 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Resume
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Harshvardhansinh Sarvaiya. All rights reserved.</p>
          <div className="flex flex-wrap space-x-3 md:space-x-6 justify-center">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
