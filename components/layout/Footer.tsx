import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-brand-purpleDeep to-brand-purple py-16 text-center px-6">
        <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
          Ready to Illuminate Your Brand?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Let&apos;s build a strategy that moves the needle. Free consultation, no commitment.
        </p>
        <Link
          href="#contact"
          className="border border-white/50 text-white hover:border-white hover:bg-white hover:text-brand-purpleDeep font-bold px-8 py-4 rounded-full transition-all duration-200 inline-block"
        >
          Get a Free Consultation
        </Link>
      </div>

      {/* Links row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo.jpg"
              alt="NorthLight Consulting Global"
              width={140}
              height={56}
              className="h-14 w-auto object-contain rounded-md"
            />
          </div>
          <p className="text-brand-silver text-sm leading-relaxed">
            Digital growth agency delivering measurable results through strategy, creativity, and AI-powered execution.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Portfolio', href: '/portfolio' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand-silver hover:text-brand-purple text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="flex flex-col gap-2">
            {services.slice(0, 6).map(s => (
              <li key={s.href}>
                <Link href={s.href} className="text-brand-silver hover:text-brand-purple text-sm transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-brand-silver text-sm">
          © {new Date().getFullYear()} NorthLight Consulting Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
