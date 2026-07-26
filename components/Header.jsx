'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiPhone,
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiInfo,
  FiTrendingUp,
  FiCheckCircle,
  FiImage,
  FiMail,
} from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'About', href: '/about', icon: FiInfo },
];

const ongoingProjects = [
  { name: 'HillTop City Phase 1', href: '/ongoing/hilltop-1' },
  { name: 'HillTop City Phase 3', href: '/ongoing/hilltop-3' },
  { name: 'Global City Phase 1', href: '/ongoing/global-city' },
  { name: 'Global City Phase 2', href: '/ongoing/global-2' },
  { name: 'Regional City', href: '/ongoing/regional-city' },
];

const completedProjects = [
  { name: 'Imperial City', href: '/completed/imperial-city' },
  { name: 'Crystal City Project', href: '/completed/crystal-city' },
  { name: 'Hilton City', href: '/completed/hilton-city' },
  { name: 'Express City', href: '/completed/express-city' },
  { name: 'Highway City', href: '/completed/highway-city' },
  { name: 'Highway City Phase 2', href: '/completed/highway-phase-2' },
  { name: 'Silver City', href: '/completed/silver-city' },
  { name: 'Future City', href: '/completed/future-city' },
  { name: 'Pearl City', href: '/completed/pearl-city' },
  { name: 'Peace City', href: '/completed/peace-city' },
  { name: 'Prime City', href: '/completed/prime-city' },
  { name: 'Falcon City', href: '/completed/falcon-city' },
  { name: 'Dream Home', href: '/completed/dream-home' },
  { name: 'Regional City', href: '/completed/regional-city' },
  { name: 'Natural City', href: '/completed/natural-city' },
  { name: 'Falcon City Phase 4', href: '/completed/falcon-phase-4' },
];

function MobileDrawer({ mobileOpen, setMobileOpen }) {
  return createPortal(
    <div
      className={`lg:hidden fixed inset-0 z-[999] bg-[#0D0D0D] h-[100dvh] w-screen transition-opacity duration-300 ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-6 h-20 shrink-0 border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
            <Image
              src="/img/al-hind-logo-2.png"
              alt="Al Hind Infra Logo"
              width={50}
              height={100}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-[#C9A227]"
            aria-label="Close menu"
          >
            <FiX size={26} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pt-6 pb-8 px-6">
          <nav className="flex flex-col">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 py-4 border-b border-white/10 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                  <Icon className="text-[#C9A227]" size={17} />
                </span>
                <span className="text-lg font-serif text-white group-hover:text-[#C9A227] transition-colors duration-300">
                  {name}
                </span>
              </Link>
            ))}

            <div className="border-b border-white/10 py-4">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 shrink-0">
                  <FiTrendingUp className="text-[#C9A227]" size={17} />
                </span>
                <Link
                  href="/ongoing"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-serif text-white hover:text-[#C9A227] transition-colors duration-300"
                >
                  Ongoing Projects
                </Link>
              </div>
              <div className="pl-14 flex flex-col gap-0.5 max-h-40 overflow-y-auto">
                {ongoingProjects.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-white/50 hover:text-[#C9A227] transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-b border-white/10 py-4">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 shrink-0">
                  <FiCheckCircle className="text-[#C9A227]" size={17} />
                </span>
                <Link
                  href="/completed"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-serif text-white hover:text-[#C9A227] transition-colors duration-300"
                >
                  Completed Projects
                </Link>
              </div>
              <div className="pl-14 flex flex-col gap-0.5 max-h-40 overflow-y-auto">
                {completedProjects.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-white/50 hover:text-[#C9A227] transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-4 py-4 border-b border-white/10 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                <FiImage className="text-[#C9A227]" size={17} />
              </span>
              <span className="text-lg font-serif text-white group-hover:text-[#C9A227] transition-colors duration-300">
                Gallery
              </span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-4 py-4 border-b border-white/10 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                <FiMail className="text-[#C9A227]" size={17} />
              </span>
              <span className="text-lg font-serif text-white group-hover:text-[#C9A227] transition-colors duration-300">
                Contact
              </span>
            </Link>
          </nav>
        </div>

        <div className="px-6 pb-8 pt-4 border-t border-white/10 shrink-0">
          <a
            href="tel:+911234567890"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide py-4 rounded-md transition-colors duration-300"
          >
            <FiPhone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isSolid = scrolled || mobileOpen;
  const linkColor = isSolid ? 'text-[#111111]' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isSolid ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <Image
              src="/img/al-hind-logo-2.png"
              alt="Al Hind Infra Logo"
              width={50}
              height={100}
              priority
              className="object-contain"
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
                <div className="bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 w-56 max-h-80 overflow-y-auto">
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
                <div className="bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 w-56 max-h-80 overflow-y-auto">
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
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden transition-colors duration-300 ${
              mobileOpen ? 'text-[#C9A227]' : linkColor
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {mounted && <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />}
    </header>
  );
}