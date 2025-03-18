import { Box, Container, Grid } from "@mui/material";
import React from "react";
import JobTitle from "./JobTitle";
import JobDescription from "./JobDescription";

import {  breadcrumbbanner, servicebg,  } from "../../../assets";
import DeadLine from "./DeadLine";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Breadcrumb from "../../../Components/Breadcrumb";


const Index = () => {
  return (
    <Box>
       <Breadcrumb
        title="Our Story"
        subtitle="Our Selected Works"
        backgroundImage={breadcrumbbanner}
        overlayText="Creers"
      />
        

        {/* Content Section */}
        <Box sx={{ position: "relative", zIndex: 2, background:'white' }}>
            
            <Container maxWidth="xl">
            <Grid container spacing={4} sx={{mb:{
              xs:8,
              lg:5
            }}}>
                <Grid item xs={12} lg={8} >
                <JobTitle />
                <JobDescription />
                </Grid>
                <Grid item xs={12} lg={4} >
                <DeadLine />
                <Qualification />
                <Skills />
                </Grid>
            </Grid>
            </Container>
        </Box>
        
    </Box>
  );
};

export default Index;
