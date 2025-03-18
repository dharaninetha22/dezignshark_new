import React from 'react'
import JobCategories from './JobCategories'
import {  breadcrumbbanner, Careers } from '../../assets'
import JobStepsHook from './JobStepsHook '
import JobListing from './JobListing'
import Expert from './Expert'
import Breadcrumb from '../../Components/Breadcrumb'



const index = () => {
  return (
    <div>
        <Breadcrumb
        title="Our Story"
        subtitle="Our Selected Works"
        backgroundImage={breadcrumbbanner}
        overlayText="Careers"
      />
      {/* <JobCategories/> */}
      <JobStepsHook/>
      <JobListing/>
      <Expert/>
    </div>
  )
}

export default index
