"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

export function CountUp({ value }: { value: string }) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match?.[1].split(".")[1]?.length ?? 0;
  const animatable = match !== null;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !animatable) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animatable, target, suffix, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
