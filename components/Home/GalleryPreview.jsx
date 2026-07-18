import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Residential towers at dusk',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    alt: 'High-rise apartment exterior',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    alt: 'Villa entrance',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
    alt: 'Landscaped villa garden',
    className: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern living room interior',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Gated community street',
    className: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    alt: 'Apartment balcony view',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop',
    alt: 'Township road view',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=800&auto=format&fit=crop',
    alt: 'Premium residence at night',
    className: 'col-span-1 row-span-1',
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A]">
            A Glimpse Into Our <span className="text-[#C9A227]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[200px] gap-4 grid-flow-dense">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#C9A227] hover:text-[#111111] text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
          >
            View Gallery
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}