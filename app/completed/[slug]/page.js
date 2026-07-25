import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectParams } from '@/lib/projects-data';
import ProjectHero from '@/components/DynamicComponents/ProjectHero';
import QuickProjectInfo from '@/components/DynamicComponents/QuickProjectInfo';
import AboutProject from '@/components/DynamicComponents/AboutProject';
import ProjectFeatures from '@/components/DynamicComponents/ProjectFeatures';
import LocationConnectivity from '@/components/DynamicComponents/LocationConnectivity';
import ProjectGallery from '@/components/DynamicComponents/ProjectGallery';
import RelatedProjects from '@/components/DynamicComponents/RelatedProjects';

export function generateStaticParams() {
  return getAllProjectParams('completed');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug('completed', slug);
  if (!project) return {};
  return {
    title: `${project.name} | Al Hind Infra`,
    description: project.hero.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug('completed', slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <QuickProjectInfo project={project} />
      <AboutProject project={project}/>
      <ProjectFeatures project={project}/>
      <LocationConnectivity project={project}/>
      <ProjectGallery project={project}/>
      <RelatedProjects project={project} type="completed"/>
    </>
  );
}