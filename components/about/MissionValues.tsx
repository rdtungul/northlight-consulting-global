'use client';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const values = [
  { title: 'Our Mission', body: 'To illuminate the path forward for every client through honest strategy and measurable outcomes.' },
  { title: 'Our Vision',  body: 'A world where businesses of all sizes compete with confidence in the digital space.' },
  { title: 'Our Values',  body: 'Integrity · Transparency · Innovation · Client Obsession' },
];

export default function MissionValues() {
  return (
    <section className="bg-brand-darkgray py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="font-display text-4xl font-black text-white">Mission, Vision & Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-black border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-colors duration-300"
            >
              <h3 className="font-display text-brand-purple font-bold text-xl mb-4">{v.title}</h3>
              <p className="text-brand-silver leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
