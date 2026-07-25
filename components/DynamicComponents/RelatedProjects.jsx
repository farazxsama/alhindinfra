import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import { getRelatedProjects } from '@/lib/projects-data';

function RelatedCard({ project, type }) {
  const isOngoing = type === 'ongoing';

  return (
    <div className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#C9A227] hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={project.hero.bannerImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${
            isOngoing ? 'bg-[#C9A227] text-[#111111]' : 'bg-white text-[#111111]'
          }`}
        >
          {project.hero.status}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-white mb-2">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-white/60 mb-3">
          <FiMapPin size={14} className="text-[#C9A227]" />
          {project.hero.location}
        </div>
        <p className="text-sm text-white/60 leading-relaxed mb-5 line-clamp-2">
          {project.hero.description}
        </p>
        <Link
          href={`/${type}/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#A67C00] transition-colors duration-300"
        >
          View Details
          <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function RelatedProjects({ project, type }) {
  const related = getRelatedProjects(type, project.slug, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-[#111111] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#C9A227] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-5">
            <span className="w-6 h-px bg-[#C9A227]" />
            Explore More
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-white">
            You May Also{' '}
            <span className="text-[#C9A227]">Like</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((relatedProject) => (
            <RelatedCard
              key={relatedProject.slug}
              project={relatedProject}
              type={type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}