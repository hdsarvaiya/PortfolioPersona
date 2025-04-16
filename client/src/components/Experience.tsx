import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/use-reveal';
import { SectionHeading } from './ui/section-heading';
import { Briefcase, GraduationCap, Check } from 'lucide-react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  items?: string[];
}

const experienceData: TimelineItem[] = [
  {
    title: 'Larsen & Toubro - Internship',
    organization: 'L&T Technological Services',
    period: 'Dec 24 - April 25',
    description: 'Joined as a Software Developer at L&T Technological Services, worked on 4 different projects as a full-stack web developer in IoT, Computer Networking, and Web services.',
    items: [
      'Developed network monitoring software that visualizes 1000+ devices',
      'Created inventory management system with automated maintenance notifications',
      'Built web scraping solutions using Python'
    ]
  },
  {
    title: 'Placement Coordinator',
    organization: 'Department of Computer Application',
    period: '2023 - Present',
    description: 'Cultivated and directed relationships with 20+ prominent companies, ensuring seamless recruitment processes at Department of Computer Application.'
  },
  {
    title: 'Freelance Developer',
    organization: 'Self-employed',
    period: '2022 - Present',
    description: 'Developed Flutter applications with Firebase integration and user authentication features. Created user-friendly designs and integrated RESTful APIs for seamless data flow.'
  }
];

const educationData: Array<{title: string, organization: string, period: string, score: string}> = [
  {
    title: 'Computer Application',
    organization: 'The Maharaja Sayajirao University of Baroda',
    period: '2022 - 2025',
    score: 'CPI: 8.5'
  },
  {
    title: 'Higher Secondary',
    organization: 'C.U.Shah, Gujarat Board',
    period: '2022',
    score: '86%'
  },
  {
    title: 'Secondary',
    organization: 'C.U.Shah, Gujarat Board',
    period: '2020',
    score: '85%'
  }
];

const achievements: string[] = [
  'Scored 94.34 percentile out of 70 thousand students in Common Management Aptitude Test\'25 (CMAT)',
  'District champion in Rural IT quiz, National Children Science Congress (NCSC)',
  'Represented the University at the First Youth parliament organised by the Ministry of Parliamentary Affairs'
];

const Timeline: React.FC<{ data: TimelineItem[] }> = ({ data }) => {
  return (
    <div className="relative pl-10 space-y-8 mb-12">
      <div className="timeline-line"></div>
      
      {data.map((item, index) => {
        const { ref, isActive } = useReveal();
        
        return (
          <motion.div 
            key={index} 
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="ml-8">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <span className="text-sm bg-accent text-white px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              <p className="text-accent font-medium mb-1">{item.organization}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {item.description}
              </p>
              {item.items && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Education: React.FC = () => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg reveal ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="p-6">
        {educationData.map((item, index) => (
          <div key={index} className={index !== educationData.length - 1 ? 'mb-8' : ''}>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h4 className="text-xl font-bold">{item.title}</h4>
              <span className="text-sm font-semibold">{item.period}</span>
            </div>
            <p className="text-accent font-medium mb-1">{item.organization}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.score}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const { ref, isActive } = useReveal();
  
  return (
    <motion.div 
      ref={ref}
      className={`mt-10 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg reveal ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className="p-6">
        <h4 className="text-xl font-bold mb-4">Achievements</h4>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const { ref: expRef, isActive: expActive } = useReveal();
  const { ref: eduRef, isActive: eduActive } = useReveal();
  
  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Experience & Education"
          subtitle="My professional journey and academic background that have shaped my technical skills."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            ref={expRef}
            className={`reveal ${expActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={expActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full mr-3">
                <Briefcase className="h-5 w-5" />
              </span>
              Professional Experience
            </h3>
            
            <Timeline data={experienceData} />
          </motion.div>
          
          <motion.div 
            ref={eduRef}
            className={`reveal ${eduActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={eduActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full mr-3">
                <GraduationCap className="h-5 w-5" />
              </span>
              Education
            </h3>
            
            <Education />
            <Achievements />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
