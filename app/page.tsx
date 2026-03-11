import HeroSection from '@/components/home/HeroSection';
import ValueProps from '@/components/home/ValueProps';
import ServicesOverview from '@/components/home/ServicesOverview';
import CtaBanner from '@/components/home/CtaBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NorthLight Consulting Global — Digital Growth Agency',
  description: 'We grow businesses through SEO, PPC, AI automation, and full brand transformation. Get a free consultation today.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <ServicesOverview />
      <CtaBanner />
    </>
  );
}
