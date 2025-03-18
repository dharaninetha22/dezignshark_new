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
        name: "Abuzar Khan",
        image: AboutImages.textimonial, // Replace with actual image URL
        review:
            "Incredible experience! Dezign Shark tailored a digital marketing plan that really worked for us. Our leads and conversions are up!",
    },
    {
        id: 2,
        name: "Ganesh Sunkara",
        image: AboutImages.textimonial,
        review:
            "They’re the experts you can trust! Dezign Shark developed a cohesive digital plan that aligned perfectly with our goals, delivering outstanding results.",
    },
    {
        id: 3,
        name: "Ram Ramu",
        image: AboutImages.textimonial,
        review:
            "Fantastic service for personal and organizational branding. Highly recommend!I feel so happy to work with them.",
    },
    {
        id: 4,
        name: "yamini chowdary",
        image: AboutImages.textimonial,
        review:
            "Highly professional and creative. Excellent on-time delivery and always exceeding expectations.",
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
                                        sm={4}
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                textAlign: {
                                                    xs:"left",
                                                    lg:'center'
                                                },
                                                color: "black",
                                                fontSize:{
                                                    xs:'30px',
                                                    lg:'24px'
                                                }
                                            }}
                                        >
                                            TRUSTED FROM OVER 1,500 CLIENTS
                                        </Typography>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: 200, height: 200, marginTop: 2 }}
                                        />
                                    </Grid>

                                    {/* Right Section: Testimonial Content */}
                                    <Grid item xs={12} sm={8}>
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "#333", textAlign: "justify" ,fontSize:{
                                                xs:'30px',
                                                lg:'24px'
                                            }}}
                                        >
                                            {testimonial.review}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: "bold",
                                                marginTop: 2,
                                                color: "black",
                                                textAlign: "left",
                                                fontSize:{
                                                    xs:'28px',
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
