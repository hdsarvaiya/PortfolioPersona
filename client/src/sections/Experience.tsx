import { motion } from "framer-motion";
import { slideUp, fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  details?: {
    title: string;
    description: string[];
  }[];
  skills?: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "Dec 24 – April 25",
      title: "Software Developer Intern",
      company: "Larsen and Toubro Technological Services (LTTS)",
      description: "Worked as a full-stack web developer across 4 different projects, helping to improve the company's operations through innovative solutions.",
      details: [
        {
          title: "Network Monitoring Software",
          description: [
            "Developed a ReactJS and Node application that monitors 1000+ end devices in the same network.",
            "Solved complex networking challenges by creating a graphical representation of the entire network, showing device connectivity status in real-time."
          ]
        },
        {
          title: "Inventory Management Software",
          description: [
            "Created a system that sends automated emails for maintenance due dates.",
            "Built with ReactJS and Bootstrap frontend, Node/Express backend, and MongoDB database. Implemented RESTful APIs and dual login functionality."
          ]
        },
        {
          title: "Web Scraping Project",
          description: [
            "Developed a Python-based web scraping solution."
          ]
        }
      ],
      skills: ["ReactJS", "Node.js", "Express", "MongoDB", "Python", "Bootstrap"]
    },
    {
      period: "2024",
      title: "Placement Coordinator",
      company: "Department of Computer Application",
      description: "Cultivated and directed relationships with 20+ prominent companies, ensuring seamless recruitment processes. Leveraged strategic acumen to optimize placement outcomes at the Department of Computer Application."
    },
    {
      period: "2023",
      title: "Freelance Developer",
      company: "Flutter Application",
      description: "Developed a Flutter application with user login/register functionality and Firebase Google login. The app collects user data and displays it on a company portal.",
      details: [
        {
          title: "",
          description: [
            "Built with a user-friendly design according to client requirements, using Node as backend with RESTful APIs for streamlined workflow."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
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
            Work Experience
          </motion.span>
          <motion.h2 
            variants={slideUp(0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            My Professional Journey
          </motion.h2>
          <motion.div 
            variants={slideUp(0.2)}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-10 space-y-16">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative timeline-item"
                style={{
                  "--delay": `${index * 0.2}s`
                } as React.CSSProperties}
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
                {index < experiences.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute left-[7px] top-6 bottom-[-50px] w-[2px] bg-primary/20"
                  ></motion.div>
                )}
                
                <div>
                  <motion.span 
                    variants={fadeIn()}
                    className="text-sm font-medium text-primary"
                  >
                    {experience.period}
                  </motion.span>
                  <motion.h3 
                    variants={slideUp(0.1)}
                    className="text-xl md:text-2xl font-bold mt-1 mb-2"
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.p 
                    variants={slideUp(0.2)}
                    className="font-medium mb-4"
                  >
                    {experience.company}
                  </motion.p>
                  <motion.p 
                    variants={slideUp(0.3)}
                    className="text-foreground/80 mb-4"
                  >
                    {experience.description}
                  </motion.p>
                  
                  {experience.details && (
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg p-5 space-y-6"
                    >
                      {experience.details.map((detail, i) => (
                        <motion.div key={i} variants={staggerItem}>
                          {detail.title && (
                            <h4 className="font-bold mb-2">{detail.title}</h4>
                          )}
                          {detail.description.map((desc, j) => (
                            <p key={j} className="text-foreground/80 mb-2 last:mb-0">
                              {desc}
                            </p>
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  
                  {experience.skills && (
                    <motion.div 
                      variants={slideUp(0.5)}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {experience.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
