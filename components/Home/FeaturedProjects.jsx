'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const ongoingProjects = [
  {
    id: 'al-hind-city',
    name: 'Al Hind City',
    location: 'Shamshabad, Hyderabad',
    description:
      'A landmark township offering spacious plots and villas amid green, open landscapes.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
    status: 'Ongoing',
  },
  {
    id: 'al-hind-enclave',
    name: 'Al Hind Enclave',
    location: 'Shamshabad, Hyderabad',
    description:
      'Premium residential apartments designed for modern families with world-class amenities.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop',
    status: 'Ongoing',
  },
  {
    id: 'al-hind-heights',
    name: 'Al Hind Heights',
    location: 'Kollur, Hyderabad',
    description:
      'High-rise residences with panoramic views, curated for a refined urban lifestyle.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop',
    status: 'Ongoing',
  },
];

const completedProjects = [
  {
    id: 'al-hind-residency',
    name: 'Al Hind Residency',
    location: 'Shamshabad, Hyderabad',
    description:
      'A fully delivered residential community known for timely handover and lasting quality.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    status: 'Completed',
  },
  {
    id: 'golden-meadows',
    name: 'Golden Meadows',
    location: 'Adibatla, Hyderabad',
    description:
      'Independent villas set across landscaped grounds, completed and fully occupied.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop',
    status: 'Completed',
  },
  {
    id: 'royal-enclave',
    name: 'Royal Enclave',
    location: 'Maheshwaram, Hyderabad',
    description:
      'A gated community offering premium plots, delivered on schedule with clear titles.',
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=900&auto=format&fit=crop',
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
          className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${
            isOngoing
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
          href={`/${isOngoing ? 'ongoing-projects' : 'completed-projects'}/${project.id}`}
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
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-300 ${
                activeTab === 'ongoing'
                  ? 'bg-[#C9A227] text-[#111111]'
                  : 'text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-300 ${
                activeTab === 'completed'
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
            href="/ongoing-projects"
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