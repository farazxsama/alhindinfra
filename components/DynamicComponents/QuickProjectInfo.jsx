export default function QuickProjectInfo({ project }) {
  const { items } = project.quickInfo;

  return (
    <section className="bg-[#111111] px-6 lg:px-10 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:divide-x sm:divide-white/10">
          {items.slice(0, 4).map(({ icon, label, value }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center`}
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-md bg-white/5 border border-white/10 mb-4">
                {icon}
              </div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1.5">
                {label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#C9A227]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}