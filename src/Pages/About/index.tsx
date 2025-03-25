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
import { breadcrumbbanner, mobilebgshark2 ,sharkbgmaroon} from '../../assets'
import Clients from './Clients'

const About = () => {
  return (
    <Box

    >
       <Breadcrumb
                      title="Our Story"
                      // subtitle=" Our Selected Works"
                      backgroundImage={breadcrumbbanner}
                      overlayText="About Us"
                  />
                  <Box 
                      // sx={{
                      //   position: "relative",
                      //   backgroundImage: `url(${sharkbgmaroon})`,
                      //   backgroundAttachment: "fixed",
                      //   backgroundPosition: "center",
                      //   backgroundRepeat: "no-repeat",
                      //   backgroundSize: "cover",
                      //   minHeight: "100vh",
                      //   // opacity: 0.8,
                      //   "@media (max-width: 1040px)": {
                      //       backgroundImage: `url(${mobilebgshark2})`,
                      //       // backgroundAttachment: "scroll",
                      //       backgroundSize: "contain", // Adjust to ensure the full image appears
                      //       opacity: 0.8, // Decrease the opacity for mobile as well
                      //   },
                      //   }}
                  >

            {/* <Banner/> */}
            {/* <AboutContent/> */}
            <ApproachSection/>
            
            {/* <Counter/> */}
            {/* <TeamSection/> */}
            <Faqs/>
            <Textt/>
            <TestimonialSlider/>
                  </Box>
    </Box>
  )
}

export default About
