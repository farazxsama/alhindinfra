

export default function ContactHero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[50vh] min-h-[380px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mt-5 mb-5 w-fit">
          <span className="w-6 h-px bg-[#C9A227]" />
          ABOUT AL HIND INFRA
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-2xl">
          Your Trusted Partner
        </h1>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
          Discover our commitment to delivering premium plotted layouts with prime locations, transparent processes, and trusted investment opportunities.
        </p>
      </div>
    </section>
  );
}