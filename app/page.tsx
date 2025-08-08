'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero3D from '@/components/Hero3D';
import Services from '@/components/Services';
import CaseSticky from '@/components/CaseSticky';
import Marquee from '@/components/Marquee';
import ReelStrip from '@/components/ReelStrip';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] });
  const glow = useTransform(scrollYProgress, [0, 1], ['opacity-100', 'opacity-0']);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.reveal');
    sections.forEach((el) => {
      gsap.fromTo(el, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      });
    });
  }, []);

  return (
    <main ref={ref} className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-radial-mask" />
      <section className="container pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Boutique performance.<br/>Ridiculously good creative.
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              We plan, make, and scale ads for D2C brands. Senior-led, test-fast culture, zero fluff.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="glass px-5 py-3">Book a consult</a>
              <a href="#cases" className="border border-white/20 rounded-2xl px-5 py-3">See case studies</a>
            </div>
            <Marquee className="mt-10" />
          </div>
          <Hero3D />
        </div>
      </section>

      <section className="container py-24 reveal">
        <Services />
      </section>

      <section id="cases" className="py-24 reveal">
        <CaseSticky />
      </section>

      <section className="container py-24 reveal">
        <ReelStrip />
      </section>

      <section id="contact" className="container py-24 reveal">
        <CTA />
      </section>

      <Footer />
    </main>
  );
}
