import {
  FiMapPin,
  FiFileText,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
} from 'react-icons/fi';
import { PiRoadHorizonBold } from 'react-icons/pi';

const reasons = [
  {
    icon: FiMapPin,
    title: 'Premium Locations',
  },
  {
    icon: FiFileText,
    title: 'Clear & Legal Documentation',
  },
  {
    icon: PiRoadHorizonBold,
    title: 'Modern Infrastructure',
  },
  {
    icon: FiTrendingUp,
    title: 'High Investment Potential',
  },
  {
    icon: FiUsers,
    title: 'Trusted Company',
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Pricing',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111111] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Why Choose Al Hind Infra
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-white">
            Why People <span className="text-[#C9A227]">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {reasons.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-4 py-8 px-4 border border-white/10 rounded-lg hover:border-[#C9A227] transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#C9A227]/40">
                <Icon className="text-[#C9A227]" size={26} />
              </div>
              <span className="text-sm font-medium text-white leading-snug">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}