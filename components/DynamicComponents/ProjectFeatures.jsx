import { FiCheck } from 'react-icons/fi';

export default function ProjectFeatures({ project }) {
  const { items } = project.features;

  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Project Features
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A]">
            Everything Built for{' '}
            <span className="text-[#C9A227]">Quality Living</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-lg p-5 hover:border-[#C9A227] transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C9A227]/10 shrink-0">
                <FiCheck className="text-[#C9A227]" size={16} />
              </span>
              <span className="text-sm sm:text-base font-medium text-[#1A1A1A]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}