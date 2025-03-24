import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scrolls to an element on the page
 * @param elementId The ID of the element to scroll to
 * @param duration The duration of the scroll animation in milliseconds
 * @param offset Offset in pixels from the element (optional)
 */
export function smoothScrollTo(elementId: string, duration: number = 500, offset: number = 0) {
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) return;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeInOutQuad = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    window.scrollTo(0, startPosition + distance * easeInOutQuad);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}
