import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, IconButton, useMediaQuery, Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Home } from "../../assets"; // Ensure this import is correct and contains the required icons
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router";
import AnimatedText from "../../Components/Inputs/AnimatedText";

const services = [
    {
        id: "Search Engine Optimisation",
        title: "Search Engine Optimization (SEO)",
        subtitle: "Dominate Search Rankings with Cutting-Edge SEO Strategies",
        description: ["Data-driven keyword research & on-page optimization.", "High-authority link-building & performance tracking."],
        subdescription: "Boost organic traffic & establish long-term digital authority.",
        image: Home.seoicon,
    },
    {
        id: "Web Development",
        title: "Website Design & Development",
        subtitle: "Transform Visitors into Customers with a Stunning, High-Impact Website",
        description: ["UX/UI-optimized, conversion-focused designs.", "SEO-friendly, scalable website architecture."],
        subdescription: "Results-driven web solutions that enhance digital presence.",
        image: Home.webicon,
    },
    {
        id: "Pay-Per-Click",
        title: "Pay-Per-Click (PPC) Advertising",
        subtitle: "Maximize Conversions with Data-Driven, High-ROI Ad Campaigns",
        description: ["A/B tested, high-performing ad creatives.", "AI-powered bid management & audience segmentation."],
        subdescription: "Accelerate leads & sales with strategic ad placement.",
        image: Home.ppc,
    },
    {
        id: "Graphic Designing",
        title: "Graphic Designing",
        subtitle: "Make a Bold, Lasting Impact with Creative Visual Solutions",
        description: ["High-impact branding & marketing visuals.", "SEO-optimized infographics & video content."],
        subdescription: "Stand out with powerful, attention-grabbing designs.",
        image: Home.contenticon,
    },
    {
        id: "Branding",
        title: "Creative Design & Branding",
        subtitle: "Build a Powerful, Recognizable Brand Identity",
        description: ["Strategic logo design & complete brand identity development.", "Consistent branding across websites, social media & ads."],
        subdescription: "Establish authority & credibility with high-impact branding.",
        image: Home.branding,
    },
    {
        id: "Social Media Marketing",
        title: "Social Media Optimization (SMO)",
        subtitle: "Amplify Engagement with Data-Driven Social Media Strategies",
        description: ["Optimized social media profiles for maximum visibility.", "Creative, engaging content & strategic campaign management."],
        subdescription: "Enhance brand trust & credibility through social influence.",
        image: Home.smmicon,
    },
];

const positions: Array<"small1" | "big1" | "focus" | "big2" | "small2"> = [
    "small1",
    "big1",
    "focus",
    "big2",
    "small2"
];

const styles: Record<typeof positions[number], React.CSSProperties> = {
    small1: { left: "0px", top: "-10px", transform: "scale(0.8)", zIndex: 1 }, // Adjusted left to 0px
    big1: { left: "150px", top: "50px", transform: "scale(1)", zIndex: 2 },   // Adjusted left to 150px
    focus: { left: "450px", top: "100px", transform: "scale(1.2)", zIndex: 3 },
    big2: { left: "750px", top: "50px", transform: "scale(1)", zIndex: 2 },
    small2: { left: "1000px", top: "-10px", transform: "scale(0.8)", zIndex: 1 }
};

