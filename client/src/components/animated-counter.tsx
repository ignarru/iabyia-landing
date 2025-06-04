import { useEffect, useState, useCallback, useMemo } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  const increment = useMemo(() => end / (duration / 50), [end, duration]);

  const animate = useCallback(() => {
    let current = 0;
    const step = () => {
      current += increment;
      if (current >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, increment]);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const timer = setTimeout(animate, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasStarted, delay, animate]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
