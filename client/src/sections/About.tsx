import { motion } from "framer-motion";
import { slideUp, fadeIn } from "@/lib/animations";
import workspaceSvg from "@/assets/workspace.svg";

export default function About() {
  const education = [
    {
      level: "Graduation",
      institution: "The Maharaja University of Baroda",
      details: "Computer Application, 2025 (8.5 CPI)"
    },
    {
      level: "Higher Secondary",
      institution: "C.U.Shah",
      details: "Gujarat Board, 2022 (86%)"
    },
    {
      level: "Secondary",
      institution: "C.U.Shah",
      details: "Gujarat Board, 2020 (85%)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-100/30 dark:bg-neutral-900/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            variants={fadeIn()}
            className="text-primary font-medium inline-block mb-3"
          >
            About Me
          </motion.span>
          <motion.h2 
            variants={slideUp(0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A passionate developer with a focus on user experience
          </motion.h2>
          <motion.div 
            variants={slideUp(0.2)}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn(0.3)}
            className="relative"
          >
            <img 
              src={workspaceSvg}
              alt="Modern workspace" 
              className="rounded-xl shadow-lg"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg max-w-xs"
            >
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span className="font-medium">Currently</span>
              </div>
              <p className="text-sm text-foreground/80">
                Pursuing Computer Application at The Maharaja Sayajirao University of Baroda
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={slideUp()}
              className="text-2xl font-bold mb-4"
            >
              Who I Am
            </motion.h3>
            <motion.p 
              variants={slideUp(0.1)}
              className="mb-4 text-foreground/80"
            >
              I'm a Computer Application student at The Maharaja Sayajirao University of Baroda with a passion for creating innovative web solutions.
            </motion.p>
            <motion.p 
              variants={slideUp(0.2)}
              className="mb-6 text-foreground/80"
            >
              My journey in development has equipped me with skills in both front-end and back-end technologies, allowing me to build complete solutions from concept to deployment.
            </motion.p>
            
            <motion.div 
              variants={slideUp(0.3)}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="space-y-3">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={slideUp(0.3 + index * 0.1)}
                    className="flex"
                  >
                    <div className="w-36 font-medium">{item.level}</div>
                    <div>
                      <p>{item.institution}</p>
                      <p className="text-sm text-foreground/70">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={slideUp(0.6)}
              className="flex flex-wrap gap-3"
            >
              <a 
                href="#contact" 
                className="px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-5 py-2 border border-foreground/20 font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
