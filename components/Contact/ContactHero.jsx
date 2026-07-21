import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[50vh] min-h-[380px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="Premium plotted development near Hyderabad"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mt-5 mb-5 w-fit">
          <span className="w-6 h-px bg-[#C9A227]" />
          Get In Touch
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-2xl">
          Let&apos;s Start the Conversation
        </h1>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
          Have questions about our premium plotted developments or planning
          your next investment? Our team is here to help you with every
          step, from project information to site visits.
        </p>
      </div>
    </section>
  );
}