'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Site Views', 'Layouts', 'Roads', 'Amenities', 'Drone Views'];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop',
    alt: 'Aerial view of plotted development',
    category: 'Drone Views',
  },
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
    alt: 'Internal road network',
    category: 'Roads',
  },
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=900&auto=format&fit=crop',
    alt: 'Landscaped entrance arch',
    category: 'Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    alt: 'Marked residential plot layout',
    category: 'Layouts',
  },
  {
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop',
    alt: 'Site view of open plots',
    category: 'Site Views',
  },
  {
    src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=900&auto=format&fit=crop',
    alt: 'Paved road with street lighting',
    category: 'Roads',
  },
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop',
    alt: 'Compound wall and entrance gate',
    category: 'Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    alt: 'Layout plan markers on site',
    category: 'Layouts',
  },
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
    alt: 'Wide site view of development',
    category: 'Site Views',
  },
  {
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
    alt: 'Drone view of landscaped township',
    category: 'Drone Views',
  },
];

const spanPattern = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-4 row-span-1',
];

export default function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Project Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-5">
            Moments That
            <br />
            Reflect Our Commitment
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed max-w-2xl">
            Browse through images of our plotted developments, site
            infrastructure, road networks, landscaped surroundings, and
            project highlights that showcase the quality and planning
            behind every layout.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium px-5 py-2.5 rounded-md border transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#C9A227] border-[#C9A227] text-[#111111]'
                  : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#C9A227] hover:text-[#1A1A1A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[200px] gap-4 grid-flow-dense">
          {filteredImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className={`group relative rounded-lg overflow-hidden ${
                spanPattern[index % spanPattern.length]
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <span className="absolute bottom-3 left-4 text-white text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}