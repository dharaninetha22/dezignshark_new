import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { Home } from "../../assets"; // Ensure correct import

// Styled Components
const HeroSectionWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
});

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 2,
});

const Heading = styled(Typography)({
  fontSize: "80px",
  fontWeight: 700,
  lineHeight: "80px",
  color: "#FFFFFF",
  textTransform: "uppercase",
});

const OutlineText = styled("span")({
  color: "transparent",
  WebkitTextStroke: "3px #fc0000",
  fontSize: "140px",
  fontFamily: "Arial, sans-serif",
  display: "inline-block",
  lineHeight: "120px",
});

const CircleWrapper = styled(Box)({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: 'black',
  border: "1px solid rgba(94, 94, 94, 0.18)",
  color: 'white',
  zIndex: 10,
  cursor: "pointer",
});
const RotatingTextContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing:'5px'
});

const RotatingLetter = styled(Typography)({
  position: "absolute",
  fontSize: "5px",
  transformOrigin: "center",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: '1px',
  color: 'white'
});
const PlayIconWrapper = styled(Box)({
  position: "relative",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 11,
  boxShadow: "0 0 0 rgba(255, 255, 255, 0.4)",
  animation: "pulse 1.5s infinite",
  "@keyframes pulse": {
    "0%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.4)" },
    "70%": { boxShadow: "0 0 0 20px rgba(255, 255, 255, 0)" },
    "100%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" },
  },
});

// Video Modal Styles
const VideoModal = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

const VideoContainer = styled(Box)({
  width: "100%",
  maxWidth: "900px", // Maximum width for larger screens
  height: "auto",
  display: "flex",
  justifyContent: "center",
});

const VideoElement = styled("video")({
  width: "100%", // Ensures full width
  height: "auto",
  borderRadius: "10px",
});

const CloseButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: "white",
  fontSize: "30px",
  cursor: "pointer",
  zIndex: 1001,
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "50%",
  transition: "0.3s",
  width: "50px",
  height: "50px",
  display: "flex", // Ensures content is flexed
  alignItems: "center", // Centers vertically
  justifyContent: "center", // Centers horizontally
  "&:hover": {
    background: "rgba(255, 255, 255, 0.5)",
  },
  top: "50px", // Default for desktop
  right: "14%", // Default for desktop
  [theme.breakpoints.down("lg")]: {
    top: "35%", // Adjusted for mobile view
    right: "10px", // Adjusted for mobile view
  },
}));

// Hero Section Component
const HeroSection: React.FC = () => {
  const rotatingTextRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false); // Separate state for mobile

  useEffect(() => {
    if (rotatingTextRef.current) {
      gsap.to(rotatingTextRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }
  }, []);

  const handleDesktopPlayClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Desktop Play button clicked");
    setIsVideoOpen(true);
  };

  const handleMobilePlayClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Mobile Play button clicked");
    setIsMobileVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setIsMobileVideoOpen(false); // Close both modals
  };

  return (
    <Box>
      {/* Desktop View */}
      <HeroSectionWrapper
        sx={{
          backgroundImage: `url(${Home.webbannerr})`,
          height: { xs: "50vh", lg: "130vh" },
          backgroundPosition: { xs: "75% center", lg: "center" },
          display: { xs: "none", lg: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <ContentWrapper>
            <Grid container>
              <Grid item lg={7} pb={4}>
                <Heading>
                  <Box sx={{ fontSize: "70px", fontWeight: 700, color: "#FFFFFF" }}>
                    <span>Dominating the</span>
                    <span>
                      <OutlineText>Real Estate</OutlineText>
                    </span>
                    <span>Marketing Space</span>
                  </Box>
                </Heading>
              </Grid>
            </Grid>
          </ContentWrapper>
        </Container>

        {/* Rotating Circle & Play Button */}
        <CircleWrapper
          sx={{
            position: "absolute",
            top: "60%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            cursor:'none'
          }}
        >
          <RotatingTextContainer ref={rotatingTextRef}>
            {"Dezign Shark  Show Video  • ".split("").map((char, index) => {
              const angle = (index / "Dezign Shark  Show Video • ".length) * 360;
              const radius = 60;
              return (
                <RotatingLetter
                  key={index}
                  style={{
                    transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, 
                      ${radius * Math.sin((angle * Math.PI) / 180)}px) rotate(${angle}deg)`,
                    fontSize: "12px",
                  }}
                >
                  {char}
                </RotatingLetter>
              );
            })}
          </RotatingTextContainer>
          <PlayIconWrapper onClick={handleDesktopPlayClick}>
            <img
                          src={Home.playicon}
                          alt="Play Icon"
                          style={{ width: "30px", height: "30px" ,cursor:'none'}}
                        />
          </PlayIconWrapper>
        </CircleWrapper>

        {/* Video Modal */}
        {isVideoOpen && (
          <VideoModal onClick={handleCloseVideo}>
            <CloseButton onClick={handleCloseVideo}>
              <CloseIcon fontSize="large" />
            </CloseButton>
            <VideoContainer>
              <VideoElement
                src="https://dprstorage.b-cdn.net/dprstorage/dezign_shark.mp4"
                controls
                autoPlay
              />
            </VideoContainer>
          </VideoModal>
        )}
      </HeroSectionWrapper>


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



         {/* Rotating Circle & Play Button */}
         <CircleWrapper
          sx={{
            position: "absolute",
            top: "60%",
            left: "15%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer", // Changed to pointer for better click handling
          }}
          onClick={handleMobilePlayClick} // Added onClick to CircleWrapper
        >
          <RotatingTextContainer ref={rotatingTextRef}>
            {"Dezign Shark  Show Video •  ".split("").map((char, index) => {
              const angle = (index / "Dezign Shark  Show Video• ".length) * 360;
              const radius = 60;
              return (
                <RotatingLetter
                  key={index}
                  style={{
                    transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, 
                      ${radius * Math.sin((angle * Math.PI) / 180)}px) rotate(${angle}deg)`,
                    fontSize: "12px",
                  }}
                >
                  {char}
                </RotatingLetter>
              );
            })}
          </RotatingTextContainer>
          <PlayIconWrapper>
            <img
                          src={Home.playicon}
                          alt="Play Icon"
                          style={{ width: "30px", height: "30px" ,cursor:'none'}}
                        />
          </PlayIconWrapper>
        </CircleWrapper>
      </Box>

      {/* Mobile Video Modal */}
      {isMobileVideoOpen && (
        <VideoModal onClick={handleCloseVideo}>
          <CloseButton onClick={handleCloseVideo}>
            <CloseIcon fontSize="large" />
          </CloseButton>
          <VideoContainer>
            <VideoElement
              src="https://dprstorage.b-cdn.net/dprstorage/dezign_shark.mp4"
              controls
              autoPlay
            />
          </VideoContainer>
        </VideoModal>
      )}
    </Box>
  );
};

export default HeroSection;
