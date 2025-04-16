import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/use-reveal';
import { scrollToElement } from '@/lib/utils';

const Hero: React.FC = () => {
  const { ref, isActive } = useReveal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 md:py-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            className="order-2 lg:order-1 reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-young-serif leading-tight mb-6">
              Software <span className="text-accent">Developer</span> & Tech Enthusiast
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-700 dark:text-gray-300">
              I specialize in creating modern web applications with ReactJS, NodeJS, and various other technologies. Currently pursuing Computer Applications at The Maharaja Sayajirao University of Baroda.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects" 
                onClick={(e) => handleClick(e, 'projects')}
                className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                onClick={(e) => handleClick(e, 'contact')}
                className="inline-block px-6 py-3 border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-10"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Abstract code visualization" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
