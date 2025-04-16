import { motion } from "framer-motion";

interface ProgressBarProps {
  skill: string;
  percentage: number;
}

export default function ProgressBar({ skill, percentage }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
