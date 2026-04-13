"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 4, suffix: "", label: "Guides experts" },
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 2026, suffix: "", label: "Données actualisées" },
  { value: 100, suffix: "%", label: "Contenu gratuit" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-heading text-5xl lg:text-6xl text-white-cream">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="relative py-24 parallax-bg"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-mocha-deep/80" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-mocha-light text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
