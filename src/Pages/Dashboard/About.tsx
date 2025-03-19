import React, { useEffect, useRef } from "react";
import { Grid, Typography, Card, CardMedia, Box, Container, styled } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home } from "../../assets";

const CircleSVGWrapper = styled(Box)({
    position: "absolute",
    bottom: "440px",
    width: "100%",
    textAlign: "center",
});

gsap.registerPlugin(ScrollTrigger);

const MarketingLayout = () => {
    const aboutRef = useRef(null);
    const usRef = useRef(null);
    const about2ImageRef = useRef(null);
    const about1ImageRef = useRef(null);

    useEffect(() => {
        // Smooth & slow movement for ABOUT text
        gsap.fromTo(
            aboutRef.current,
            { x: 0 },
            {
                x: -80, // Moves slowly for a smooth effect
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 85%",
                    end: "top 25%",
                    scrub: 2, // Smoother transition
                },
            }
        );

        // Smooth & slow movement for US text
        gsap.fromTo(
            usRef.current,
            { x: 0 },
            {
                x: 150,
                scrollTrigger: {
                    trigger: usRef.current,
                    start: "top 85%",
                    end: "top 25%",
                    scrub: 2, // Slower movement
                },
            }
        );

        // ✅ Move about2Image (Home.about2) UP when scrolling bottom to top
        gsap.fromTo(
            about2ImageRef.current,
            { yPercent: 0 }, // Normal position
            {
                yPercent: -30, // Moves UP when scrolling bottom to top
                scrollTrigger: {
                    trigger: about2ImageRef.current,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: 1.5,
                },
            }
        );

        // ✅ Move about1Image smoothly upwards
        gsap.fromTo(
            about1ImageRef.current,
            { yPercent: 30 }, // Start a bit lower
            {
                yPercent: 0, // Moves to normal position
                scrollTrigger: {
                    trigger: about1ImageRef.current,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: 1.5,
                },
            }
        );
    }, []);

    return (
        <Box>
            <Container maxWidth="xl" sx={{p:{xs:6,lg:0}}}>
                <Box sx={{ color: "white", position: "relative", overflow: "visible" }}>
                    <Grid container spacing={4}>
                        {/* Left Section - about2 Image */}
                        <Grid item xs={12} lg={7} sx={{ position: "relative", overflow: "visible", display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            <Card sx={{ backgroundColor: "transparent", boxShadow: "none", overflow: "visible" }}>
                                <CardMedia
                                    ref={about1ImageRef}
                                    component="img"
                                    image={Home.about2}
                                    alt="Team meeting"
                                    sx={{ position: "relative", 
                                        display: {
                                        lg: 'inline',
                                        xs: 'none'
                                    }}}
                                />
                            </Card>
                        </Grid>

                        {/* Right Section - ABOUT Text */}
                        <Grid item xs={12} lg={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography variant="h4" fontWeight="bold" textAlign='left'
                             sx={{
                                textTransform:'uppercase',
                                letterSpacing:'4px',
                                mb:{
                                    xs:5,
                                    lg:0
                                },
                                mt:{
                                    xs:2,
                                    lg:0
                                }
                                }}>
                                Elevate Your Brand with the Best Digital Marketing Agency in Hyderabad
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    mt: 1,
                                    fontSize: { xs: "18px", lg: '1em' },
                                    maxWidth: { xs: '100%', lg: '500px' },
                                    textAlign: 'justify'
                                }}
                            >
                                Looking for a reliable digital marketing agency to take your business to the next level? Welcome to Dezign Shark, one of the best digital marketing agencies in Hyderabad, offering result-driven strategies that maximize brand visibility, website traffic, and conversions.
                            </Typography>
                            <Typography
                                ref={aboutRef}
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    mt: 2,
                                    fontSize: { lg: "110px", xs: "50px" },
                                    lineHeight: "120px",
                                    color: "#937171",
                                    whiteSpace: "nowrap",
                                    display: {
                                        lg: 'inline',
                                        xs: 'none'
                                    }
                                }}
                            >
                                ABOUT
                            </Typography>
                        </Grid>

                        {/* Left Section - US Text */}
                        <Grid item xs={12} lg={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography
                                ref={usRef}
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { lg: "110px", xs: "50px" },
                                    lineHeight: "120px",
                                    color: "#937171",
                                    whiteSpace: "nowrap",
                                    display: {
                                        lg: 'inline',
                                        xs: 'none'
                                    }
                                }}
                            >
                                US
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    fontSize:
                                    {
                                        xs: "18px",
                                        lg: '1em'
                                    },
                                   textAlign: 'justify',
                                    mt: -1,
                                    maxWidth: {
                                        xs: '100%',
                                        lg: '400px'
                                    },
                                    mb: {
                                        xs: 8,
                                        lg: 0
                                    }
                                }}>
                                At Dezign Shark, we don’t just follow trends—we create them. Our data-driven strategies and creative marketing solutions help businesses thrive in today’s competitive digital space.
                            </Typography>
                        </Grid>

                        {/* Right Section - about1 Image */}
                        <Grid item xs={12} lg={7}
                         sx={{ 
                            position: "relative", overflow: "visible", display: "flex", alignItems: "center", right: '40px', justifyContent: 'center' ,
                            mt:{
                                    xs:5,
                                    lg:0
                                }}}>
                            <Card sx={{ backgroundColor: "transparent", boxShadow: "none", overflow: "visible" }}>
                                <CardMedia
                                    ref={about2ImageRef}
                                    component="img"
                                    image={Home.about1}
                                    alt="Conference"
                                    sx={{ position: "relative", zIndex: 10 ,ml:{xs:5,lg:0}}}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </Box>
    );
};

export default MarketingLayout;
