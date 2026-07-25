import { FiMapPin, FiClock } from 'react-icons/fi';
import { MdOutlineFlight, MdOutlineSchool, MdOutlineLocalHospital, MdOutlineTram, MdOutlineAltRoute, MdOutlineBusinessCenter } from 'react-icons/md';

const iconMap = {
  airport: MdOutlineFlight,
  schools: MdOutlineSchool,
  hospitals: MdOutlineLocalHospital,
  metro: MdOutlineTram,
  orr: MdOutlineAltRoute,
  itParks: MdOutlineBusinessCenter,
};

export default function LocationConnectivity({ project }) {
  const { items, mapEmbedUrl } = project.location;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
              <span className="w-6 h-px bg-[#C9A227]" />
              Location & Connectivity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-9">
              Location Advantages
            </h2>

            <div className="space-y-4">
              {items.map(({ type, label, duration }) => {
                const Icon = iconMap[type] || FiMapPin;
                return (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 bg-[#F8F8F6] border border-[#E5E7EB] rounded-lg px-5 py-4 hover:border-[#C9A227] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-11 h-11 rounded-md bg-white border border-[#E5E7EB] shrink-0">
                        <Icon className="text-[#C9A227]" size={20} />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#1A1A1A]">
                        {label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#C9A227] shrink-0">
                      <FiClock size={14} />
                      {duration}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-[420px] sm:h-[480px] lg:h-full lg:min-h-[560px] rounded-lg overflow-hidden border border-[#E5E7EB] shadow-lg">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}