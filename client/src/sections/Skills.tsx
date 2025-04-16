import { motion } from "framer-motion";
import { slideUp, fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import ProgressBar from "@/components/ProgressBar";

interface Skill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
  icon: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "ReactJS", percentage: 90 },
    { name: "NodeJS", percentage: 85 },
    { name: "ExpressJS", percentage: 80 },
    { name: "JavaScript", percentage: 92 },
    { name: "Python", percentage: 75 }
  ];

  const tools: Tool[] = [
    { name: "GitHub", icon: "fab fa-github" },
    { name: "VSCode", icon: "fas fa-code" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Postman", icon: "fas fa-exchange-alt" },
    { name: "Illustrator", icon: "fab fa-adobe" },
    { name: "PowerPoint", icon: "fas fa-file-powerpoint" },
    { name: "MongoDB", icon: "fas fa-server" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" }
  ];

  const achievements = [
    {
      number: "94.34",
      description: "Percentile out of 70 thousand students in Common Management Aptitude Test'25 (CMAT)"
    },
    {
      number: "1st",
      description: "District champion in Rural IT quiz, National Children Science Congress (NCSC)"
    }
  ];

  return (
    <section id="skills" className="py-20">
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
            My Toolkit
          </motion.span>
          <motion.h2 
            variants={slideUp(0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={slideUp(0.2)}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={slideUp()}
              className="text-2xl font-bold mb-6"
            >
              Development Skills
            </motion.h3>
            
            <div>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={slideUp(0.1 + index * 0.1)}
                >
                  <ProgressBar skill={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={slideUp()}
              className="text-2xl font-bold mb-6"
            >
              Professional Tools
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm transition-all duration-300"
                >
                  <i className={`${tool.icon} text-3xl mb-3 text-primary`}></i>
                  <span className="text-sm font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp(0.3)}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Achievements</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={slideUp(0.4 + index * 0.1)}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm max-w-md transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <p className="text-foreground/80">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
