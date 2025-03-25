import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "../../assets";


const images = [
  {
    src: Home.brochure1,
    
  },
  {
    src: Home.brochure2,
   
  },
  {
    src: Home.brochure3,
    
  },
  {
    src: Home.brochure4,
   
  },

];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "30px",
        boxShadow: "0 0 60px -20px #223344",
        position: "relative",
      }}
    >
      <Slider {...settings}>
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
                borderRadius: "30px",
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
  );
};

export default Carousel;
