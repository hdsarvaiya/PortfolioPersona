import { motion } from "framer-motion";
import { slideUp, fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import networkingSvg from "@/assets/networking.svg";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const projects: ProjectData[] = [
    {
      title: "AI-based Stock Suggestion",
      description: "Python and ReactJS software that analyzes historic stock data to generate swing trading suggestions based on predictive modeling.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "ReactJS", "NumPy", "Pandas"],
      github: "#",
      demo: "#"
    },
    {
      title: "Code-Free Web Page Builder",
      description: "A Next.js and ReactJS webpage builder with drag and drop functionality to create fully customized webpages without writing code.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
      tags: ["Next.js", "ReactJS", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Network Monitoring Software",
      description: "ReactJS and Node.js application that monitors 1000+ devices in a network with graphical representation of connectivity status.",
      image: networkingSvg,
      tags: ["ReactJS", "Node.js", "Express", "Network Protocols"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-100/30 dark:bg-neutral-900/20">
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
            Featured Work
          </motion.span>
          <motion.h2 
            variants={slideUp(0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Projects I've Built
          </motion.h2>
          <motion.div 
            variants={slideUp(0.2)}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
