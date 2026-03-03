import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target: number, suffix = '', decimals = 0, duration = 2000) {
  const [value, setValue] = useState('0' + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          function step(now: number) {
            const prog = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - prog, 3);
            const val = target * ease;
            setValue((decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString()) + suffix);
            if (prog < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, decimals, duration]);

  return { ref, value };
}
