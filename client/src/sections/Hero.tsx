import { motion } from "framer-motion";
import { slideUp, fadeIn } from "@/lib/animations";
import abstractCodeSvg from "@/assets/abstract-code.svg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <motion.span 
              variants={fadeIn()}
              className="text-primary font-medium inline-block mb-4"
            >
              Full-stack Developer
            </motion.span>
            <motion.h1 
              variants={slideUp(0.1)}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="font-youngSerif block text-3xl md:text-4xl text-foreground/70 mb-2">
                Hi, I'm
              </span>
              Harshvardhansinh<br/>Sarvaiya
            </motion.h1>
            
            <motion.p 
              variants={slideUp(0.2)}
              className="text-lg md:text-xl mb-8 text-foreground/80 max-w-xl"
            >
              I build exceptional digital experiences with modern front-end frameworks and robust back-end solutions, specializing in ReactJS, NodeJS, and more.
            </motion.p>
            
            <motion.div 
              variants={slideUp(0.3)}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-foreground/20 font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            variants={fadeIn(0.4)}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 bg-primary/10 dark:bg-primary/20 rounded-full absolute -top-4 -left-4"></div>
              <motion.img 
                src={abstractCodeSvg}
                alt="Abstract code visualization" 
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full relative z-10"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
