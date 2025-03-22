import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import { Careers, careersshark1, servicebg } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";

const JobStepsHook = () => {
  return (
    <Box
      sx={{
        // position: "relative",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "space-between",
        // backgroundImage: `url(${servicebg})`, // Replace with actual background image path
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // overflow: "hidden",
        // opacity: 0.95,
        background:'white'
      }}
    >
      {/* Background Overlay */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust opacity here
          zIndex: 1,
        }}
      /> */}
      <Container maxWidth='xl' >
        <Grid container spacing={4} alignItems="center" py={5} sx={{px:{xs:6,lg:0}}}>
          {/* Left Side: 3D Illustration */}
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              src={careersshark1}
              alt="Job Search Illustration"
              sx={{
                width: "100%",
                maxWidth: "600px",
                zIndex: 2,
              }}
            />
          </Grid>

          {/* Right Side: Text Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ color: "#74787C", zIndex: 2 }}>
              
              <AnimatedText sx={{ fontWeight: "bold", mb: 2 ,color:'black',textAlign:'start'}}>
              Find Jobs with 3 Easy Steps
              </AnimatedText>

              <Typography sx={{ color: "#74787C", mb: 4,textAlign:'start', my:{xs:4,lg:0} }}>
                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation.
              </Typography>

              {/* Steps List */}
              <Stack spacing={2}>
                {[ 
                  { number: "01", text: "Register an account to start" },
                  { number: "02", text: "Explore over thousands of resumes" },
                  { number: "03", text: "Find the most suitable candidate" },
                ].map((step, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#74787C" }}>
                      {step.number}
                    </Typography>
                    <Typography variant="body1" color="#74787C" sx={{fontSize:{xs:'34px',lg:'14px'}}}>{step.text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobStepsHook;
