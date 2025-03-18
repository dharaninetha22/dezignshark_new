import React from 'react'
import ServicesSection from './ServicesSection'

import { Box } from '@mui/material'
import { breadcrumbbanner } from '../../assets'
import TestimonialSlider from '../About/TestimonialSlider'
import Clients from './Clients'
import Breadcrumb from '../../Components/Breadcrumb'

const index = () => {
  return (
    <Box>
        <Breadcrumb
        title="Our Story"
        subtitle="Our Selected Works"
        backgroundImage={breadcrumbbanner}
        overlayText=" Services"
      />
        <ServicesSection/>
        <TestimonialSlider/>
        {/* <Clients/> */}
      
    </Box>
  )
}

export default index
