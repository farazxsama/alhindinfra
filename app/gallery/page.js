import GalleryShowcase from "@/components/Gallery/GalleryShowcase";
import GalleryHero from "@/components/Gallery/GalleryHero";

export const metadata = {
  title: "Gallery | Premium Plots Near Shamshabad | Al Hind Infra",
  description:
    "Browse photos and videos of Al Hind Infra's premium plotted developments, layouts, infrastructure, and project highlights near Shamshabad.",
};

const page = ()=>{
    return (
        <>
        <GalleryHero/>
        <GalleryShowcase/>
        </>
    )
}
export default page;