import React from 'react';
import { Download, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/hdsarvaiya', ariaLabel: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/harshvardhansinh-sarvaiya-/', ariaLabel: 'LinkedIn' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/hd_sarvaiya', ariaLabel: 'Instagram' },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@harshvardhansinh.dev', ariaLabel: 'Email' },
];

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elementId = href.replace('#', '');
    scrollToElement(elementId);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold">
              <span className="font-young-serif">Harshvardhansinh</span>
              <span className="text-[#aaff00]">.dev</span>
            </a>
            <p className="mt-2 text-gray-400">Software Developer & Tech Enthusiast</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 justify-start">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0 items-center md:items-end">
            <p className="text-gray-400 mb-2">Download my resume</p>
            <a 
              href="./attached_assests/New Resume.pdf" 
              download
              className="px-6 py-2 bg-[#aaff00] text-black rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
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
