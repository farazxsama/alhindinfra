import { FiPhone } from 'react-icons/fi';

export default function CallButton() {
  return (
    <a
      href="tel:+919391000156"
      aria-label="Call us"
      className="lg:hidden fixed bottom-6 left-6 z-50 flex items-center justify-center w-13 h-13 rounded-full bg-[#1877F2] shadow-lg hover:bg-[#1565D8] transition-colors duration-300"
    >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(0,0,255,0.30)" }}
        />
      <FiPhone className="text-white" size={22} />
    </a>
  );
}