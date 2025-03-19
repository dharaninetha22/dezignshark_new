import React, { useEffect } from "react";
import { Box, Typography, IconButton, Container, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Home } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";

// Define service type
interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
}

// Services Data
const services: Service[] = [
  {
    id: "Search Engine Optimisation",
    title: "Search Engine Optimization (SEO)",
    subtitle: "We drive engagement & credibility with data-driven social media strategies.",
    description: ["Social media profile optimization.", "Engaging content creation & campaign management."],
    image: Home.seoicon,
  },
  {
    id: "Web Development",
    title: "Website Design & Development",
    subtitle: "Transform Visitors into Customers with a Stunning Website",
    description: ["UX/UI-optimized website designs.", "SEO-friendly website structure."],
    image: Home.webicon,
  },
  {
    id: "Pay-Per-Click",
    title: "Pay-Per-Click (PPC) Advertising",
    subtitle: "Our PPC campaigns drive leads & sales with Google Ads, Facebook Ads & retargeting.",
    description: ["A/B tested high-converting ad creatives.", "Data-driven bid management & audience segmentation."],
    image: Home.ppc,
  },
  {
    id: "Graphic Designing",
    title: "Content Marketing",
    subtitle: "Make a bold visual impact with cutting-edge designs that capture attention.",
    description: ["SEO-optimized blogs & articles.", "Video scripts & infographics."],
    image: Home.contenticon,
  },
  {
    id: "Branding",
    title: "Creative Design & Branding",
    subtitle: "We craft creative designs for a strong, distinctive brand presence.",
    description: ["Logo design & complete brand identity.", "Website, social media & ad creatives"],
    image: Home.branding,
  },
  {
    id: "Social Media Marketing",
    title: "Social Media Optimization (SMO)",
    subtitle: "We drive engagement & credibility with data-driven social media strategies.",
    description: ["Social media profile optimization.", "Engaging content creation & campaign management."],
    image: Home.smmicon,
  },
];

// Animation Variants
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ServicesSection: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();

  // ✅ Check if screen size is mobile
  const isMobile = useMediaQuery("(max-width:1080px)");

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Box sx={{ pt: 10, pb: 10, background: "#f8f8f8", px: { xs: 6, lg: 0 } }}>
      <motion.div ref={ref} initial="hidden" animate={controls} variants={slideUp}>
        <Container maxWidth="xl">
          {/* Main Title */}

          <AnimatedText sx={{ color: 'black', textAlign: "left", mb: 5, fontSize: { xs: '5em', lg: '3.2em' } }}>
            Our Services
          </AnimatedText>

        </Container>
      </motion.div>

      <Swiper
        modules={[Pagination, Mousewheel]}
        slidesPerView={2.5} // Default for desktop
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        mousewheel={{ invert: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 }, // ✅ Mobile: Show only 1 card
          768: { slidesPerView: 1 }, // ✅ Tablets: Show 1.5 cards
          1024: { slidesPerView: 2.5 }, // ✅ Larger screens: Show 2.5 cards
        }}
        style={{ width: "100%", height: "700px" }}

      >
        {services.map((service) => (
          <SwiperSlide key={service.id} id={service.id} >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={slideUp}
              onClick={() => navigate(`/services/${service.id}`)}
              style={{
                // height: "320px",
                height: isMobile ? "700px" : "320px",
                padding: "30px",
                background: "#eeeeee",
                borderRadius: "8px",
                color: "black",
                textAlign: "left",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                border: "1px solid #dadada",
                cursor: "pointer",
              }}
            >
              {/* Service Title, Subtitle, and Description List */}
              <Box  >
                {/* Title in flex */}
                <Box display="flex" alignItems="center" gap={3} sx={{ mt: 1 }}>
                  <Box
                    sx={{
                      width: { xs: '160px', lg: '100px' },
                      height: { xs: '160px', lg: '100px' },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      border: "1px solid black",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    {/* <img src={service.image} alt={service.title} style={{ width: "60px", height: "60px" }} /> */}
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: { xs: "100px", lg: "60px" }, // Image size responsive
                        height:{ xs: "100px", lg: "60px" },
                      }}
                    />
                  </Box>
                  <Typography variant="h5" color="black" fontWeight={800}
                    sx={{
                      fontSize: {
                        xs: '40px',
                        lg: '24px'
                      },
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                <Typography variant="body1" color="#555" fontWeight={500} my={2}
                  sx={{
                    fontSize: {
                      xs: '36px',
                      lg: '18px'
                    },
                  }}>
                  {service.subtitle}
                </Typography>

                {/* List with Circular Bullets */}
                <Box component="ul" sx={{
                  padding: 0, listStyle: "none", margin: 0,
                }}>
                  {service.description.map((point, i) => (
                    <Box component="li" key={i} sx={{
                      display: "flex", alignItems: "center", gap: {
                        xs: '15px',
                        lg: '10px'
                      }, mb: "8px", color: "#828282"
                    }}>
                      <Box sx={{
                        width: {
                          xs: '15px',
                          lg: '8px'
                        },
                        height: {
                          xs: '15px',
                          lg: '8px'
                        },
                        borderRadius: "50%",
                        backgroundColor: "black",
                        flexShrink: 0
                      }} />
                      <Typography variant="body2" sx={{
                        color: "#828282",
                        fontSize: {
                          xs: '36px',
                          lg: '16px'
                        }
                      }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Get Started Button */}
              <Box display="flex" alignItems="center" onClick={() => navigate(`/services/${service.id}`)} sx={{ cursor: "pointer" }}>
                <Box sx={{
                  color: "black", fontSize: {
                    xs: '34px',
                    lg: '16px'
                  }, fontWeight: 500
                }}>Get Started</Box>
                <IconButton sx={{
                  color: "black", ml: 1, fontSize: {
                    xs: '2.5rem',
                    lg: '1.5rem'
                  }
                }}>
                  <ArrowForward />
                </IconButton>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ServicesSection;
