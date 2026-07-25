export default function QuickProjectInfo({ project }) {
  const { items } = project.quickInfo;

  return (
    <section className="relative z-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto -mt-16 sm:-mt-20 relative">
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-2xl px-6 sm:px-10 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {items.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-md bg-[#F8F8F6] border border-[#E5E7EB] mb-4">
                  {icon}
                </div>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#1A1A1A]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}