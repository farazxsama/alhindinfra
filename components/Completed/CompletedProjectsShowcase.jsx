import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const completedProjects = [
  {
    id: 'imperial-city',
    name: 'Imperial City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Rs 6000 /- Per Sq. Yard with EMI | Gated Community Plot for Sale | Ten Years of Security',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Ready for Registration', 'Prime Location'],
  },
  {
    id: 'crystal-city',
    name: 'Crystal City Project',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships proudly presents its latest venture "Crystal City".',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
    highlights: ['RERA Registered', 'Gated Layout', 'Excellent Connectivity'],
  },
  {
    id: 'hilton-city',
    name: 'Hilton City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'We bring you safe and secure plots near Shamshabad, an excellent investment opportunity for your future.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'express-city',
    name: 'Express City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships presents their latest project - Express City. This project offers you attractive, highway-facing residential plots for sale.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'highway-city',
    name: 'Highway City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Gated Community Plots for Sale Near Shamshabad with Ten Years of Security at just Rs 5,500/- Per Sq. for Residential and 8,000/- Per Sq. for Commercial',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'highway-phase-2',
    name: 'Highway City Phase 2',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships India presents their latest project - Highway City Phase 2. This brand new project offers you attractive, highway-facing plots for sale.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'silver-city',
    name: 'Silver City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Rs 4000 Per Sq. Yard with EMI | Gated Community Plot for Sale Near Shamshabad | Ten Years of Security',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'future-city',
    name: 'Future City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Plots for Sale Near Shamshabad @ Rs 4500/- Sq. Yard. In a Gated Community with Clear Title & Spot Registration, Ten Years of Security, 100% Vaastu, Link Documents Available.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'pearl-city',
    name: 'Pearl City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships India brings to you their latest project - Pearl City',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'peace-city',
    name: 'Peace City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Plot for sale in near Shamshabad @ Rs 4500/ Square Yard in a Gated Community, Clear Title and Spot Registration with link Documents Available, Ten years of security. 100% Vaastu.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'prime-city',
    name: 'Prime City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships India presents their latest project - Prime City. This brand-new project offers you attractive, highway-facing residential plots for sale.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'falcon-city',
    name: 'Falcon City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Plots for Sale Near Shamshabad @ Rs 7,500/ Sq. Yard. In a Gated Community with Clear Title & Spot Registration. Ten Years of Security. 100% Vaastu.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'dream-home',
    name: 'Dream Home',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Hindustan Townships presents their latest project - Dream Home City. This brand-new project offers you attractive, highway-facing residential plots.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'regional-city',
    name: 'Regional City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Regional City is a premium residential venture by Hindustan Townships, strategically located in Shabad Mandal near the upcoming Regional Ring Road (RRR).',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'natural-city',
    name: 'Natural City',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Natural City is one of the latest projects launched by Hindustan Townships.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  {
    id: 'falcon-phase-4',
    name: 'Falcon City Phase 4',
    location: 'Shabad Mandal, Near Shamshabad',
    description:
      'Plots for Sale Near Shamshabad @ Rs 9,500/ Sq. Yard. In a Gated Community with Clear Title & Spot Registration.',
    image:
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Clear Titles', 'Gated Community'],
  },
  
];

function ProjectCard({ project }) {
  return (
    <div className="group bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-black rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#C9A227]/20 p-4">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg ">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#C9A227] text-[#111111] text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          Completed
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-xl text-[#C9A227] mb-2">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-white/75 font-medium mb-3">
          <FiMapPin size={14} className="text-white/95" />
          {project.location}
        </div>
        <p className="text-sm text-[#C9A227] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* <ul className="space-y-2 mb-6">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-[#C9A227] font-medium"
            >
              <FiCheckCircle size={14} className="text-[#C9A227] shrink-0" />
              {item}
            </li>
          ))}
        </ul> */}

        <Link
          href={`/completed/${project.id}`}
          className="inline-flex items-center p-2 rounded-sm gap-2 text-sm font-semibold text-[#C9A227] group/btn border border-[#C9A227]"
        >
          View Details
          <FiArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export default function CompletedProjectsShowcase() {
  return (
    <section className="bg-[#F8F8F6] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            COMPLETED DEVELOPMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-5">
            Successfully Delivered
            <br />
            Projects
          </h2>
          <p className="text-[#6B7280] text-base leading-relaxed max-w-2xl">
            Explore our completed plotted developments, Successfully delivered with quality planning, verified documentation, and lasting investment value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}