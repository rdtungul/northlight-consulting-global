import Image from 'next/image';
import { services } from '@/lib/services';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ServicesOverview() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-4xl font-black text-white">Our Services</h2>
          <p className="text-brand-silver mt-3 max-w-xl mx-auto">
            End-to-end digital solutions under one roof — no handoffs, no excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group relative aspect-video overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Color overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-70 group-hover:opacity-40"
                style={{ backgroundColor: service.overlay }}
              />

              {/* Title */}
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-display text-white font-black text-base uppercase tracking-wide leading-tight">
                  {service.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
