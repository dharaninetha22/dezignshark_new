import React, { useEffect, useRef } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { display, styled } from "@mui/system";
import hoverEffect from "hover-effect";
import { Home } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"; // MUI Icon
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Styled Content Box for Text Animation
const Content = styled(Box)({
  position: "absolute",
  right: "-1px",
  bottom: 0,
  padding: "15px 25px",
  maxWidth: "320px",
  backgroundColor: "#1e1e1e",
  color: "#fff",
  transformOrigin: "right",
  transform: "perspective(250px) rotateY(-90deg)",
  transition: "all 400ms ease-in-out",
  zIndex: 2,
});

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover .content": {
    transform: "perspective(250px) rotateY(0deg)",
  },
});


const StyledButton = styled(Button)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  background: "transparent !important", // 🔥 Fully Transparent Background
  color: "white !important", // White text always
  border: "1px solid #fff",
  padding: "20px 35px",
  borderRadius: "10px",
  letterSpacing: "0.005em",
  cursor: "pointer",
  overflow: "hidden",
  transition: "all 0.3s ease-out",
  fontSize: "1.2rem",

  "&:hover": {
    background: "transparent !important", // Slight hover effect
    border: "1px solid #fff !important",
  },

  "&:active": {
    background: "transparent !important", // Ensure it stays transparent on click
    color: "white !important",
  },

  "&:hover .btn-arrow-hover .arrow-first": {
    transform: "translateX(200%) translateY(-200%) translateZ(0)",
  },
  "&:hover .btn-arrow-hover .arrow-second": {
    transform: "translateX(0) translateY(0) translateZ(0)",
  },
});

// Arrow Container
const ArrowContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  display: "inline-flex",
  width: "20px",
  height: "20px",
});

// Styled MUI Icons
const ArrowIconStyled = styled(ArrowOutwardIcon)({
  fontSize: "16px",
  transition: "transform 0.3s ease-out",
  color: "white",
});

const ArrowIconFirst = styled(ArrowIconStyled)({
  transform: "translateX(0) translateY(0) translateZ(0)",
});

const ArrowIconLast = styled(ArrowIconStyled)({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translateX(-200%) translateY(200%) translateZ(0)",
});

const images = [
  { src: Home.brochure1 },
  { src: Home.brochure2 },
  { src: Home.brochure3 },
  { src: Home.brochure4 },
];

