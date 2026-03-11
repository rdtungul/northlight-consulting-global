'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-black overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purpleDeep/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-purple uppercase tracking-widest text-sm font-semibold mb-4"
        >
          Digital Growth Agency
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          We Grow Businesses<br />
          <span className="text-brand-purple">That Mean Something</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-brand-silver text-lg md:text-xl max-w-2xl mb-10"
        >
          NorthLight Consulting Global delivers measurable digital results —
          from SEO and PPC to AI automation and full brand transformation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="#contact" variant="primary">Get a Free Consultation</Button>
          <Button href="/portfolio" variant="outline">See Our Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
