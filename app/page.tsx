import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import GalleryPreview from "@/components/Home/GalleryPreview";
import ContactCTA from "@/components/Home/ContactCTA";






export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <FeaturedProjects/>
    <WhyChooseUs/>
    <GalleryPreview/>
    <ContactCTA/>
    </>
  );
}
