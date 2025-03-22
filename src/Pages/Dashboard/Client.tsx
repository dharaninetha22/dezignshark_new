import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/system";
import { SliderLogos } from "../../assets";

// Partner logos
const partnerLogos = [
  SliderLogos.logo1,
  SliderLogos.logo2,
  SliderLogos.logo3,
  SliderLogos.logo4,
  SliderLogos.logo5,
  SliderLogos.logo6,
  SliderLogos.logo7,
  SliderLogos.logo8,
  SliderLogos.logo9,
  SliderLogos.logo10,
  SliderLogos.logo11,
  SliderLogos.logo12,
  SliderLogos.logo13,
  SliderLogos.logo14,
  SliderLogos.logo15,
  SliderLogos.logo16,
  SliderLogos.logo17,
  SliderLogos.logo18,
];

// Styled Components
const PartnerSection = styled(Box)({
  borderStyle: "solid",
  borderWidth: "1px 0px 1px 0px",
  borderColor: "#343434",
  transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
  marginTop: "17px",
  padding: "50px 0px",
});

const PartnerImageWrapper = styled(Box)({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  // "& img": {
  //   maxHeight: "110px",
  //   transition: "all 0.3s",
  // },
  "& img": {
    maxHeight: "110px",
    transition: "all 0.3s",
    "@media (max-width: 1048px)": {
      minHeight: "200px", // Ensures minimum height on mobile screens
    },
  },
  "& img:nth-of-type(2)": {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: 0,
    transform: "translate(-50%, -150%)",
  },
  "&:hover img:nth-of-type(1)": {
    opacity: 0,
    transform: "translateY(100%)",
  },
  "&:hover img:nth-of-type(2)": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
});

const PartnerCarousel: React.FC = () => {
  return (
    <PartnerSection sx={{mt:8}}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 }, 
          480: { slidesPerView: 2 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 6 }, // Large screens
        }}
      >
        {partnerLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <PartnerImageWrapper >
              <a href="#">
                {/* Original Image */}
                <img src={logo} alt={`Partner ${index}`} />
                {/* Hover Image (Same Image for Now) */}
                <img src={logo} alt={`Partner ${index}`} />
              </a>
            </PartnerImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnerSection>
  );
};

export default PartnerCarousel;
