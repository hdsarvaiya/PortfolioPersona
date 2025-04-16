import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  const sizeMap = {
    sm: { btn: 'p-1.5', icon: 'h-4 w-4' },
    md: { btn: 'p-2', icon: 'h-5 w-5' },
    lg: { btn: 'p-3', icon: 'h-6 w-6' }
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className={`rounded-full bg-neutral-200 bg-opacity-20 dark:bg-white dark:bg-opacity-10 hover:bg-opacity-30 ${sizeMap[size].btn} ${className}`}
      size="icon"
    >
      {isDark ? (
        <Sun className={sizeMap[size].icon} />
      ) : (
        <Moon className={sizeMap[size].icon} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
