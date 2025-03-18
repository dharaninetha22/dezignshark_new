import React from "react";
import Slider from "react-slick";
import { Box, Typography, Container, Card, CardMedia, CardContent } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";


// Blog Data
const blogs = [
  {
    image: Home.blog,
    title: "How Data Backup & Recovery Can Save Your Business",
    author: "Tyson Fritz",
    link: "blog-details.html",
  },
  {
    image: Home.blog,
    title: "The Benefits of Cloud Computing for Small Businesses",
    author: "Tyson Fritz",
    link: "blog-details.html",
  },
  {
    image: Home.blog,
    title: "Top Cybersecurity Threats and How to Protect Your Business",
    author: "Tyson Fritz",
    link: "blog-details.html",
  },
  {
    image: Home.blog,
    title: "Search Engine Optimization For Streamline Solutions",
    author: "Tyson Fritz",
    link: "blog-details.html",
  },
];

const BlogCarousel: React.FC = () => {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show exactly 2 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false, // Prevents partial slides from showing
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth='xl'>
        {/* Section Heading */}
        <Box sx={{ textAlign: "center", mb: 6}}>
          <AnimatedText >
            Latest Blog
          </AnimatedText>
        </Box>

        {/* Slick Slider Carousel */}
        <Box sx={{}}> {/* Negative margin ensures consistent spacing */}
          <Slider {...sliderSettings}>
            {blogs.map((blog, index) => (
              <Box key={index} sx={{}}> {/* Adds gap between slides */}
                <Card
                  className="shine-overlay"
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    transition: "transform 0.4s ease",
                    "&:hover .image": {
                      transform: "scale(1.1)",
                    },
                    "&:hover .shine": {
                      animation: "shineAnimation 0.75s linear",
                      display: "block",
                    },
                    backgroundColor: 'transparent',
                  }}
                >
                  {/* Blog Image with Hover Animation */}
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      image={blog.image}
                      alt="Blog"
                      className="image"
                      sx={{
                        width: "100%",
                        // height: 250,
                        transition: "all 0.4s ease",
                      }}
                    />

                    {/* Shine Effect */}
                    <Box
                      className="shine"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
                        transform: "skewX(-30deg)",
                        opacity: 0,
                        pointerEvents: "none",
                        zIndex: 3,
                        display: "none",
                      }}
                    />
                  </Box>

                  {/* Blog Content */}
                  <CardContent sx={{
                    backgroundColor: "transparent",
                    padding: "20px",
                    border: "1px solid #3c3c3c", // Adds a border to the CardContent
                    borderTop: "none", // Removes border from the top
                    borderBottomLeftRadius: "15px", // Rounds bottom-left corner
                    borderBottomRightRadius: "15px", // Rounds bottom-right corner
                    py:5
                  }}>
                    <Typography variant="h6" sx={{ color: "#fff", mb: 1 ,textAlign:'left'}}>
                      By <strong style={{ color: "#fc0000", }}>{blog.author}</strong>
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", fontSize: "18px",textAlign:'left' }}>
                      <a href={blog.link} style={{ textDecoration: "none", color: "inherit" }}>
                        {blog.title}
                      </a>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>

      {/* Keyframes for Shine Effect */}
      <style>
        {`
          @keyframes shineAnimation {
            0% {
              left: -100%;
              opacity: 0;
            }
            50% {
              left: 50%;
              opacity: 0.5;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }

          /* Ensures proper spacing between slides */
          .slick-slide > div {
            margin: 0 10px; /* Adjust margin to increase/decrease gap */
          }

          /* Fix alignment issues */
          .slick-list {
            margin: 0 -10px; /* Counteracts extra margin on slides */
          }
        `}
      </style>
    </Box>
  );
};

export default BlogCarousel;
