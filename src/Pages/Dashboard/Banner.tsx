import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Typical from "react-typical";
import { Home } from "../../assets"; // Import your assets

// Styled components for the Hero Section
const HeroSectionWrapper = styled(Box)({
  position: "relative",
  width: "100%", // Ensure full width
  backgroundSize: "cover", // Ensures full fit
  backgroundPosition: "center", // Centers the image
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
});

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 1,
});

const Heading = styled(Typography)({
  fontSize: "80px",
  fontWeight: 700,
  lineHeight: "80px", // Adjusted line height for better spacing
  color: "#FFFFFF",
  marginBottom: 0,
  textTransform: "uppercase",
});

const OutlineText = styled("span")({
  color: "transparent",
  WebkitTextStroke: "3px #fc0000",
  transition: "0.3s ease-in-out",
  fontSize: "140px !important",
  fontFamily: "Arial, sans-serif",
  display: "inline-block",
  marginTop: "10px", // Fine-tuned spacing
  lineHeight: "120px", // Ensures extra spacing between lines
});

const Subheading = styled(Typography)({
  border: "1px solid white",
  display: "inline-block",
  padding: "11px 21px 10px",
  color: "#FFFFFF",
  letterSpacing: "3px",
  fontWeight: 700,
  textTransform: "uppercase",
  lineHeight: "45px",
  marginTop: "30px",
});

const HeroSection: React.FC = () => {
  return (
    <Box>
      {/* Desktop View */}
      <HeroSectionWrapper
        sx={{
          backgroundImage: `url(${Home.webbannerr})`,
          height: {
            xs: "50vh",
            lg: "130vh",
          },
          backgroundPosition: {
            xs: "75% center",
            lg: "center",
          },
          display: { xs: "none", lg: "flex" }, // Hides on mobile
        }}
      >
        <Container maxWidth="xl">
          <ContentWrapper sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
            <Heading>
              <Box sx={{ display: "flex", alignItems: "center", }}>
                {/* <Typography
                  variant="h1"
                  fontWeight={700}
                  sx={{
                    fontSize: {
                      lg: "80px !important",
                      xs: "80px",
                    },
                  }}
                >
                  360°{" "}
                </Typography> */}
              </Box>
            </Heading>
            <Grid container >
              <Grid item lg={7} pb={4}>

                <Heading>
                  <Box
                    sx={{
                      fontSize: "70px !important",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",

                    }}
                  >
                    <span>Dominating the</span>
                    <span>
                      <OutlineText>Real Estate</OutlineText>
                    </span>
                    <span>Marketing Space</span>
                  </Box>
                </Heading>
              </Grid>
            </Grid>

            {/* <Grid container>
              <Grid item lg={8}>
                <Box
                  sx={{
                    fontSize: "70px !important", 
                    fontWeight: 700,
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "100px",
                    textTransform: "uppercase",
                    fontFamily: '"FuturaBook", sans-serif',
                  }}
                >
                  <span>Dominating the</span>
                  <span style={{marginTop:'40px !important'}}>
                    <OutlineText sx={{mt:6}}>Real Estate</OutlineText>
                  </span>
                  <span>Marketing Space</span>
                </Box>
              </Grid>
            </Grid> */}
            {/* <Subheading>
              <Typography variant="h4">
                Design the Future, Transform the Digital World
              </Typography>
            </Subheading> */}
          </ContentWrapper>
        </Container>
      </HeroSectionWrapper>

      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "block", lg: "none" }, // Shows on mobile, hides on desktop
          textAlign: "center",
          mt: 2,
          position: "relative", // Added for zIndex to take effect
          zIndex: 100, // Ensures it's above other elements
        }}
      >
        <img
          src={Home.mobileviewbanner}
          alt="Mobile Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
