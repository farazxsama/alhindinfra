import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiTarget, FiEye } from 'react-icons/fi';

export default function AboutIntro() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                    <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[5/6] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
                            alt="Al Hind Infra corporate office and premium development"
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
                            Who <span className="text-[#C9A227]">We Are</span>
                        </h2>

                        <div className="space-y-4 mb-10">
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Al Hind Infra was established with a clear vision to make land ownership simple, secure, and rewarding. We specialize in offering premium residential plots in carefully selected locations, helping individuals and families invest in opportunities that deliver long-term value and future growth.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Every project is thoughtfully planned with a strong focus on clear legal documentation, strategic locations, and customer satisfaction. We believe that purchasing land is one of life's most important investments, and our commitment is to make that journey transparent, reliable, and hassle-free.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Whether you're planning to build your dream home or looking for a smart real estate investment, Al Hind Infra provides well-planned plotted developments designed to meet your aspirations today while creating value for tomorrow.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                With integrity, professionalism, and a customer-first approach at the heart of everything we do, we continue to build lasting relationships by helping our clients invest with confidence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-lg p-6 hover:border-[#C9A227] transition-colors duration-300">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white border border-[#E5E7EB] mb-5">
                                    <FiTarget className="text-[#C9A227]" size={20} />
                                </div>
                                <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">
                                    Our Mission
                                </h3>
                                <p className="text-sm text-[#6B7280] leading-relaxed">
                                    To provide premium plotted developments with transparent processes, verified legal documentation, and strategic locations that empower our customers to invest with complete confidence.
                                </p>
                            </div>

                            <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-lg p-6 hover:border-[#C9A227] transition-colors duration-300">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white border border-[#E5E7EB] mb-5">
                                    <FiEye className="text-[#C9A227]" size={20} />
                                </div>
                                <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">
                                    Our Vision
                                </h3>
                                <p className="text-sm text-[#6B7280] leading-relaxed">
                                    To become a trusted name in plotted developments by delivering exceptional investment opportunities, maintaining the highest standards of transparency, and creating lasting value for every customer.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/ongoing-projects"
                            className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
                        >
                            Explore Projects
                            <FiArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}