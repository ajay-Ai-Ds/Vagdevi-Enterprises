"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyScrollProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

export default function LazyScroll({
  children,
  threshold = 0.01,
  rootMargin = "250px",
  minHeight = "200px",
}: LazyScrollProps) {
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersected, threshold, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isIntersected ? "auto" : minHeight }}>
      {isIntersected ? children : null}
    </div>
  );
}
