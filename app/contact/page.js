import ContactHero from "@/components/Contact/ContactHero";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata = {
  title: "Contact Us | Al Hind Infra - Premium Plots Near Shamshabad",
  description:
    "Contact Al Hind Infra for premium plotted developments near Shamshabad. Book a site visit, enquire about projects, or speak with our experts today.",
};

const page = ()=>{
    return(
        <>
        <ContactHero/>
        <ContactSection/>
        </>
    )
}
export default page;