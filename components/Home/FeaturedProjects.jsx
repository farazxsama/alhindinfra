'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const ongoingProjects = [
  {
    id: 'hilltop-1',
    name: 'HillTop City Phase 1',
    location: 'Mariyapur Village, Shabad',
    description:
      'HillTop City Phase I is one of the latest residential projects launched by Al Hind Infra. It is located in the Shabad vicinity.',
    image:
      '/img/ongoing/hilltop-city-phase-1/hilltop1-aerial.jpg',
    status: 'Ongoing',
  },
  {
    id: 'hilltop-3',
    name: 'HillTop City Phase 3',
    location: 'Mariyapur Village, Shabad',
    description:
      'HillTop City Phase III is one of the latest residential projects launched by Al Hind Infra. It is located in the Shabad vicinity.',
    image:
      '/img/ongoing/hill-city-phase-3/hilltop3-1.jpg',
    status: 'Ongoing',
  },
  {
    id: 'global-city',
    name: 'Global City Phase 1',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Al Hind Infra presents their latest project - Global City Phase 1. This brand-new project offers you attractive, highway-facing plots for sale.',
    image:
      '/img/ongoing/global-city-phase-1/global-city-1.jpg',
    status: 'Ongoing',
  },
];

const completedProjects = [
  {
    id: 'imperial-city',
    name: 'Imperial City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Rs 6000 /- Per Sq. Yard with EMI | Gated Community Plot for Sale | Ten Years of Security',
    image:
      '/img/completed/imperial-city/imperial-1.jpg',
    status: 'Completed',
  },
  {
    id: 'crystal-city',
    name: 'Crystal City Project',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Al Hind Infra proudly presents its latest venture "Crystal City".',
    image:
      '/img/completed/crystal-city/highway-city-new.jpg',
    status: 'Completed',
  },
  {
    id: 'hilton-city',
    name: 'Hilton City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'We bring you safe and secure plots near Shamshabad, an excellent investment opportunity for your future.',
    image:
      '/img/completed/hilton-city/hilton-city-2.jpg',
    status: 'Completed',
  },
];

function ProjectCard({ project }) {
  const isOngoing = project.status === 'Ongoing';

  return (
    <div className="group bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
        <span
          className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${isOngoing
              ? 'bg-[#C9A227] text-[#111111]'
              : 'bg-[#111111] text-white'
            }`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-[#6B7280] mb-3">
          <FiMapPin size={14} className="text-[#C9A227]" />
          {project.location}
        </div>
        <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
          {project.description}
        </p>
        <Link
          href={`/${isOngoing ? 'ongoing' : 'completed'}/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#A67C00] transition-colors duration-300"
        >
          View Details
          <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState('ongoing');
  const projects = activeTab === 'ongoing' ? ongoingProjects : completedProjects;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
              <span className="w-6 h-px bg-[#C9A227]" />
              Featured Projects
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A]">
              Our <span className="text-[#C9A227]">Premium</span> Projects
            </h2>
          </div>

          <div className="inline-flex bg-[#F8F8F6] border border-[#E5E7EB] rounded-md p-1 self-start">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'ongoing'
                  ? 'bg-[#C9A227] text-[#111111]'
                  : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'completed'
                  ? 'bg-[#C9A227] text-[#111111]'
                  : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
            >
              Completed Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href={activeTab === 'completed'
                  ? '/completed'
                  : '/ongoing'
                }
            className="inline-flex items-center gap-2 border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-sm font-semibold tracking-wide px-8 py-4 rounded-md transition-colors duration-300"
          >
            View All Projects
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}