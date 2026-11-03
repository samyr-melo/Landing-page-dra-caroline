'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number; // em milissegundos
  className?: string;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 500,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Depois de revelar uma vez, desconecta para economizar memória
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.15, // dispara quando 15% do elemento estiver visível
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-init-left';
      case 'right':
        return 'reveal-init-right';
      default:
        return 'reveal-init-up';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${getDirectionClass()} ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}