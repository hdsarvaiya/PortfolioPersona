import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Format date
export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

// Get scroll percentage
export function getScrollPercentage() {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return window.scrollY / height;
}

// Parse text with newlines
export function parseTextWithNewlines(text: string) {
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index !== text.split('\n').length - 1 && <br />}
    </span>
  ));
}
