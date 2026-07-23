import React from 'react'
import OngoingHero from "@/components/Ongoing/OngoingHero"
import OngoingProjectsShowcase from '../../components/Ongoing/OngoingProjectsShowcase';

const page = () => {
  return (
    <div>
        <OngoingHero/>
        <OngoingProjectsShowcase/>
    </div>
  )
}

export default page;
