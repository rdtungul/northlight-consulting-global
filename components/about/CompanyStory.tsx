'use client';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

export default function CompanyStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="font-display text-4xl font-black text-white mb-6">
          Built to Make Your Brand Shine
        </h2>
        <p className="text-brand-silver leading-relaxed mb-4">
          NorthLight Consulting Global was founded on a simple belief: every business
          deserves a marketing partner that treats their growth like its own.
        </p>
        <p className="text-brand-silver leading-relaxed">
          We combine data-driven strategy with creative execution to deliver results that
          compound — turning one-time campaigns into long-term growth engines for our clients.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden border border-white/10 bg-brand-darkgray h-72 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🔦</span>
          </div>
          <p className="text-brand-silver text-sm">About image placeholder</p>
        </div>
      </motion.div>
    </section>
  );
}
