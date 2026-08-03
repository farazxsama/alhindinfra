import AboutHero from "@/components/About/AboutHero";
import AboutIntro from "@/components/About/AboutIntro";
import OurExpertise from "@/components/About/OurExpertise";
import WhyInvestWithUs from "@/components/About/WhyInvestWithUs";
import CoreValues from "@/components/About/CoreValues";


export const metadata = {
  title: "About Al Hind Infra | Plotted Developments Near Shamshabad",
  description:
    "Learn about Al Hind Infra, a trusted real estate developer offering premium plotted developments near Shamshabad with clear documentation, strategic locations, and customer-focused services.",
};


const page = () => {
    return (
        <>
            <AboutHero/>
            <AboutIntro />
            <OurExpertise />
            <CoreValues/>
            <WhyInvestWithUs />
        </>
    )
}

export default page;