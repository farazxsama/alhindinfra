'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

const tabs = [
  { key: 'photos', label: 'Photos' },
  { key: 'videos', label: 'Videos' },
  { key: 'masterPlan', label: 'Master Plan' },
];

export default function ProjectGallery({ project }) {
  const { photos = [], videos = [], masterPlan = [] } = project.gallery;
  const [activeTab, setActiveTab] = useState('photos');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const dataMap = { photos, videos, masterPlan };
  const activeItems = dataMap[activeTab];
  const isVideoTab = activeTab === 'videos';

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () =>
    setLightboxIndex((prev) => (prev === 0 ? activeItems.length - 1 : prev - 1));
  const showNext = () =>
    setLightboxIndex((prev) => (prev === activeItems.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeItems.length]);

  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A]">
            Project Gallery
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm font-medium px-6 py-2.5 rounded-md border transition-colors duration-300 ${
                activeTab === tab.key
                  ? 'bg-[#C9A227] border-[#C9A227] text-[#111111]'
                  : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#C9A227] hover:text-[#1A1A1A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeItems.length === 0 ? (
          <p className="text-center text-[#6B7280] text-sm">
            No {tabs.find((t) => t.key === activeTab)?.label.toLowerCase()} added yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {activeItems.map((item, index) => (
              <button
                key={item.thumbnail || item.src}
                onClick={() => openLightbox(index)}
                className="group relative w-full aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={isVideoTab ? item.thumbnail : item.src}
                  alt={item.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {isVideoTab && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90">
                      <FiPlay className="text-[#111111] ml-0.5" size={22} />
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-[#C9A227] transition-colors duration-300"
            aria-label="Close"
          >
            <FiX size={28} />
          </button>

          {activeItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 sm:left-8 text-white/70 hover:text-[#C9A227] transition-colors duration-300"
                aria-label="Previous"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 sm:right-8 text-white/70 hover:text-[#C9A227] transition-colors duration-300"
                aria-label="Next"
              >
                <FiChevronRight size={32} />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideoTab ? (
              <video
                key={activeItems[lightboxIndex].src}
                src={activeItems[lightboxIndex].src}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            ) : (
              <Image
                src={activeItems[lightboxIndex].src}
                alt={activeItems[lightboxIndex].alt || 'Gallery image'}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}