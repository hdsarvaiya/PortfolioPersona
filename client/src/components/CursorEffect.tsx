import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if we're hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(!!isInteractive);
      
      if (!isVisible && window.innerWidth > 768) {
        setIsVisible(true);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        backgroundColor: '#0070F3',
        opacity: 0.5,
        transition: 'transform 0.15s ease, width 0.2s ease, height 0.2s ease',
        width: isHovering ? '2.5rem' : '1.5rem',
        height: isHovering ? '2.5rem' : '1.5rem',
        marginLeft: isHovering ? '-1.25rem' : '-0.75rem',
        marginTop: isHovering ? '-1.25rem' : '-0.75rem'
      }}
    />
  );
}