const CreativeWorksSection: React.FC = () => {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const navigate = useNavigate(); // Hook for navigation

  // ✅ First column (All images with "type")
  const imagesFirstColumn = [
    { image1: Home.port2, image2: Home.port2, displacementImage: Home.imageeffect, width: "660px", height: "703px", title: "Web Development" },
    { image1: Home.port1, image2: Home.port1, displacementImage: Home.imageeffect, width: "660px", height: "450px", title: "Social Media Marketing" },
    { image1: Home.port3, image2: Home.port3, displacementImage: Home.imageeffect, width: "660px", height: "703px", title: "SEO Results" },
  ];

  // ✅ Second column (Video + Images)
  const videoSrc = "https://dprstorage.b-cdn.net/dezignshark/portfoliovedio.mp4";
  const imagesSecondColumn = [
    { type: "video", src: videoSrc, width: "660px", height: "703px" ,title: "Reels"}, // Video
    { image1: Home.port5, image2: Home.port5, displacementImage: Home.imageeffect, width: "660px", height: "630px", title: "Branding" },
    { image1: Home.port6, image2: Home.port6, displacementImage: Home.imageeffect, width: "660px", height: "520px", title: " Hodings" },
  ];

  // ✅ Third column (Single additional image)
  const imagesThirdColumn = [
    { image1: Home.brochure1, image2: Home.brochure2, displacementImage: Home.imageeffect, width: "1437px", height: "500px", title: "Project 6" },
    { image1: Home.brochure2, image2: Home.brochure2, displacementImage: Home.imageeffect, width: "1437px", height: "500px", title: "Project 6" },
    { image1: Home.brochure3, image2: Home.brochure3, displacementImage: Home.imageeffect, width: "1437px", height: "500px", title: "Project 6" },
    { image1: Home.brochure4, image2: Home.brochure4, displacementImage: Home.imageeffect, width: "1437px", height: "500px", title: "Project 6" },
  ];

  useEffect(() => {
    const allImages = [...imagesFirstColumn, ...imagesSecondColumn, ...imagesThirdColumn];

    allImages.forEach((data, index) => {
      if (data.image1 && itemRefs.current[index]) {
        new hoverEffect({
          parent: itemRefs.current[index]!,
          intensity: 0.2,
          image1: data.image1,
          image2: data.image2,
          displacementImage: data.displacementImage,
        });
      }
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animation
      offset: 100, // Trigger animations earlier/later
      once: false, // Allows re-triggering when scrolling up
      mirror: true, // ✅ Ensures animations work when scrolling up
    });

    // Refresh AOS when page content updates
    AOS.refresh();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <Box sx={{ py: 10,  }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{mb:5,px: { xs: 6, lg: 0 }}}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, }}>
            <AnimatedText> Unlock Powerful Growth with Dezign Shark</AnimatedText>
          </Box>
        </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="body1" color="white" sx={{fontSize: { xs: '30px', lg: '18px' ,textAlign:'left'}}}  data-aos="fade-left">
            At Dezign Shark, we go beyond traditional marketing—we craft high-impact, data-driven, and results-oriented digital marketing strategies that maximize ROI, amplify brand visibility, and accelerate business growth. Our 360-degree approach ensures your brand stands out in the competitive digital landscape with cutting-edge technology, creative excellence, and performance-driven campaigns. Ready to transform your digital presence? Let’s make it happen!
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} flexDirection="column" alignItems="center">
          

          {/* Image Grid */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={4}>
              {/* First Column */}
              <Grid item xs={12} lg={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                  {imagesFirstColumn.map((img, index) => (
                    <ImageContainer
                      key={index}
                      ref={(el) => (itemRefs.current[index] = el as HTMLDivElement | null)} // Explicit type casting
                      sx={{
                        width: { xs: "95vw", lg: img.width }, // 100vw for mobile view, original width for desktop
                        height: img.height, // Original image height
                      }}
                    >
                      <Content className="content">
                        <Typography variant="h5">
                          {img.title}
                        </Typography>
                      </Content>
                    </ImageContainer>
                  ))}
                </Box>
              </Grid>

              {/* Second Column */}
              <Grid item xs={12} lg={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                  {imagesSecondColumn.map((item, index) =>
                    item.type === "video" ? (
                      <ImageContainer
                        key={index}
                        sx={{
                          width: { xs: "95vw", lg: item.width }, // 100vw for mobile view, original width for desktop
                          height: item.height, // Original image height
                        }}
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <Content className="content">
                          <Typography variant="h5">{item.title}</Typography> {/* Use the title property */}
                        </Content>
                      </ImageContainer>
                    ) : (
                      <ImageContainer
                        key={index + imagesFirstColumn.length}
                        ref={(el) => (itemRefs.current[index + imagesFirstColumn.length] = el as HTMLDivElement | null)} // Explicit type casting
                        sx={{
                          width: { xs: "95vw", lg: item.width }, // 100vw for mobile view, original width for desktop
                          height: item.height, // Original image height
                        }}
                      >
                        <Content className="content">
                          <Typography variant="h5">
                            {item.title}
                          </Typography>
                        </Content>
                      </ImageContainer>
                    )
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Third Column: Carousel */}
          <Grid item xs={12}>
            <Box
              sx={{
                maxWidth: "100%",
                margin: "auto",
                overflow: "hidden",
                boxShadow: "0 0 60px -20px #223344",
                position: "relative",
              }}
            >
              <Slider {...carouselSettings}>
                {images.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      animation: "animate 2s ease-in-out",
                    }}
                  >
                    <Box
                      component="img"
                      src={img.src}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        width: "100%",
                        display: "block",

                      }}
                    />
                    <Typography
                      sx={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        color: "#f2f2f2",
                        fontSize: "16px",
                        backgroundColor: "rgba(173, 216, 230, 0.15)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "10px",
                        padding: "8px 12px",
                      }}
                    >
                      {index + 1} / {images.length}
                    </Typography>
                  </Box>
                ))}
              </Slider>
              <style>
                {`
                  @keyframes animate {
                    from {
                      transform: scale(1.1) rotateY(10deg);
                    }
                    to {
                      transform: scale(1) rotateY(0deg);
                    }
                  }
                  .slick-dots li button:before {
                    font-size: 14px;
                    color: rgba(173, 216, 230, 0.5);
                  }
                  .slick-dots li.slick-active button:before {
                    color: rgba(173, 216, 230, 0.9);
                  }
                `}
              </style>
            </Box>
          </Grid>
        </Grid>
         <StyledButton
              onClick={() => window.location.href = "https://portfolio.dezignshark.com/folders"} // Navigate to the specified URL
              sx={{
                width: "100%", // Full width within the container
                maxWidth: "1400px", // Ensure it doesn't exceed the container's max width
                height: { xs: '115px', lg: '75px' },
                fontSize: { xs: "2.2rem", lg: "1.4rem" },
                mt: { xs: 5, lg: 4 },
                mx: "auto", // Center the button horizontally
              }}
            >
              Click to Visit Our Works
              <ArrowContainer className="btn-arrow-hover">
                <ArrowIconFirst className="arrow-first" sx={{ fontSize: { xs: '30px', lg: '20px ' } }} />
                <ArrowIconLast className="arrow-second" sx={{ fontSize: { xs: '30px', lg: '20px ' } }} />
              </ArrowContainer>
            </StyledButton>
      </Container><style>
        {`
          @keyframes animate {
            from {
              transform: scale(1.1) rotateY(10deg);
            }
            to {
              transform: scale(1) rotateY(0deg);
            }
          }
          .slick-dots li button:before {
            font-size: 14px;
            color: rgba(173, 216, 230, 0.5);
          }
          .slick-dots li.slick-active button:before {
            color: rgba(173, 216, 230, 0.9);
          }
        `}
      </style>

    </Box>
  );
};

export default CreativeWorksSection;
