import ResultsMetrics from '@/components/portfolio/ResultsMetrics';
import CaseStudyCard from '@/components/portfolio/CaseStudyCard';
import IndustriesServed from '@/components/portfolio/IndustriesServed';
import CtaBanner from '@/components/home/CtaBanner';
import { caseStudies } from '@/lib/caseStudies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — NorthLight Consulting Global',
  description: 'See how NorthLight Consulting Global has driven measurable results for clients across 12+ industries.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-brand-black pt-24 pb-12 px-6 text-center">
        <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">Case Studies</p>
        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">Our Work</h1>
        <p className="text-brand-silver text-lg max-w-2xl mx-auto">
          Real clients. Real results. Proof that strategy and execution compound.
        </p>
      </section>
      <ResultsMetrics />
      <section className="bg-brand-black py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">Client Stories</p>
            <h2 className="font-display text-4xl font-black text-white">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.client} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
      <IndustriesServed />
      <CtaBanner />
    </>
  );
}
