import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowRight,
  FiMapPin,
  FiFileText,
  FiTrendingUp,
  FiShield,
} from 'react-icons/fi';

const features = [
  {
    icon: FiMapPin,
    title: "Prime Locations",
  },
  {
    icon: FiFileText,
    title: "Clear Legal Documentation",
  },
  {
    icon: FiTrendingUp,
    title: "High Investment Potential",
  },
  {
    icon: FiShield,
    title: "Trusted & Transparent",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[5/6] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
              alt="Al Hind Infra premium residential project"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
              <span className="w-6 h-px bg-[#C9A227]" />
              About Al Hind Infra
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-6">
              Own Premium Plots
              <br />
              Shape Your <span className="text-[#C9A227]">Future</span>.
            </h2>

            <p className="text-[#6B7280] text-base leading-relaxed mb-10 max-w-xl">
              Al Hind Infra offers premium residential plots in strategically located layouts near Hyderabad. With clear legal documentation, excellent connectivity, and strong investment potential, we help you secure a valuable future.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">
              {features.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-lg p-4 sm:p-5 hover:border-[#C9A227] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#F8F8F6] shrink-0">
                    <Icon className="text-[#C9A227]" size={18} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A] leading-tight pt-2">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
            >
              Learn More About Us
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}