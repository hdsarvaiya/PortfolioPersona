import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/use-reveal';
import { SectionHeading } from './ui/section-heading';
import { Code, Monitor } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  percentage: number;
}

const technicalSkills: Skill[] = [
  { name: 'ReactJS', level: 'Advanced', percentage: 90 },
  { name: 'NodeJS & ExpressJS', level: 'Advanced', percentage: 85 },
  { name: 'MongoDB', level: 'Intermediate', percentage: 75 },
  { name: 'Python', level: 'Intermediate', percentage: 70 },
  { name: 'JavaScript', level: 'Advanced', percentage: 90 },
  { name: 'jQuery & Bootstrap', level: 'Intermediate', percentage: 75 },
  { name: 'Java', level: 'Basic', percentage: 50 }
];

interface Software {
  name: string;
  icon: React.ReactNode;
}

const professionalSoftware: Software[] = [
  { 
    name: 'Adobe Illustrator',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.07,7.07V16.93H7.2V7.07ZM16.92,12.05a2.92,2.92,0,0,1-2.57,3,5.67,5.67,0,0,1-1,0h-.94v2.91H10.56V7.07h2.54C15.86,7.07,16.92,8.71,16.92,12.05ZM14.72,12c0-1.85-.49-3-1.61-3h-.79v6.21h.54A1.83,1.83,0,0,0,14.72,12Z" />
      </svg>
    )
  },
  { 
    name: 'Figma',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.5,2A3.5,3.5,0,0,0,5,5.5V8H8.5A3.5,3.5,0,0,0,8.5,2Zm0,9.5A3.5,3.5,0,0,0,5,15h0v2.5A3.5,3.5,0,0,0,8.5,21h0a3.5,3.5,0,0,0,3.5-3.5h0V15H8.5ZM19,11.5a3.5,3.5,0,0,1-3.5,3.5H12V8h3.5a3.5,3.5,0,0,1,3.5,3.5Zm-7-6H8.5V11.5H12Z" />
      </svg>
    )
  },
  { 
    name: 'PowerPoint',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6,2h8l6,6V20a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2M12,18a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H9v6h3m0-8h5.5L12,4.5V10M9,12h3a4,4,0,0,1,4,4v2a4,4,0,0,1-4,4H7V12H9Z" />
      </svg>
    )
  },
  { 
    name: 'VSCode',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,2l4,4V18l-4,4H7l-4-4V6l4-4H17m0,2H7.41L5,6.41v11.18L7.41,20H17l2-2V6L17,4M10,8l6,4-6,4V8Z" />
      </svg>
    )
  },
  { 
    name: 'MySQL',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,3C7.58,3,4,4.79,4,7v10c0,2.21,3.59,4,8,4s8-1.79,8-4V7c0-2.21-3.58-4-8-4m6,14c0,.5-2.13,2-6,2s-6-1.5-6-2v-2.23c1.61.78,3.72,1.23,6,1.23s4.39-.45,6-1.23v2.23m0-4c0,.5-2.13,2-6,2s-6-1.5-6-2v-2.23c1.61.78,3.72,1.23,6,1.23s4.39-.45,6-1.23v2.23m-6-10c3.87,0,6,1.5,6,2s-2.13,2-6,2-6-1.5-6-2,2.13-2,6-2M10,7V5L15,7l-5,2V7" />
      </svg>
    )
  },
  { 
    name: 'Postman',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 17.5L7 20v-4.5H3V2h18v13.5H10.5v2zM7 5v2h10V5H7zm0 4v2h10V9H7z" />
      </svg>
    )
  },
  { 
    name: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
      </svg>
    )
  }
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-accent">{skill.level}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={isActive ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SoftwareIcon: React.FC<{ software: Software; index: number }> = ({ software, index }) => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="w-16 h-16 bg-accent bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center mb-3">
        {software.icon}
      </div>
      <span className="text-center">{software.name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { ref: techRef, isActive: techActive } = useReveal();
  const { ref: softwareRef, isActive: softwareActive } = useReveal();
  
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Skills & Expertise"
          subtitle="A comprehensive look at my technical skills and professional software proficiency."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            ref={techRef}
            className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal ${techActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={techActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full mr-3">
                <Code className="h-5 w-5" />
              </span>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            ref={softwareRef}
            className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal ${softwareActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={softwareActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full mr-3">
                <Monitor className="h-5 w-5" />
              </span>
              Professional Software
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {professionalSoftware.map((software, index) => (
                <SoftwareIcon key={index} software={software} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
