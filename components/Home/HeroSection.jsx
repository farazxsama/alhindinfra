import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import EnquiryForm from '@/components/Form/EnquiryForm';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/img/hero-banner-3.png"
                    alt="Premium residential Building"
                    fill
                    priority
                    className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div> */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.70)_20%,rgba(0,0,0,0.60)_50%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-16 lg:pt-24 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">
                    <div className="max-w-xl">
                        <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-6">
                            <span className="w-6 h-px bg-[#C9A227]" />
                            PREMIUM PLOTTED DEVELOPMENTS
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6">
                            <span className="text-white">Own Premium Plots,</span>
                            <br />
                            <span className="text-[#C9A227]">Build</span>{' '}
                            <span className="text-white">Your Future</span>
                        </h1>
                        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                            Discover legally verified residential plots in prime locations near Hyderabad. Invest with confidence in thoughtfully planned layouts offering excellent connectivity and long-term value.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/ongoing-projects"
                                className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
                            >
                                Explore Projects
                                <FiArrowRight size={16} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-black/30 border border-white/40 hover:border-[#C9A227] hover:text-[#C9A227] text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
                            >
                                Contact Us
                                <FiArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full max-w-md lg:ml-auto">
                        <EnquiryForm
                            variant="dark"
                            title={
                                <>
                                    Get a Free{' '}
                                    <span className="text-[#C9A227]">Consultation</span>
                                </>
                            }
                            buttonText="Submit Enquiry"
                            note="Our team will contact you within 24 hours."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}