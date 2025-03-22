import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import {  Careers, servicebg } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";

const JobStepsHook = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >

      <Container maxWidth='xl' >
        <Grid container spacing={4} alignItems="center" pt={5}  pb={8} sx={{px:{xs:6,lg:0}}}>
        

          {/* Right Side: Text Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ color: "#74787C", zIndex: 2 }}>
            
              <AnimatedText sx={{ fontWeight: "bold", mb: 2 ,textAlign:"start",color:'black',fontSize: { xs: '5em', lg: '3.2em' }}}>
              Getting Applied by an Expert Talent

              </AnimatedText>

              <Typography sx={{ color: "#74787C", mb: 4,textAlign:'start' }}>
              When it comes to landing your dream job, our expert team acts as your personal career matchmaker connecting your unique skills with the perfect opportunity.

              </Typography>
              <Typography sx={{ color: "#74787C", mb: 4,textAlign:'start' }}>
              Our specialists dive deep into every application, ensuring your potential shines through. Experience a personalized, engaging approach that turns every application into a step toward success!
              </Typography>


            </Box>
          </Grid>

            {/* Left Side: 3D Illustration */}
            <Grid item xs={12} lg={6}>
            <Box
              component="img"
              src='https://dprstorage.b-cdn.net/dezignshark/careers/mobile.png'
              alt="Job Search Illustration"
              sx={{
                width: "100%",
                maxWidth: "600px",
                zIndex: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobStepsHook;
