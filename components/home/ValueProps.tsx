'use client';
import { motion } from 'framer-motion';

const values = [
  { icon: '⚡', title: 'Results-First Strategy',  body: 'Every campaign starts with your outcomes, not our services.' },
  { icon: '🎯', title: 'Full-Service Expertise',  body: 'From search to automation, we execute under one roof.' },
  { icon: '🔒', title: 'Transparent Reporting',   body: 'You always know exactly what your investment is doing.' },
  { icon: '🤖', title: 'AI-Powered Efficiency',   body: 'We bake automation into everything we build for you.' },
];

export default function ValueProps() {
  return (
    <section className="bg-brand-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">Why NorthLight</p>
          <h2 className="font-display text-4xl font-black text-white">Built Different. Built for Results.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-darkgray border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-colors duration-300"
            >
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3 className="font-display text-white font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-brand-silver text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
