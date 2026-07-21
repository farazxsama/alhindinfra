import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiHome, FiMapPin, FiFileText, FiTrendingUp } from 'react-icons/fi';

const expertiseFeatures = [
  {
    icon: FiHome,
    title: 'Premium Plots',
    description: 'Carefully planned residential plots designed for comfortable living and long-term value.',
  },
  {
    icon: FiMapPin,
    title: 'Prime Locations',
    description: 'Plots located in fast-growing areas with excellent connectivity and future potential.',
  },
  {
    icon: FiFileText,
    title: 'Verified Documentation',
    description: 'Clear legal titles and transparent documentation for a secure buying experience.',
  },
  {
    icon: FiTrendingUp,
    title: 'High Appreciation',
    description: 'Investment-ready plots with strong potential for long-term value and returns.',
  },
];

export default function OurExpertise() {
  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[5/6] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1400&auto=format&fit=crop"
              alt="Premium plotted residential development"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
              <span className="w-6 h-px bg-[#C9A227]" />
              Our Expertise
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-6">
              Helping You Make{' '}
              <span className="text-[#C9A227]">Smarter Land Investments</span>
            </h2>

            <p className="text-[#6B7280] text-base leading-relaxed max-w-xl mb-10">
              Al Hind Infra specializes in offering premium residential plots in carefully selected locations with excellent growth potential. Our focus is on providing legally verified plots, transparent documentation, and thoughtfully planned layouts that give every customer complete confidence in their investment.

              Whether you're purchasing land to build your dream home or to secure your financial future, our expertise ensures a seamless and trustworthy buying experience from inquiry to ownership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {expertiseFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:border-[#C9A227] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F8F8F6] border border-[#E5E7EB] mb-5">
                    <Icon className="text-[#C9A227]" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/ongoing-projects"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
            >
              Explore Our Projects
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}