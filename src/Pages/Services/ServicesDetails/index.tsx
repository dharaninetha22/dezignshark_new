import React from 'react'
import Sectionone from './Sectionone'
import SectionTwo from './SectionTwo'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/material'
import ServicesList from './ServicesList'
import Faqs from './Faqs'
import DownloadSection from './DownloadSection '
import ProjectForm from './ProjectForm'



const index = () => {
  return (
    <Box>
        <Sectionone/>
        <Box sx={{backgroundColor: '#fff', py: 5}}>
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} sm={8} md={8} lg={8}>
              {/* <SectionTwo/> */}
              {/* <Faqs/> */}
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                {/* <ServicesList/> */}
                {/* <ProjectForm/>
                <DownloadSection/> */}
              </Grid>
            </Grid>

          </Container>

        </Box>
        
      
    </Box>
  )
}

export default index
