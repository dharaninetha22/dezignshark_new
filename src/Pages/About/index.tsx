import React from 'react'
import Banner from './Banner'
import { Box } from '@mui/material'
import AboutContent from './AboutContent'
import ApproachSection from './Approach'
import Counter from './Counter'
import TeamSection from './Team'
import Textt from './Textt'
import Faqs from './Faqs'
import TestimonialSlider from './TestimonialSlider'
import Breadcrumb from '../../Components/Breadcrumb'
import { breadcrumbbanner } from '../../assets'
import Clients from './Clients'

const index = () => {
  return (
    <Box>
       <Breadcrumb
                      title="Our Story"
                      subtitle=" Our Selected Works"
                      backgroundImage={breadcrumbbanner}
                      overlayText="About Us"
                  />
      {/* <Banner/> */}
      <AboutContent/>
      <ApproachSection/>
      
      {/* <Counter/> */}
      {/* <TeamSection/> */}
      <Faqs/>
      <Textt/>
      <TestimonialSlider/>
    </Box>
  )
}

export default index
