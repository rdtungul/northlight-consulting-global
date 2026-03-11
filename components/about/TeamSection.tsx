'use client';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { team } from '@/lib/team';

export default function TeamSection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="font-display text-4xl font-black text-white">The People Behind the Results</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-darkgray border border-white/10 rounded-2xl overflow-hidden hover:border-brand-purple/50 transition-colors duration-300"
            >
              <div className="w-full h-56 bg-brand-black flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-white font-bold">{member.name}</p>
                <p className="text-brand-purple text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
