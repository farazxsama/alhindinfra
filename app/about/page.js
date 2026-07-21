import AboutHero from "@/components/About/AboutHero";
import AboutIntro from "@/components/About/AboutIntro";
import OurExpertise from "@/components/About/OurExpertise";
import WhyInvestWithUs from "@/components/About/WhyInvestWithUs";
import CoreValues from "@/components/About/CoreValues";

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