import React from "react";
import { Box, Container, Grid, Typography, Card, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Home } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import CustomButton from "../../Components/Inputs/CustomButton";
import { useNavigate } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"; // MUI Icon


// TypeScript Interface
interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
}

// Styled Components for Animation
const Project = styled(Card)({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  background: "none !important", // Remove background
  borderRadius: "0 !important", // Remove border-radius
  boxShadow: "none !important", // Remove shadow

  "&:hover .content": {
    transform: "perspective(250px) rotateY(0)",
  },
});

const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  img: {
    width: "100%",
    display: "block",
    borderRadius: "0 !important", // Remove image radius
  },
});

const Content = styled(Box)({
  position: "absolute",
  right: "-1px",
  bottom: 0,
  padding: "15px 25px",
  maxWidth: "320px",
  backgroundColor: "#1e1e1e",
  transformOrigin: "right",
  transform: "perspective(250px) rotateY(-90deg)",
  transition: "all 400ms ease-in-out",
});
// Styled Animated Button
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
  // width: "20px",
  // height: "20px",
});

// Styled MUI Icons
const ArrowIconStyled = styled(ArrowOutwardIcon)({

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


// Project Data
const projects: ProjectCardProps[] = [
  { title: "AI & Robotics", image: Home.portfolio1, link: "case-details.html" },
  { title: "Gaming & Virtual Reality", image: Home.portfolio2, link: "case-details.html" },
  { title: "Augmented Reality", image: Home.portfolio5, link: "case-details.html" },
  { title: "Cybernetics", image: Home.portfolio4, link: "case-details.html" },
  { title: "Digital Advertising", image: Home.portfolio3, link: "case-details.html" },
  { title: "Underwater Dreams", image: Home.portfolio6, link: "case-details.html" },
  { title: "Cyberpunk City", image: Home.portfolio7, link: "case-details.html" },
];

const CreativeWorksSection: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Box sx={{ py: 10, px: { xs: 6, lg: 0 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Header */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <AnimatedText sx={{fontSize:{xs:'5em',lg:'3.2em'},md:{xs:3,lg:0}}}>
                OUR CREATIVE WORKS ARE OUR IDENTITY
                </AnimatedText>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="body1" color="white" sx={{ mb: { xs: 3, lg: 0 } ,textAlign:{xs:'justify',lg:'left'}}}>
              We develop powerful, data-driven marketing strategies to elevate your brand and maximize its digital impact. If you're unsure how to achieve more, we’ll redefine your branding, identify new growth opportunities, and position your business for success in the ever-evolving digital landscape.
            </Typography>
          </Grid>

          {/* First 3 images in column layout */}
          <Grid item xs={12} lg={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {projects.slice(0, 3).map((project, index) => (
              <Project key={index}>
                <ImageContainer>
                  <a href={project.link}>
                    <img src={project.image} alt={project.title} />
                  </a>
                </ImageContainer>
                <Content className="content">
                  <Typography variant="h5" color="white">
                    <a href={project.link} style={{ color: "#fff", textDecoration: "none" }}>
                      {project.title}
                    </a>
                  </Typography>
                </Content>
              </Project>
            ))}
          </Grid>

          {/* Next 3 images in column layout */}
          <Grid item xs={12} lg={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {projects.slice(3, 6).map((project, index) => (
              <Project key={index}>
                <ImageContainer>
                  <a href={project.link}>
                    <img src={project.image} alt={project.title} />
                  </a>
                </ImageContainer>
                <Content className="content">
                  <Typography variant="h5" color="white">
                    <a href={project.link} style={{ color: "#fff", textDecoration: "none" }}>
                      {project.title}
                    </a>
                  </Typography>
                </Content>
              </Project>
            ))}
          </Grid>

          {/* Last image taking full width */}
          <Grid item xs={12}>
            <Project>
              <ImageContainer>
                <a href={projects[6].link}>
                  <img src={projects[6].image} alt={projects[6].title} />
                </a>
              </ImageContainer>
              <Content className="content">
                <Typography variant="h5" color="white">
                  <a href={projects[6].link} style={{ color: "#fff", textDecoration: "none" }}>
                    {projects[6].title}
                  </a>
                </Typography>
              </Content>
            </Project>
          </Grid>

          <Grid item xs={12}>
            <StyledButton onClick={() => navigate(window.location.href = "https://portfolio.dezignshark.com/folders")}
              sx={{
                width: { xs: '330px', lg: '100%' },
                height: { xs: '115px', lg: '55px' },
                fontSize: { xs: "2.2rem", lg: "1.2rem" }
              }}>
              See More
              <ArrowContainer className="btn-arrow-hover">
                <ArrowIconFirst className="arrow-first" sx={{ fontSize: { xs: '30px', lg: '16px ' } }} />
                <ArrowIconLast className="arrow-second" />
              </ArrowContainer>
            </StyledButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreativeWorksSection;
