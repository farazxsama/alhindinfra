import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const contactDetails = [
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'info@alhindinfra.com',
    href: 'mailto:info@alhindinfra.com',
  },
  {
    icon: FiMapPin,
    label: 'Office Address',
    value: 'Plot No. 24, Financial District, Shamshabad, Hyderabad, Telangana',
    href: null,
  },
];

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-stretch">
          <div>
            <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
              <span className="w-6 h-px bg-[#C9A227]" />
              Get In Touch
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-6">
              Let&apos;s Help You Find the{' '}
              <span className="text-[#C9A227]">Right Investment</span>
            </h2>

            <p className="text-[#6B7280] text-base leading-relaxed mb-10 max-w-lg">
              Whether you&apos;re looking for a dream home or a high-potential
              investment, our team is here to guide you through every step,
              from site visits to final documentation.
            </p>

            <div className="space-y-6 mb-10">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F8F8F6] border border-[#E5E7EB] shrink-0">
                    <Icon className="text-[#C9A227]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#1A1A1A] text-sm sm:text-base font-medium hover:text-[#C9A227] transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#1A1A1A] text-sm sm:text-base font-medium max-w-sm">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-sm font-semibold tracking-wide px-7 py-3.5 rounded-md transition-colors duration-300"
            >
              View on Google Maps
              <FiExternalLink size={16} />
            </a>
          </div>

          <div className="relative bg-[#111111] rounded-lg p-10 sm:p-12 flex flex-col justify-center overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-[#C9A227]/20" />
            <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full border border-[#C9A227]/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
                <span className="w-6 h-px bg-[#C9A227]" />
                Take The Next Step
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
                Ready to Invest?
              </h3>

              <p className="text-white/70 text-base leading-relaxed mb-10 max-w-sm">
                Speak with our advisory team today and discover the right
                property for your future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-7 py-4 rounded-md transition-colors duration-300"
                >
                  <FiPhone size={16} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A227] hover:text-[#C9A227] text-white text-sm font-semibold tracking-wide px-7 py-4 rounded-md transition-colors duration-300"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}