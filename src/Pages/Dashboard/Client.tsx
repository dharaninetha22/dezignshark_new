import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/system";
import { SliderLogos } from "../../assets";

// Partner logos
const partnerLogos = [
  SliderLogos.slider1,
  SliderLogos.slider2,
  SliderLogos.slider3,
  SliderLogos.slider4,
  SliderLogos.slider5,
  SliderLogos.slider6,
  SliderLogos.slider7,
  SliderLogos.slider8,
  SliderLogos.slider9,
  SliderLogos.slider10,
  SliderLogos.slider11,
  SliderLogos.slider12,
  SliderLogos.slider13,
  SliderLogos.slider14,
  SliderLogos.slider15,
  SliderLogos.slider16,
  SliderLogos.slider17,
  SliderLogos.slider18,
  SliderLogos.slider19,
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
  "& img": {
    maxHeight: "110px",
    transition: "all 0.3s",
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
    <PartnerSection>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 4 }, // ✅ 4 slides in mobile
          480: { slidesPerView: 4 }, // ✅ 4 slides in small devices
          768: { slidesPerView: 4 }, // Medium tablets
          1024: { slidesPerView: 6 }, // Large screens
        }}
      >
        {partnerLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <PartnerImageWrapper>
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
