'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

// Equilateral triangle: base 1800px, centered at x=960, bottom below viewport
const POINTS = '960,60 60,1000 1860,1000';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#120F14' }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Herringbone triangle grid — alternating diagonal rows, very subtle stroke */}
          <pattern id="hero-grid" x="0" y="0" width="60" height="80" patternUnits="userSpaceOnUse">
            {/* Row 1 — diagonal / (bottom-left to top-right) */}
            <polygon points="0,0 60,0 0,40"  fill="#000000" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" />
            <polygon points="60,0 60,40 0,40" fill="#000000" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" />
            {/* Row 2 — diagonal \ (top-left to bottom-right) */}
            <polygon points="0,40 60,40 60,80" fill="#000000" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" />
            <polygon points="0,40 0,80 60,80"  fill="#000000" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" />
          </pattern>

          {/* Purple/violet gradient for strokes */}
          <linearGradient id="tri-grad" x1="960" y1="-558" x2="960" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#E667FF" />
            <stop offset="55%"  stopColor="#D212F7" />
            <stop offset="100%" stopColor="#8E03D8" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow-xl" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="45" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="b" /></feMerge>
          </filter>
          <filter id="glow-lg" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-md" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-sm" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>


        {/* Triangle grid covers full background */}
        <rect width="1920" height="900" fill="url(#hero-grid)" />
        {/* Solid black fill inside hero triangle — no pattern */}
        <polygon points={POINTS} fill="#000000" />

        {/* Layer 1 — outermost wide bloom */}
        <polygon points={POINTS} stroke="url(#tri-grad)" strokeWidth="70"  opacity="0.12" filter="url(#glow-xl)" />
        {/* Layer 2 — wide halo */}
        <polygon points={POINTS} stroke="url(#tri-grad)" strokeWidth="28"  opacity="0.30" filter="url(#glow-lg)" />
        {/* Layer 3 — mid glow */}
        <polygon points={POINTS} stroke="url(#tri-grad)" strokeWidth="10"  opacity="0.60" filter="url(#glow-md)" />
        {/* Layer 4 — tight edge glow */}
        <polygon points={POINTS} stroke="url(#tri-grad)" strokeWidth="3"   opacity="0.85" filter="url(#glow-sm)" />
        {/* Layer 5 — crisp stroke */}
        <polygon points={POINTS} stroke="url(#tri-grad)" strokeWidth="1.5" opacity="1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
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
          className="text-brand-silver text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          NorthLight Consulting Global delivers measurable digital results —
          from SEO and PPC to AI automation and full brand transformation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="#contact" variant="primary">Get a Free Consultation</Button>
          <Button href="/portfolio" variant="outline">See Our Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
