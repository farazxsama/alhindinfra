import React from 'react'
import CompletedHero from "@/components/Completed/CompletedHero";
import CompletedProjectsShowcase from "@/components/Completed/CompletedProjectsShowcase"

const page = () => {
  return (
    <div>
      <CompletedHero/>
      <CompletedProjectsShowcase/>
    </div>
  )
}

export default page;
