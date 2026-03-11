'use client';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ServicesOverview() {
  return (
    <section className="bg-brand-darkgray py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-4xl font-black text-white">Our Services</h2>
          <p className="text-brand-silver mt-3 max-w-xl mx-auto">
            End-to-end digital solutions under one roof — no handoffs, no excuses.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.a
              key={service.href}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex items-center gap-3 bg-brand-black border border-white/10 rounded-xl px-5 py-4 hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-200"
            >
              <span className="text-brand-purple font-bold text-xl">→</span>
              <span className="text-white font-medium group-hover:text-brand-purple transition-colors">
                {service.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
