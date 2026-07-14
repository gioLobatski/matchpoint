"use client";

import { useEffect, useState, RefObject } from "react";

/**
 * useOnScreen — IntersectionObserver hook for visibility detection.
 * Returns true when the ref element (or its rootMargin offset) enters the viewport.
 */
export function useOnScreen(
  ref: RefObject<HTMLElement | null>,
  rootMargin = "0px"
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
