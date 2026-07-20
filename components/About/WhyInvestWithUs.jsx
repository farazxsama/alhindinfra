import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const highlights = [
    'Prime Locations',
    'Clear Legal Documentation',
    'High Growth Potential',
    'Trusted Development',
    'Modern Infrastructure',
    'Excellent Customer Support',
];

export default function WhyInvestWithUs() {
    return (
        <section className="bg-[#F8F8F6] py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center mb-16">
                    <div>
                        <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
                            <span className="w-6 h-px bg-[#C9A227]" />
                            Why Invest With Al Hind Infra
                        </span>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-6">
                            Why Choose <span className="text-[#C9A227]">Al Hind Infra?</span>
                        </h2>

                        <p className="text-[#6B7280] text-base leading-relaxed max-w-lg mb-9">
                            We go beyond construction to deliver investments you can trust.
                            Every project we undertake is backed by careful planning,
                            complete transparency and a genuine commitment to long-term
                            value for our customers.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A227]/10 shrink-0">
                                        <FiCheck className="text-[#C9A227]" size={14} />
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-[#1A1A1A]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[520px]">
                        <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern residential tower"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-lg overflow-hidden shadow-xl border-4 border-[#F8F8F6]">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop"
                                alt="Landscaped residential community"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/ongoing-projects"
                        className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
                    >
                        Explore Our Projects
                        <FiArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}