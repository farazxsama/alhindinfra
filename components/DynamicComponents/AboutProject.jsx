import EnquiryForm from '@/components/Form/EnquiryForm';

export default function AboutProject({ project }) {
  const { name } = project;
  const { paragraphs } = project.about;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-8">
              About {name}
            </h2>

            <div className="space-y-5">
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-[#6B7280] text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <EnquiryForm
              variant="light"
              title="Enquiry Form"
              buttonText="Book Site Visit"
              note="Our team will contact you within 24 hours."
            />
          </div>
        </div>
      </div>
    </section>
  );
}