'use client';
import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

export default function Marquee({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const step = () => {
      x -= 0.5;
      el.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > el.scrollWidth / 2) x = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const logos = ['Beardo','Early Foods','Chenab','Society Tea','Nesterra','ICICI Bank','Bajaj Finserv'];
  return (
    <div className={clsx('overflow-hidden border border-white/10 rounded-xl', className)}>
      <div className="flex whitespace-nowrap" ref={ref}>
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className="px-6 py-3 text-white/50">{l}</div>
        ))}
      </div>
    </div>
  );
}
