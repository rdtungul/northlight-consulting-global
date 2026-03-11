'use client';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const diffs = [
  'End-to-end services — no handoffs, no excuses',
  'AI-powered workflows that cut turnaround time in half',
  'Dedicated account manager for every client',
  'Month-to-month flexibility — no lock-in contracts',
  'Proven results across 12+ industries',
];

export default function Differentiators() {
  return (
    <section className="bg-brand-darkgray py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-display text-4xl font-black text-white">What Sets Us Apart</h2>
        </div>
        <div className="flex flex-col gap-4">
          {diffs.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-brand-black border border-white/10 rounded-xl px-6 py-4 hover:border-brand-purple/50 transition-colors"
            >
              <span className="text-brand-purple font-bold text-lg mt-0.5">✓</span>
              <p className="text-white font-medium">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
