import React, { useRef } from "react";
import Slider from "react-slick";
import {
    Box,
    Typography,
    Avatar,
    Grid,
    IconButton,
    Paper,
    Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AboutImages } from "../../assets";

// Sample Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "jagadeesh regulavalasa",
        image: AboutImages.textimonial, // Replace with actual image URL
        review:
            "Their strategies helped me enhance my online presence, boost engagement, and drive quality leads to my business. A professional and results-driven team—I highly recommend them for anyone looking to grow their brand online. And it is a one-stop solution for all branding services that helps to generate leads and significant growth in any business",
    },
    {
        id: 2,
        name: "hc karthik",
        image: AboutImages.textimonial,
        review:
            "We’ve had an amazing experience with Dezign Shark. They don’t just provide services—they truly partner with you to understand your business goals. Their insights and expertise have been invaluable for our growth. Highly recommend them to anyone searching for top-notch digital marketing in Hyderabad.",
    },
    {
        id: 3,
        name: "Jade Ramu",
        image: AboutImages.textimonial,
        review:
            "The team at Dezign Shark is incredibly talented and supportive. They guided us through every step of our SEO and lead generation strategies, ensuring we got excellent results. Their content marketing is top-notch, and the web development they provided is clean and efficient. I also appreciate their innovative approach to real estate marketing and brand strategies. Hands down, the best digital marketing agency in Hyderabad!",
    },
    {
        id: 4,
        name: "Engineer Edit",
        image: AboutImages.textimonial,
        review:
            "Dezign Shark provides outstanding services in SEO, lead generation, content marketing, and more. Their web development and app development skills are unparalleled. As the best digital marketing agency in Hyderabad, they also specialize in real estate marketing and innovative brand strategies.",
    },
];

const TestimonialSlider: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disabling default arrows
        autoplay: true, // ✅ Auto play enabled
        autoplaySpeed: 2000, // ✅ Changes every 3 seconds
        pauseOnHover: false, // ✅ No pause when hovering
    };

    return (
        <Box sx={{ backgroundColor: "#fff", py: 10, display: "flex", justifyContent: "center" }}>
            <Paper
                sx={{
                    width: {
                        xs:'86%',
                        lg:"1100px"
                    },
                    
                    padding: {
                        xs:'40px',
                        lg:"20px"
                    },
                    border: "1px solid #E8E8E8", // Added border around the slider
                    boxShadow: "none",
                    position: "relative",
                }}
            >
                {/* Slider Box */}
                <Box sx={{ width: "100%", margin: "auto" }}>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((testimonial) => (
                            <Box key={testimonial.id}>
                                <Grid container spacing={2} alignItems="center" sx={{ py: 5 }}>
                                    {/* Left Section: Image & Title */}
                                    <Grid
                                        item
                                        xs={12}
                                        lg={4}
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                    >
                                        {/* <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                textAlign: {
                                                    xs:"left",
                                                    lg:'center'
                                                },
                                                color: "black",
                                                fontSize:{
                                                    xs:'35px',
                                                    lg:'24px'
                                                },
                                                mb: {xs:4,lg:2}
                                            }}
                                        >
                                            TRUSTED FROM OVER 1,500 CLIENTS
                                        </Typography> */}
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                                
                                            sx={{ width: 200, height: 200, marginTop: 2 , mb: {xs:2,lg:0}}}
                                        />
                                    </Grid>

                                    {/* Right Section: Testimonial Content */}
                                    <Grid item xs={12} lg={8}>
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "#333", textAlign: "justify" ,fontSize:{
                                                xs:'36px',
                                                lg:'24px'
                                            }}}
                                        >
                                            {testimonial.review}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 600,
                                                marginTop: {xs:5,lg:2},
                                                color: "black",
                                                textAlign: "left",
                                                fontSize:{
                                                    xs:'32px',
                                                    lg:'20px'
                                                }
                                            }}
                                        >
                                            {testimonial.name} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Slider>
                </Box>

                {/* Custom Arrows with More Space */}
                <IconButton
                    onClick={() => sliderRef.current?.slickPrev()}
                    sx={{
                        position: "absolute",
                        bottom: "15px",
                        right: {
                            xs:'150px',
                            lg:"80px"
                        }, // Increased space between arrows
                        border: "2px solid black",
                        backgroundColor: "white",
                        borderRadius: "0px", // No border-radius (square shape)
                        "&:hover": { backgroundColor: "#f5f5f5" },
                       
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

                <IconButton
                    onClick={() => sliderRef.current?.slickNext()}
                    sx={{
                        position: "absolute",
                        bottom: "15px",
                        right:  {
                            xs:'80px',
                            lg:"10px"
                        }, // More space between arrows
                        border: "2px solid black",
                        borderRadius: "0px", // No border-radius (square shape)
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Paper>
        </Box>
    );
};

export default TestimonialSlider;
