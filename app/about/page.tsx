import CompanyStory from '@/components/about/CompanyStory';
import MissionValues from '@/components/about/MissionValues';
import TeamSection from '@/components/about/TeamSection';
import Differentiators from '@/components/about/Differentiators';
import CtaBanner from '@/components/home/CtaBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — NorthLight Consulting Global',
  description: 'Learn about NorthLight Consulting Global — our story, mission, team, and what sets us apart as a digital growth agency.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-black pt-24 pb-12 px-6 text-center">
        <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">About Us</p>
        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
          About NorthLight
        </h1>
        <p className="text-brand-silver text-lg max-w-2xl mx-auto">
          The team, the mission, and the relentless pursuit of your growth.
        </p>
      </section>
      <CompanyStory />
      <MissionValues />
      <TeamSection />
      <Differentiators />
      <CtaBanner />
    </>
  );
}
