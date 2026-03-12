'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/lib/services';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F7F7] border-b border-gray-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="NorthLight Consulting Global"
            width={120}
            height={48}
            className="h-12 w-auto object-contain rounded-md"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-800 hover:text-brand-purple transition-colors duration-200 font-medium text-sm">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-brand-purple transition-colors duration-200 font-medium text-sm">About</Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center gap-1 text-gray-800 hover:text-brand-purple transition-colors duration-200 font-medium text-sm">
              Services <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2 mt-1"
                >
                  {services.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-brand-purple hover:text-white transition-colors duration-150"
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/portfolio" className="text-gray-800 hover:text-brand-purple transition-colors duration-200 font-medium text-sm">Portfolio</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-brand-purple hover:bg-brand-purpleDeep text-white font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm"
        >
          Get a Free Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-y-auto max-h-screen bg-[#F7F7F7] border-t border-gray-200"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="/" className="text-gray-800 font-medium py-2 border-b border-gray-200" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-800 font-medium py-2 border-b border-gray-200" onClick={() => setMobileOpen(false)}>About</Link>

              {/* Services accordion */}
              <div className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between text-gray-800 font-medium py-2"
                  onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                >
                  Services <ChevronDown size={16} className={`transition-transform ${servicesAccordionOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesAccordionOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {services.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="text-gray-600 hover:text-brand-purple py-1.5 text-sm transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className="text-gray-800 font-medium py-2 border-b border-gray-200" onClick={() => setMobileOpen(false)}>Portfolio</Link>

              <Link
                href="#contact"
                className="bg-brand-purple text-white font-semibold px-5 py-3 rounded-full text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
