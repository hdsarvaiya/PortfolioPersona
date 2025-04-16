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
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-0 relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-accent opacity-5"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent opacity-5"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, delay: 1 }}
      />
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <motion.div 
          ref={ref}
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 tracking-tighter uppercase">
            <span className="font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
              Harshvardhansinh 
            </span>
            <br />
            <span className="font-extrabold bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
              Sarvaiya
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mx-auto max-w-2xl text-gray-300 mb-10">
            Software Developer & Tech Enthusiast specializing in modern web applications
            with ReactJS, NodeJS, and other cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              href="#projects" 
              onClick={(e) => handleClick(e, 'projects')}
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')}
              className="inline-block px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-white hover:text-gray-900 rounded-md transition-all duration-300 font-medium"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
