'use client';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/lib/caseStudies';

export default function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-brand-darkgray border border-white/10 rounded-2xl overflow-hidden hover:border-brand-purple transition-all duration-300"
    >
      <div className="w-full h-48 bg-brand-black flex items-center justify-center border-b border-white/10">
        <div className="text-center">
          <span className="text-4xl">📊</span>
          <p className="text-brand-silver text-xs mt-2">{cs.industry}</p>
        </div>
      </div>
      <div className="p-6">
        <span className="text-brand-purple text-xs font-semibold uppercase tracking-wider">
          {cs.industry}
        </span>
        <h3 className="text-white font-bold text-xl mt-2 mb-1">{cs.client}</h3>
        <p className="text-brand-silver text-sm mb-4">{cs.service}</p>
        <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg px-4 py-3">
          <p className="text-brand-purple font-semibold text-sm">📈 {cs.result}</p>
        </div>
      </div>
    </motion.div>
  );
}