const ServicesSlider = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery("(max-width: 1040px)"); // Check if the screen size is mobile

    const mobilePositions: Array<"focus"> = ["focus"]; // Only one card in mobile view
    const desktopPositions: Array<"small1" | "big1" | "focus" | "big2" | "small2"> = [
        "small1",
        "big1",
        "focus",
        "big2",
        "small2"
    ];

    const activePositions = isMobile ? mobilePositions : desktopPositions;

    const mobileStyles: Record<typeof mobilePositions[number], React.CSSProperties> = {
        focus: { left: "50%", top: "50%", transform: "translate(-50%, -50%) scale(1.2)", zIndex: 3 }
    };

    const activeStyles: Record<string, React.CSSProperties> = isMobile ? mobileStyles : styles;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    useEffect(() => {
        services.forEach(service => {
            const link = document.createElement("link");
            link.rel = "prefetch";
            link.href = `/services/${service.id}`;
            document.head.appendChild(link);
        });
    }, []);

    // Optimized click handler
    const handleNavigate = useCallback((id: string) => {
        navigate(`/services/${id}`);
    }, [navigate]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                py: { xs: 0, lg: 12 },
                backgroundColor: "#272727",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                height: { xs: '59vh', lg: 'auto' }
            }}
        >
            <Box >
                <Container maxWidth='xl'>

                    <Grid container spacing={4} sx={{ mb: 5, px: { xs: 6, lg: 0 } }}>
                        <Grid item xs={12} lg={6}>
                            <Box sx={{ textAlign: { xs: "center", md: "left" }, }}>
                                <AnimatedText>Unlock Powerful Growth with Dezign Shark</AnimatedText>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="body1" color="white" sx={{ fontSize: { xs: '30px', lg: '18px', textAlign: 'left' } }} >
                                At Dezign Shark, we go beyond traditional marketing—we craft high-impact, data-driven, and results-oriented digital marketing strategies that maximize ROI, amplify brand visibility, and accelerate business growth. Our 360-degree approach ensures your brand stands out in the competitive digital landscape with cutting-edge technology, creative excellence, and performance-driven campaigns. Ready to transform your digital presence? Let’s make it happen!
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        width: isMobile ? "100%" : "100%", // Adjust width for mobile
                        height: isMobile ? "400px" : "480px" ,// Adjust height for mobile
                        mb:{xs:3,lg:10}
                    }}
                >
                    <IconButton
                        onClick={slideLeft}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            color: "black",
                            borderRadius: "50%",
                            zIndex: 10,
                            left: isMobile ? "-50px" : "25px", // Adjust position for mobile
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" }
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Box
                        component="ul"
                        sx={{
                            display: "flex",
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "transform 0.6s ease-in-out",
                            listStyle: "none",
                            p: 0,
                            m: 0
                        }}
                    >
                        {activePositions.map((pos, index) => {
                            const serviceIndex = (currentIndex + index) % services.length;
                            const service = services[serviceIndex];

                            return (
                                <Box
                                    component="li"
                                    key={service.id}
                                    sx={{
                                        position: "absolute",
                                        width: isMobile ? "700px" : "350px", // Adjust card width for mobile
                                        height: isMobile ? "550px" : "450px", // Adjust card height for mobile
                                        borderRadius: "5% / 3%",
                                        overflow: "hidden",
                                        transition: "all 0.6s ease-in-out, filter 0.3s ease-in-out",
                                        border: "1px solid white",
                                        filter: pos === "focus" ? "blur(0)" : "blur(1px)",
                                        opacity: pos === "focus" ? 1 : 0.6,
                                        ...(activeStyles[pos] || {}) ,// Safely access styles
                                       
                                    }}
                                >
                                    <Box
                                        onClick={() => navigate(`/services/${service.id.toLowerCase().replace(/\s+/g, '-')}`)}
                                        sx={{
                                            height: "100%",
                                            background: "#171717",
                                            borderRadius: "8px",
                                            color: "white",
                                            textAlign: "left",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            cursor: "pointer",
                                            px: 4

                                        }}
                                    >
                                        <Box>
                                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                                {/* Image Grid Item */}
                                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                                    <Box
                                                        sx={{
                                                            width: { xs: "80px", lg: "60px" }, // Adjusted container size for better appearance
                                                            height: { xs: "80px", lg: "60px" },
                                                            borderRadius: "50%", // Circular shape
                                                            border: "2px solid #fc0000", // Red border
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            overflow: "hidden",
                                                            p: 1,
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={service.image}
                                                            alt={service.title}
                                                            sx={{
                                                                width: "60%", // Ensures the image fits well inside the circle
                                                                height: "60%",
                                                                filter: "brightness(0) invert(1)", // Makes image white
                                                            }}
                                                        />
                                                    </Box>
                                                </Grid>

                                                {/* Text Grid Item */}
                                                <Grid item xs={12} md={8}>
                                                    <Typography
                                                        variant="h6"
                                                        color="#fff"
                                                        fontWeight={600}
                                                        sx={{
                                                            fontSize: { xs: "30px", lg: "22px" },
                                                        }}
                                                    >
                                                        {service.title}
                                                    </Typography>
                                                </Grid>
                                            </Grid>


                                            <Typography
                                                variant="body1"
                                                my={2}
                                                sx={{
                                                    fontSize: pos === "focus"
                                                        ? { xs: "36px", lg: "16px" }
                                                        : { xs: "24px", lg: "14px" }, // Decreased font size for inactive cards
                                                }}
                                            >
                                                {service.subtitle}
                                            </Typography>
                                            <Box component="ul" sx={{ padding: 0, listStyle: "none", margin: 0 }}>
                                                {service.description.map((point, i) => (
                                                    <Box component="li" key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "white" }} />
                                                        <Typography variant="body2"
                                                            sx={{
                                                                fontSize: pos === "focus"
                                                                    ? { xs: "28px", lg: "14px" }
                                                                    : { xs: "24px", lg: "14px" }, // Decreased font size for inactive cards
                                                            }}>{point}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Typography variant="body1" color="#fff" fontWeight={500} my={2}
                                                sx={{
                                                    fontSize: {
                                                        xs: '36px',
                                                        lg: '16px'
                                                    },
                                                }}>
                                                {service.subdescription}
                                            </Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" onClick={() => navigate(`/services/${service.id.toLowerCase().replace(/\s+/g, '-')}`)} sx={{ cursor: "none" }}>
                                            <Box sx={{
                                                color: "white", fontSize: {
                                                    xs: '34px',
                                                    lg: '16px'
                                                }, fontWeight: 500, cursor: 'none'
                                            }}>Read More</Box>
                                            <IconButton sx={{
                                                color: "#fc0000", ml: 1, fontSize: {
                                                    xs: '2.8rem',
                                                    lg: '1.8rem'
                                                }
                                            }}>
                                                <ArrowForward />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                    <IconButton
                        onClick={slideRight}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            color: "black",
                            borderRadius: "50%",
                            zIndex: 10,
                            right: isMobile ? "-56px" : "29px", // Adjust position for mobile
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" }
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesSlider;