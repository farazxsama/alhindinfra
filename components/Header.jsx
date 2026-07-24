'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const ongoingProjects = [
  { name: 'HillTop City Phase 1', href: '/ongoing/hilltop-1' },
  { name: 'HillTop City Phase 3', href: '/ongoing/hilltop-3' },
  { name: 'Global City Phase 1', href: '/ongoing/global-city' },
  { name: 'Global City Phase 2', href: '/ongoing/global-2' },
  { name: 'Regional City', href: '/ongoing/regional-city' },

];

const completedProjects = [
  { name: 'Royal Enclave', href: '/completed-projects/royal-enclave' },
  { name: 'Golden Meadows', href: '/completed-projects/golden-meadows' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  const linkColor = scrolled ? 'text-[#111111]' : 'text-white';

  return (
    <header
      className={`fixed  top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <Image
              src="/img/al-hind-logo.png"
              alt="Al Hind Infra Logo"
              width={110}
              height={100}
              priority
              className="object-cover"
            />

          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A227] ${linkColor}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/ongoing"
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A227] ${linkColor}`}
              >
                Ongoing Projects
                <FiChevronDown size={14} />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 w-56">
                  {ongoingProjects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block px-5 py-2.5 text-sm text-[#111111] hover:text-[#C9A227] hover:bg-[#F8F8F6] transition-colors duration-300"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/completed"
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A227] ${linkColor}`}
              >
                Completed Projects
                <FiChevronDown size={14} />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 w-56">
                  {completedProjects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block px-5 py-2.5 text-sm text-[#111111] hover:text-[#C9A227] hover:bg-[#F8F8F6] transition-colors duration-300"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A227] ${linkColor}`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A227] ${linkColor}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-300"
            >
              <FiPhone size={16} />
              Call Now
            </a>
            {/* <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300 ${
                scrolled
                  ? 'border-[#E5E7EB] text-[#111111] hover:border-[#C9A227] hover:text-[#C9A227]'
                  : 'border-white/40 text-white hover:border-[#C9A227] hover:text-[#C9A227]'
              }`}
            >
              <FaWhatsapp size={18} />
            </a> */}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden transition-colors duration-300 ${linkColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-[#111111] border-b border-[#E5E7EB]"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-b border-[#E5E7EB]">
              <button
                onClick={() => toggleMobileDropdown('ongoing')}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-[#111111]"
              >
                Ongoing Projects
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${mobileDropdown === 'ongoing' ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {mobileDropdown === 'ongoing' && (
                <div className="pb-3 pl-4 flex flex-col">
                  {ongoingProjects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-[#6B7280] hover:text-[#C9A227]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-[#E5E7EB]">
              <button
                onClick={() => toggleMobileDropdown('completed')}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-[#111111]"
              >
                Completed Projects
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${mobileDropdown === 'completed' ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {mobileDropdown === 'completed' && (
                <div className="pb-3 pl-4 flex flex-col">
                  {completedProjects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-[#6B7280] hover:text-[#C9A227]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-[#111111] border-b border-[#E5E7EB]"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-[#111111] border-b border-[#E5E7EB]"
            >
              Contact
            </Link>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="tel:+911234567890"
                className="flex-1 flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-white text-sm font-medium px-5 py-3 rounded-md transition-colors duration-300"
              >
                <FiPhone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-md border border-[#E5E7EB] text-[#111111] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}