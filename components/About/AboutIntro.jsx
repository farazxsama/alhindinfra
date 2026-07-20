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
                                Al Hind Infra was founded with a singular purpose: to bring
                                genuine quality and transparency to real estate development.
                                What began as a small team with a vision has grown into a
                                name trusted across residential and commercial landscapes.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Over the years, we have delivered premium townships,
                                residences and commercial spaces, each shaped by careful
                                planning, honest documentation and a deep respect for the
                                people who invest their trust in us.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Every project we undertake is guided by three principles:
                                enduring quality, complete transparency and long-term value
                                for our customers. We believe a home or an investment should
                                never come with uncertainty.
                            </p>
                            <p className="text-[#6B7280] text-base leading-relaxed">
                                Today, Al Hind Infra continues to expand its footprint,
                                building landmarks that stand as a reflection of our
                                commitment to craftsmanship and integrity.
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
                                    To deliver premium, transparent and trustworthy real
                                    estate developments that create lasting value for every
                                    customer.
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
                                    To be recognized as a leading developer known for
                                    landmark projects, ethical practices and enduring
                                    customer trust.
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