import {
  FiAward,
  FiMapPin,
  FiFileText,
  FiZap,
  FiHeart,
} from 'react-icons/fi';
import { FaHandshake } from "react-icons/fa";

const coreValues = [
  {
    icon: FiAward,
    title: 'Quality Construction',
    description:
      'Every project is built using premium materials and rigorous quality checks at each stage.',
  },
  {
    icon: FaHandshake,
    title: 'Transparency',
    description:
      'Honest communication and clear processes with no hidden terms, from booking to handover.',
  },
  {
    icon: FiMapPin,
    title: 'Prime Locations',
    description:
      'Every development is chosen for strong connectivity and long-term growth potential.',
  },
  {
    icon: FiFileText,
    title: 'Legal Documentation',
    description:
      'Fully approved layouts with clear titles, giving customers complete peace of mind.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description:
      'Modern design and planning practices that shape spaces for how people live today.',
  },
  {
    icon: FiHeart,
    title: 'Customer Satisfaction',
    description:
      'A customer-first approach that guides every decision, from design to delivery.',
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            What We Stand For
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A]">
            Our <span className="text-[#C9A227]">Core Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-lg p-8 hover:border-[#C9A227] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-md bg-white border border-[#E5E7EB] mb-6">
                <Icon className="text-[#C9A227]" size={24} />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">
                {title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}