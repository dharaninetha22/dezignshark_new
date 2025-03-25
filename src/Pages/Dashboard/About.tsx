import React, { useEffect, useRef } from "react";
import { Grid, Typography, Card, CardMedia, Box, Container, styled } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AnimatedText from "../../Components/Inputs/AnimatedText";



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


    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: "ease-in-out", // Smooth animation
            offset: 100, // Trigger animations earlier/later
            once: false, // Allows re-triggering when scrolling up
            mirror: true, // ✅ Ensures animations work when scrolling up
        });

        // Refresh AOS when page content updates
        AOS.refresh();
    }, []);
    return (
        <Box>
            <Container maxWidth="xl" sx={{ p: { xs: 6, lg: 0 }, py: { xs: 0, lg: 5 } }}>
                <Box sx={{ color: "white", position: "relative", overflow: "visible" }}>
                    <Grid container spacing={4}>
                        {/* Left Section - about2 Image */}
                        <Grid item xs={12} lg={6} sx={{ position: "relative", overflow: "visible", display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
                            <Card sx={{ backgroundColor: "transparent", boxShadow: "none", overflow: "visible" }}>
                                <CardMedia
                                    ref={about1ImageRef}
                                    component="img"
                                    image={Home.about4}
                                    alt="Team meeting"
                                    sx={{
                                        position: "relative",
                                        display: {
                                            lg: 'inline',
                                            xs: 'none'
                                        }
                                    }}
                                />


                            </Card>



                        </Grid>


                        {/* Right Section - ABOUT Text */}
                        <Grid item xs={12} lg={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography
                                // ref={aboutRef}
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { lg: "110px", xs: "85px" },
                                    lineHeight: "120px",
                                    color: "#937171",
                                    whiteSpace: "nowrap",
                                    // display: {
                                    //     lg: 'inline',
                                    //     xs: 'none'
                                    // },
                                    mb: 4
                                }}
                                data-aos="fade-down"
                            >
                                ABOUT US
                            </Typography>

                            <Typography variant="h1" 
                            >
                                <AnimatedText sx={{ fontSize: { xs: '1.5em', lg: '1.0em' ,textAlign:'left'},mt:3 }}>
                                    Dezign Shark – Powering Brands with High-Impact Digital Marketing
                                </AnimatedText>
                            </Typography>


                            <Typography variant="h3"
                                sx={{
                                    mt: {xs:4,lg:2},
                                    fontSize: { xs: "24px", lg: '1.3em' },
                                    maxWidth: { xs: '100%', lg: '600px' },
                                    textAlign: 'justify',
                                    fontWeight: 600
                                }}
                                data-aos="fade-left"
                            >
                                Drive Business Growth with Dezign Shark – A Results-Driven Digital Marketing Agency
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    mt: {xs:4,lg:2},
                                    fontSize: { xs: "18px", lg: '1em' },
                                    maxWidth: { xs: '100%', lg: '600px' },
                                    textAlign: 'justify'
                                }}
                                data-aos="fade-left"
                            >
                                At Dezign Shark, we don’t just market—we create powerful, high-impact digital marketing strategies that fuel brand growth and maximize ROI. As a top digital marketing agency, we leverage data-driven insights, innovative branding, and cutting-edge advertising solutions to help businesses thrive. Whether you’re looking to boost visibility, accelerate lead generation, or dominate your industry, we deliver strategic, results-oriented solutions that make an impact.
                            </Typography>
                            {/* <Typography variant="body1"
                                sx={{
                                    mt: 1,
                                    fontSize: { xs: "18px", lg: '1em' },
                                    maxWidth: { xs: '100%', lg: '500px' },
                                    textAlign: 'justify'
                                }}
                                data-aos="fade-left"
                            >
                                At Dezign Shark, we don’t just follow trends—we create them. Our data-driven strategies and creative marketing solutions help businesses thrive in today’s competitive digital space.
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Box>
            </Container>


        </Box>
    );
};

export default MarketingLayout;
