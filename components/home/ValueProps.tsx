'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const values = [
  { icon: '⚡', title: 'Results-First Strategy',  body: 'Every campaign starts with your outcomes, not our services.' },
  { icon: '🎯', title: 'Full-Service Expertise',  body: 'From search to automation, we execute under one roof.' },
  { icon: '🔒', title: 'Transparent Reporting',   body: 'You always know exactly what your investment is doing.' },
  { icon: '🤖', title: 'AI-Powered Efficiency',   body: 'We bake automation into everything we build for you.' },
];

export default function ValueProps() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(i => (i - 1 + values.length) % values.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(i => (i + 1) % values.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <section className="bg-brand-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">Why NorthLight</p>
          <h2 className="font-display text-4xl font-black text-white">Built Different. Built for Results.</h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-brand-purple hover:text-brand-purple transition-colors duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden flex-1">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {values.map((v, i) => (
                  <div
                    key={v.title}
                    className={`bg-brand-darkgray border rounded-2xl p-8 transition-colors duration-300 ${
                      i === current ? 'border-brand-purple/60' : 'border-white/10 hover:border-brand-purple/50'
                    }`}
                  >
                    <span className="text-3xl mb-4 block">{v.icon}</span>
                    <h3 className="font-display text-white font-bold text-lg mb-2">{v.title}</h3>
                    <p className="text-brand-silver text-sm leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-brand-purple hover:text-brand-purple transition-colors duration-200"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
