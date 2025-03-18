import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import Typical from "react-typical";
import { Home } from "../../assets"; // Import your assets

// Styled components for the Hero Section
const HeroSectionWrapper = styled(Box)({
  position: "relative",
 
  width: "100%", // Ensure full width
  // minHeight: "120vh",
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
  letterSpacing:'3px',
  fontWeight: 700,
  textTransform: "uppercase",
  lineHeight: "45px",
  marginTop: "30px",
});

const CircleSVGWrapper = styled(Box)({
  position: "absolute",
  bottom: "-334px",
  width: "100%",
  textAlign: "center",
  zIndex: 100,
});

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper
      sx={{
        backgroundImage: `url(${Home.webbannerr})`,
        // padding:'100px 0px',
        height: {
          xs:'40vh',
          lg:'120vh'
        },
        
      }}
    >
      <Container maxWidth="xl">
        <ContentWrapper>
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
              {/* <img
                src={Home.slidelayer}
                alt="img"
                style={{ verticalAlign: "middle" }}
              /> */}
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
              {/* <Typical
                steps={["Studio", 2000, "Agency", 2000, "Design", 2000]}
                loop={Infinity}
                wrapper="span"
              /> */}
              Agency
            </Box>
          </Heading>
          <Subheading>
            <Typography variant="h4">Design the Future, Transform the Digital World</Typography>
          </Subheading>
        </ContentWrapper>
      </Container>

   
    </HeroSectionWrapper>
  );
};

export default HeroSection;
