import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const ongoingProjects = [
  {
    id: 'hilltop-1',
    name: 'HillTop City Phase 1',
    location: 'Mariyapur Village, Shabad',
    description:
      'HillTop City Phase I is one of the latest residential projects launched by Hindustan Townships. It is located in the Shabad vicinity. ',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop',
    highlights: ['HMDA Approved', 'Ready for Registration', 'Prime Location'],
  },
  {
    id: 'al-hind-enclave',
    name: 'Al Hind Enclave',
    location: 'Kollur, Hyderabad',
    description:
      'Strategically located plots designed for long-term appreciation near key growth corridors.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
    highlights: ['RERA Registered', 'Gated Layout', 'Excellent Connectivity'],
  },
  {
    id: 'al-hind-meadows',
    name: 'Al Hind Meadows',
    location: 'Adibatla, Hyderabad',
    description:
      'Open plots set across a landscaped township with clear titles and planned amenities.',
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
          href={`/ongoing-projects/${project.id}`}
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
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}