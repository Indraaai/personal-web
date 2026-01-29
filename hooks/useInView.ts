'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook untuk mendeteksi ketika elemen masuk ke view
 * Berguna untuk scroll-triggered animations
 * 
 * Usage:
 * const { ref, isVisible } = useInView();
 * <div ref={ref} className={isVisible ? 'animate-fade-in-up' : ''}></div>
 */

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    margin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Jika triggerOnce true, stop observing setelah visible
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, margin, triggerOnce]);

  return { ref, isVisible };
}
