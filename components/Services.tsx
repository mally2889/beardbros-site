'use client';
import { motion } from 'framer-motion';

const items = [
  { title: 'Performance Marketing', desc: 'Meta + Google. Full-funnel testing, ROAS-first.'},
  { title: 'Creative Studio', desc: 'UGC, CGI, motion edits. Hooks that sell.'},
  { title: 'SEO & Content', desc: 'Research → briefs → topical maps → growth.'},
  { title: 'Web & CRO', desc: 'Next.js/Shopify builds, analytics, experiments.'},
  { title: 'Email & CRM', desc: 'Flows, campaigns, retention dashboards.'},
];

export default function Services() {
  return (
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-semibold">What we do</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            className="glass p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className="text-neon">{String(i+1).padStart(2,'0')}</div>
            <h3 className="mt-2 text-xl font-medium">{it.title}</h3>
            <p className="mt-2 text-white/70">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
