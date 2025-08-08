'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CaseSticky() {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (wrap.current?.offsetWidth || 0)
        }
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrap} className="w-screen overflow-hidden">
      <div className="flex">
        <section className="panel w-screen h-[80vh] flex items-center justify-center">
          <div className="container">
            <h2 className="text-4xl font-semibold">Case: Beardo</h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              Launch to scale. Social + D2C + Ads. |
              <strong> ARR: 50 Cr</strong> | <strong>Time: 36 months</strong>
            </p>
          </div>
        </section>
        <section className="panel w-screen h-[80vh] flex items-center justify-center">
          <div className="container">
            <h2 className="text-4xl font-semibold">Strategy</h2>
            <ul className="mt-4 list-disc ml-6 text-white/80 space-y-2">
              <li>Full-funnel creative testing</li>
              <li>Always-on acquisition + promo bursts</li>
              <li>UGC + CGI creative sprints</li>
            </ul>
          </div>
        </section>
        <section className="panel w-screen h-[80vh] flex items-center justify-center">
          <div className="container">
            <h2 className="text-4xl font-semibold">Results</h2>
            <p className="mt-4 text-white/70 max-w-2xl">5x ROAS on Meta. 12x on Google. D2C AOV +28%.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
