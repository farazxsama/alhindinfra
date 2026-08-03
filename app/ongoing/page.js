import React from 'react'
import OngoingHero from "@/components/Ongoing/OngoingHero"
import OngoingProjectsShowcase from '../../components/Ongoing/OngoingProjectsShowcase';

export const metadata = {
  title: "Ongoing Projects | Premium Plots Near Shamshabad | Al Hind Infra",
  description: "Explore ongoing premium plotted developments near Shamshabad with clear titles, modern infrastructure, gated layouts, and excellent investment value.",
}

const page = () => {
  return (
    <div>
        <OngoingHero/>
        <OngoingProjectsShowcase/>
    </div>
  )
}

export default page;
