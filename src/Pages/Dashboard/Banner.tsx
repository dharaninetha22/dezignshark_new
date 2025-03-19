import React from "react";
import { Box, Typography, Container } from "@mui/material";
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
  fontFamily: "Arial, sans-serif",
  fontSize: "113px",
  fontWeight: 700,
  lineHeight: "124px",
  color: "#FFFFFF",
  marginBottom: 0,
  textTransform: "capitalize",
});

const OutlineText = styled("span")({
  color: "transparent",
  WebkitTextStroke: "2px #FFFFFF",
  transition: "0.3s ease-in-out",
  fontSize: "80px !important", // Ensures the outline text is 80px
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
            lg: "120vh",
          },
          backgroundPosition: {
            xs: "75% center",
            lg: "center",
          },
          display: { xs: "none", lg: "block" }, // Hides on mobile
        }}
      >
        <Container maxWidth="xl">
          <ContentWrapper sx={{mt:24}}>
            <Heading>
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Typography
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
                </Typography>
              </Box>
            </Heading>
            <Heading>
              <OutlineText>Digital&nbsp;</OutlineText>{" "}
              <Box
                sx={{
                  fontSize: "80px !important", // Ensures Typical text is 80px
                  fontWeight: 700,
                  display: "inline-block",
                  color: "#FFFFFF",
                }}
              >
                Agency
              </Box>
            </Heading>
            <Subheading>
              <Typography variant="h4">
                Design the Future, Transform the Digital World
              </Typography>
            </Subheading>
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
