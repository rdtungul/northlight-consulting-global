'use client';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const industries = [
  'Home Services', 'Medical / Healthcare', 'Legal',
  'B2B', 'B2C', 'E-Commerce', 'Education',
  'Manufacturing', 'Finance', 'Real Estate',
  'Hospitality', 'Technology',
];

export default function IndustriesServed() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel>Industries</SectionLabel>
        <h2 className="font-display text-3xl font-black text-white mb-10">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="border border-white/20 text-brand-silver text-sm px-4 py-2 rounded-full hover:border-brand-purple hover:text-brand-purple transition-colors cursor-default"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
