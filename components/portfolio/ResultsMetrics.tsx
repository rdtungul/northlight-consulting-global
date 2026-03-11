'use client';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 200, suffix: '+', label: 'Clients Served' },
  { value: 340, suffix: '%', label: 'Average ROI Increase' },
  { value: 12,  suffix: '+', label: 'Industries Served' },
  { value: 98,  suffix: '%', label: 'Client Retention Rate' },
];

export default function ResultsMetrics() {
  return (
    <section className="bg-brand-darkgray py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-5xl font-black text-brand-purple mb-2">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-brand-silver text-sm uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
