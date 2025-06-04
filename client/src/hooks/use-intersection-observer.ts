import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
}: UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver>();

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && observerRef.current) {
          observerRef.current.disconnect();
        }
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible };
}
