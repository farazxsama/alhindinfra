import Image from 'next/image';
import { FiMapPin, FiSquare, FiCheckCircle, FiCalendar, FiDownload } from 'react-icons/fi';

export default function ProjectHero({ project }) {

  // const {
  //   status = 'Ongoing',
  //   name = 'Al Hind Green City',
  //   description = 'Premium HMDA-approved plotted development in a fast-growing investment corridor.',
  //   location = 'Shamshabad',
  //   plotSize = '150–500 Sq. Yards',
  //   approval = 'HMDA Approved',
  //   bannerImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop',
  //   priceLabel = 'Starting From',
  //   price = '₹8,500 / Sq. Yard',
  //   priceNote = 'Ready For Registration',
  //   brochureUrl = '#',
  // } = project || {};

  return (
    <section className="relative w-full h-[65vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop'
          alt='dummy'
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 w-full items-end lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#C9A227] text-[#111111] text-[10px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              {project.hero.status} Project
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 max-w-2xl">
              {project.name}
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              {project.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-9">
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <FiMapPin className="text-[#C9A227]" size={16} />
                {project.hero.location}
              </div>
              {/* <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <FiSquare className="text-[#C9A227]" size={16} />
                {project.hero.plotSize}
              </div> */}
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <FiCheckCircle className="text-[#C9A227]" size={16} />
                {project.hero.approval}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#A67C00] text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
              >
                <FiCalendar size={16} />
                Book Site Visit
              </a>
              <a
                href={project.hero.brochureUrl}
                className="inline-flex items-center gap-2 bg-black/30 border border-white/40 hover:border-[#C9A227] hover:text-[#C9A227] text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
              >
                <FiDownload size={16} />
                Download Brochure
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs lg:ml-auto lg:mb-0 mb-2">
            <div className="bg-black/50 backdrop-blur-md border border-[#C9A227]/30 rounded-lg p-7 sm:p-8">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-3">
                {project.hero.priceLabel}
              </p>
              <p className="font-serif text-3xl sm:text-4xl text-[#C9A227] mb-3">
                {project.hero.price}
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <FiCheckCircle className="text-[#C9A227]" size={14} />
                {project.hero.priceNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}