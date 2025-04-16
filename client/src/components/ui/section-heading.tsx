import React from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  centered = true,
  className = '' 
}) => {
  const { ref, isActive } = useReveal();
  
  return (
    <div 
      ref={ref} 
      className={cn(
        "mb-16 reveal",
        { 'text-center': centered, 'active': isActive },
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-young-serif mb-6">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
