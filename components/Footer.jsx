import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaCity } from 'react-icons/fa';

const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/ongoing-projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

const projectLinks = [
    { name: 'Ongoing Projects', href: '/ongoing-projects' },
    { name: 'Completed Projects', href: '/completed-projects' },
];

const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
];

export default function Footer() {
    return (
        <footer className="bg-[#111111] pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 lg:gap-8 pb-14 border-b border-white/10">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/img/al-hind-logo.png"
                                alt="Al Hind Infra Logo"
                                width={110}
                                height={100}
                                priority
                                className="object-cover"
                            />
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                            Crafting distinguished residences and commercial spaces where
                            timeless design meets modern living.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
                            Company
                        </h4>
                        <ul className="space-y-3.5">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
                            Projects
                        </h4>
                        <ul className="space-y-3.5">
                            {projectLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4 mb-7">
                            <li className="flex items-start gap-3">
                                <FiPhone className="text-[#C9A227] mt-0.5 shrink-0" size={16} />
                                <a
                                    href="tel:+919876543210"
                                    className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-300"
                                >
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMail className="text-[#C9A227] mt-0.5 shrink-0" size={16} />
                                <a
                                    href="mailto:info@alhindinfra.com"
                                    className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-300"
                                >
                                    info@alhindinfra.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-[#C9A227] mt-0.5 shrink-0" size={16} />
                                <span className="text-sm text-white/60 leading-relaxed">
                                    Plot No. 24, Financial District, Shamshabad, Hyderabad,
                                    Telangana
                                </span>
                            </li>
                        </ul>

                        <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ name, icon: Icon, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-white/70 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-300"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-xs text-white/50 text-center sm:text-left">
                        © 2026 Al Hind Infra. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-[#C9A227] transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-white/20">|</span>
                        <Link
                            href="/terms-and-conditions"
                            className="hover:text-[#C9A227] transition-colors duration-300"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}