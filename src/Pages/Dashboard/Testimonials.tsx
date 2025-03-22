import React, { useRef } from "react";
import { Box, Typography, IconButton, Container, Grid, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Home } from "../../assets"; // Ensure correct import
import AnimatedText from "../../Components/Inputs/AnimatedText";
import MaskedText from "../../Components/Inputs/MaskedText";
import Animated from "../About/Clients";


const testimonials = [
  {
    name: "jagadeesh regulavalasa",
    feedback: "Their strategies helped me enhance my online presence, boost engagement, and drive quality leads to my business. A professional and results-driven team—I highly recommend them for anyone looking to grow their brand online. And it is a one-stop solution for all branding services that helps to generate leads and significant growth in any business",
  },
  {
    name: "hc karthik",
    feedback: "We’ve had an amazing experience with Dezign Shark. They don’t just provide services—they truly partner with you to understand your business goals. Their insights and expertise have been invaluable for our growth. Highly recommend them to anyone searching for top-notch digital marketing in Hyderabad.",
  },
  {
    name: "Jade Ramu",
    feedback: "The team at Dezign Shark is incredibly talented and supportive. They guided us through every step of our SEO and lead generation strategies, ensuring we got excellent results. Their content marketing is top-notch, and the web development they provided is clean and efficient. I also appreciate their innovative approach to real estate marketing and brand strategies. Hands down, the best digital marketing agency in Hyderabad!",
  },
  {
    name: "Engineer Edit",
    feedback: "Dezign Shark provides outstanding services in SEO, lead generation, content marketing, and more. Their web development and app development skills are unparalleled. As the best digital marketing agency in Hyderabad, they also specialize in real estate marketing and innovative brand strategies.",
  },
];

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 cards per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Disabled default arrows
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: { slidesToShow: 1, slidesToScroll: 1 }, // 1 card per row on smaller screens
      },
    ],
  };

  return (
    <Box sx={{ py: 4, position: "relative" }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} lg={5} sx={{  mb: 5,  textAlign: "left",px:{xs:'63px',lg:'0'}  }}>

              <AnimatedText sx={{fontSize:{xs:'5em',lg:'3.2em'},mb:{xs:3,lg:1}}} >
                WHAT CLIENTS SAY ABOUT US
              </AnimatedText>
            
          </Grid>

        </Grid>
        {/* Title */}

        {/* Arrows Below Title */}
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 4 ,px:{xs:'63px',lg:'0'}}}>
          <IconButton
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{
              border: "1px solid #3A3A3A",
              "&:hover": { backgroundColor: "#1E1E1E" },
              color: "#fff",
              mr: 2,
            }}
          >
            <HiArrowSmallLeft style={{ fontSize: "35px" }} />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current?.slickNext()}
            sx={{
              border: "1px solid #3A3A3A",
              "&:hover": { backgroundColor: "#1E1E1E" },
              color: "#fff",
            }}
          >
            <HiArrowSmallRight style={{ fontSize: "35px" }} />
          </IconButton>
        </Box>

        {/* Testimonial Slider */}
        <Slider ref={(slider) => { sliderRef.current = slider; }} {...settings}>
          {testimonials.map((item, index) => (
            <Grid key={index} item xs={12} lg={6} sx={{ px: 6 }}>
              <Paper
                sx={{
                  position: "relative",
                  padding: "100px 40px 65px",
                  background: "#1E1E1E",
                  borderRadius: "20px",
                  color: "#fff",
                  textAlign: "left",
                  border: "1px solid #3A3A3A",
                  margin: "0 20px",
                  height:{
                    xs:'755px',
                    lg:'450px'
                  },
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-evenly'
                }}
              >
                {/* Background Image Instead of Quote Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "25px",
                    left: "-54px",
                    backgroundImage: `url(${Home.testi})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "137.5px",
                    height: "88px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormatQuoteIcon sx={{ fontSize: "40px", color: "#fff" }} />
                </Box>

                {/* Testimonial Text */}
                <Typography variant="h6" sx={{ fontWeight: 400, fontSize:{xs:'40px',lg:"24px"}, lineHeight: {xs:'1.5em',lg:'1.5em'}, mb: 4, mt: {xs:5,lg:3} }}>
                  {item.feedback}
                </Typography>

                {/* User Info */}
                <Box sx={{ pt: 2, borderTop: "1px solid #3A3A3A" }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: {xs:'30px',lg:"24px"}, color: "#fc0000" ,textAlign:'right'}}>
                    {item.name}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ fontSize: "18px", color: "#bdbdbd" }}>
                    {item.position}
                  </Typography> */}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
