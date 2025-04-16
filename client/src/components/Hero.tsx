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
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-0 relative overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(rgba(158, 208, 11, 0.15) 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Animated elements */}
      <motion.div 
        className="absolute top-1/4 -right-12 w-24 h-24 rounded-full bg-[#aaff00] opacity-10"
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-12 w-32 h-32 rounded-full bg-[#aaff00] opacity-10"
        animate={{ scale: [1, 1.3, 1], y: [0, 20, 0] }}
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
            Welcome to <span className="block mt-2">My Portfolio</span>
          </h1>
          
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-white">Harshvardhansinh </span>
              <span className="text-[#aaff00]">Sarvaiya</span>
            </h2>
            <p className="text-2xl mt-2 font-light text-[#aaff00]">
              Software Developer
            </p>
          </div>
          
          <p className="text-md md:text-lg mx-auto max-w-2xl text-gray-300 mb-10">
            Specializing in creating modern web applications with ReactJS, NodeJS, and various 
            cutting-edge technologies to deliver innovative digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              href="#projects" 
              onClick={(e) => handleClick(e, 'projects')}
              className="inline-block px-6 py-3 bg-[#aaff00] text-black rounded-md hover:bg-[#c8ff3d] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')}
              className="inline-block px-6 py-3 bg-transparent border-2 border-[#aaff00] text-[#aaff00] hover:bg-[#aaff00] hover:bg-opacity-10 rounded-md transition-all duration-300 font-medium"
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
