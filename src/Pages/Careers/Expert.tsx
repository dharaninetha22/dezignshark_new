import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import {  Careers, servicebg } from "../../assets";

const JobStepsHook = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >

      <Container maxWidth='xl' >
        <Grid container spacing={4} alignItems="center" pt={5}  pb={8} >
        

          {/* Right Side: Text Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ color: "#74787C", zIndex: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mb: 2 ,textAlign:"start",color:'black'}}
              >
                Getting Applied by an
                Expert Talent
              </Typography>

              <Typography sx={{ color: "#74787C", mb: 4,textAlign:'start' }}>
                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation.
              </Typography>
              <Typography sx={{ color: "#74787C", mb: 4,textAlign:'start' }}>
                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation.
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
