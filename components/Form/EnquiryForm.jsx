'use client';

import { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiShield } from 'react-icons/fi';

export default function EnquiryForm({
  variant = 'light', // 'light' | 'dark'
  title = 'Enquiry Form',
  buttonText = 'Submit Enquiry',
  note = 'Our team will contact you within 24 hours.',
  className = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === 'dark';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const containerClasses = isDark
    ? 'bg-black/80 backdrop-blur-md border border-white/10'
    : 'bg-white border border-[#E5E7EB]';

  const titleClasses = isDark ? 'text-white' : 'text-[#1A1A1A]';

  const inputClasses = isDark
    ? 'bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-[#C9A227] focus:ring-[#C9A227]'
    : 'bg-[#F8F8F6] border border-[#E5E7EB] text-[#1A1A1A] placeholder:text-[#6B7280] focus:border-[#C9A227] focus:ring-[#C9A227]';

  const iconClasses = isDark ? 'text-white/40' : 'text-[#6B7280]';
  const noteClasses = isDark ? 'text-white/60' : 'text-[#6B7280]';

  return (
    <div
      className={`rounded-lg shadow-2xl p-4 sm:p-6 ${containerClasses} ${className}`}
    >
      <h3 className={`font-serif text-2xl mb-6 ${titleClasses}`}>{title}</h3>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div className="relative">
          <FiUser
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClasses}`}
          />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={`w-full pl-11 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${inputClasses}`}
          />
        </div>

        <div className="relative">
          <FiPhone
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClasses}`}
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone *"
            className={`w-full pl-11 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${inputClasses}`}
          />
        </div>

        <div className="relative">
          <FiMail
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconClasses}`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (Optional)"
            className={`w-full pl-11 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 ${inputClasses}`}
          />
        </div>

        <div className="relative">
          <FiMessageSquare
            size={18}
            className={`absolute left-4 top-4 ${iconClasses}`}
          />
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message (Optional)"
            className={`w-full pl-11 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 transition-colors duration-300 resize-none ${inputClasses}`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide py-3.5 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
        >
          {buttonText}
        </button>

        {submitted ? (
          <p className="text-sm text-[#C9A227] text-center pt-1">
            Thank you. Our team will reach out shortly.
          </p>
        ) : (
          note && (
            <p className={`flex items-center justify-center gap-2 text-xs pt-1 ${noteClasses}`}>
              <FiShield className="text-[#C9A227]" size={14} />
              {note}
            </p>
          )
        )}
      </form>
    </div>
  );
}