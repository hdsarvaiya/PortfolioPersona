import { Variants } from "framer-motion";

export const fadeIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeInOut"
    }
  }
});

export const slideUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const slideRight = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const scaleIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
