import React from "react";
import { Box, Grid, Card, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // ✅ Navigation
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // ✅ Error Icon
import AnimatedText from "../../Components/Inputs/AnimatedText";
import { Home } from "../../assets";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// TypeScript Props Definition
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

// Styled Component for Hover Effect
const FancyBox = styled(Card)({
  position: "relative",
  padding: "20px 25px",
  border: "2px solid transparent",
  backgroundColor: "#171717",
  transition: "border 0.4s ease-in-out",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%", // Ensure all cards have the same height
  cursor: "pointer",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    backgroundColor: "#fc0000",
    transition: "width 0.3s ease-in-out",
  },

  "&::before": { top: 0, left: 0, right: 0, margin: "auto" },
  "&::after": { bottom: 0, left: 0, right: 0, margin: "auto" },

  "& .hover-lines::before, & .hover-lines::after": {
    content: '""',
    position: "absolute",
    width: "1px",
    height: "0",
    backgroundColor: "#fc0000",
    transition: "height 0.3s ease-in-out",
  },

  "& .hover-lines::before": { left: 0, top: 0, bottom: 0, margin: "auto" },
  "& .hover-lines::after": { right: 0, top: 0, bottom: 0, margin: "auto" },

  "&:hover": {
    "&::before, &::after": { width: "100%" },
    "& .hover-lines::before, & .hover-lines::after": { height: "100%" },
    "& img": { transform: "scale(-1) rotate(180deg)" },
  },
});

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, route }) => {
  const navigate = useNavigate();

  return (
    <FancyBox elevation={3} sx={{ border: "1px solid #444", width: "100%",cursor: "none !important", }} onClick={() => navigate(route)}>
      <Box className="hover-lines"></Box>
      <Box display="flex" justifyContent="start" mb={3} sx={{py:{xs:3,lg:0}}}>
        {/* <img
          src={imageUrl}
          alt={title}
          style={{
            width: "80px",
            height: "80px",
            transition: "500ms ease",
            objectFit: "contain",
            filter: "brightness(0) invert(1)", // Makes image white
            
          }}
        /> */}

        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: { xs: "21%", lg: "80px" }, // ✅ 200px on mobile, 80px on larger screens
            height: { xs: "100%", lg: "80px" },
            transition: "500ms ease",
            objectFit: "contain",
            filter: "brightness(0) invert(1)", // Makes image white
          }}
        />
      </Box>
      <Typography variant="h4" fontWeight={700} color="white" mb={2} textAlign="left">
        {title}
      </Typography>
      <Typography variant="body1" color="white" textAlign="left" sx={{fontSize:{xs:'30px',lg:'18px'}}}>
        {description}
      </Typography>

      {/* ✅ Error Icon & Read More Text */}
      <Box display="flex" alignItems="center" justifyContent="flex-end" mt={3}>
        <Typography variant="body2" color="#fc0000" sx={{ fontWeight: 600, cursor: "none !important", fontSize:{xs:'38px',lg:'14px'}}}>
          Read More
        </Typography>
        <ArrowOutwardIcon sx={{ color: "#fc0000", ml: 1, fontSize: {xs:'48px',lg:"18px"} }} />
      </Box>
    </FancyBox>
  );
};

// Services Section Component
const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    { title: "Branding", description: "Create a powerful brand identity with expert branding & design. We craft unique logos, visuals, and messaging.", imageUrl: Home.branding, route: "/services/branding" },
    { title: "Social Media Management", description: "Elevate your brand with expert Social Media Marketing (SMM). We create engaging, data-driven campaigns to boost.", imageUrl: Home.smmicon, route: "/services/smm" },
    { title: "Pay-Per-Click (PPC)", description: "Accelerate growth with result-driven Pay-Per-Click (PPC) advertising. Our targeted, data-backed campaigns maximize.", imageUrl: Home.ppc, route: "/services/ppc" },
    { title: "Search Engine Optimization", description: "Boost your online presence with expert SEO services. We help you rank higher on Google, improve brand credibility.", imageUrl: Home.seoicon, route: "/services/seo" },
  ];

  return (
    <Box sx={{ borderTop: "1px solid #343434", py: 5,px:{xs:'63px',lg:'0'} }}>
      <Container maxWidth="xl">
        <Box sx={{ py: 5 }}>
          <Box textAlign="center" mb={5}>
            <AnimatedText sx={{fontSize:{xs:'5.2em',lg:'3.2em'}}}>Our Services</AnimatedText>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item key={index} xs={12} lg={3} sx={{ display: "flex", width: "100%", mt: { xs: 8, lg: 0 }, }}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
