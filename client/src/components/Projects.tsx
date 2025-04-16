import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/use-reveal';
import { SectionHeading } from './ui/section-heading';
import { ArrowRight } from 'lucide-react';

interface ProjectTag {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  link: string;
}

const projectData: Project[] = [
  {
    title: 'AI-based Stock Suggestion',
    description: 'Python and ReactJS software that analyzes historic data to predict future stock values and provides suggestions for swing trading.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: [
      { name: 'Python' },
      { name: 'ReactJS' },
      { name: 'NumPy' },
      { name: 'Pandas' }
    ],
    link: '#'
  },
  {
    title: 'Code-Free Web Page Builder',
    description: 'A Next.js and ReactJS webpage builder utilizing drag-and-drop functionality for creating customized webpages without coding.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: [
      { name: 'Next.js' },
      { name: 'ReactJS' },
      { name: 'Node' },
      { name: 'MongoDB' },
      { name: 'Tailwind' }
    ],
    link: '#'
  },
  {
    title: 'Flutter Application',
    description: 'A mobile application with user authentication, Firebase integration, and data collection capabilities built for a client.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',
    tags: [
      { name: 'Flutter' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'RESTful API' }
    ],
    link: '#'
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      className={`project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg reveal ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">
              {tag.name}
            </span>
          ))}
        </div>
        <a href={project.link} className="text-accent font-medium hover:underline flex items-center gap-2 group">
          View Details 
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const LTProjects: React.FC = () => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      className={`project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg md:col-span-3 reveal ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <div className="lg:flex">
        <div className="lg:w-1/3 h-48 lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Corporate workspace with tech devices" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="p-6 lg:w-2/3">
          <div className="flex items-center mb-4">
            <img 
              src="https://logo.clearbit.com/larsentoubro.com" 
              alt="L&T Logo" 
              className="h-10 w-auto mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">L&T Technical Services</h3>
              <p className="text-gray-600 dark:text-gray-400">Internship Projects</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Network Monitoring Software</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Built with ReactJS and Node to monitor 1000+ network devices with graphical representation for easier troubleshooting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">ReactJS</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Node</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Networking</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Inventory Management Software</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Created a system that automates maintenance reminder emails with ReactJS frontend, Node backend, and MongoDB.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">ReactJS</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Node</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Web Scraping Project</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Python-based scraper to gather data for internal use at L&T.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A showcase of my recent work, spanning from AI-based applications to drag-and-drop website builders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          
          <LTProjects />
        </div>
      </div>
    </section>
  );
};

export default Projects;
