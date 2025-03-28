// src/components/CardList.tsx
import React, { useEffect, useRef } from "react";
import { Card, CardMedia, CardContent, Typography, Box, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Replaced Link with useNavigate()
import gsap from "gsap";
import { blogData } from "./BlogDetails/BlogData";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import AOS from "aos";
import "aos/dist/aos.css";

const CardList: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#fff" }}>
            <Container maxWidth="xl">
                <Grid container spacing={3} justifyContent="center">
                    {blogData.map((blog) => (
                        <HoverCard key={blog.title} {...blog} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

// ✅ Card with GSAP Animation & Navigation
const HoverCard: React.FC<{  id: string;title: string; category: string; description: string; image: string }> = ({id, title, category, description, image }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const navigate = useNavigate(); // ✅ Using useNavigate() for navigation

    useEffect(() => {
        if (!cardRef.current || !imgRef.current) return;

        const hoverIn = () => gsap.to(imgRef.current, { scale: 1.2, duration: 1, ease: "power2.out" });
        const hoverOut = () => gsap.to(imgRef.current, { scale: 1, duration: 1, ease: "power2.out" });

        cardRef.current.addEventListener("mouseenter", hoverIn);
        cardRef.current.addEventListener("mouseleave", hoverOut);

        return () => {
            cardRef.current?.removeEventListener("mouseenter", hoverIn);
            cardRef.current?.removeEventListener("mouseleave", hoverOut);
        };
    }, []);

    // ✅ Handle navigation on click
    const handleNavigation = () => {
        navigate(`/blog/${id}`);
    };

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
        <Container maxWidth="xl" sx={{px:{xs:2,lg:0}}}>
            <Grid item md={12} sm={6} xs={12} ref={cardRef}>
                <Card sx={{ border: "1px solid #E6E9F0", boxShadow: 0, backgroundColor: "transparent", p: 4, textAlign: "left", mt: 4 }} onClick={handleNavigation} style={{ cursor: "pointer" }}>
                    <Box sx={{ overflow: "hidden" }}>
                        <CardMedia component="img" height="400" image={image} alt="Card Image" sx={{ transition: "transform 0.3s ease-in-out", }} ref={imgRef} />
                    </Box>

                    <CardContent sx={{ p: 2, backgroundColor: "transparent" }}>
                        <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1, textTransform: "uppercase", fontWeight: 500 ,fontSize:{xs:'20px',lg:'14px'} }}>{category}</Typography>
                        {/* <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1, color: 'black' }}>{title}</Typography> */}
                        <AnimatedText sx={{ fontWeight: "bold", mt: 1, color: 'black',fontSize:{xs:'44px',lg:'30px'} }}>
                        {title}
                        </AnimatedText>
                        <Typography variant="body2" color="#74787C" sx={{ mt: 1 ,fontSize:{xs:'21px',lg:'16px'}}}data-aos="fade-right">{description}</Typography>

                        {/* ✅ Read More Link (onClick triggers navigation) */}
                        <Box sx={{ mt: {xs:5,lg:2}, borderBottom: "1px solid #74787C", pb: 1, width:{xs:'148px',lg: "fit-content"} }} onClick={handleNavigation} style={{ cursor: "pointer" }}>
                            <Typography sx={{ fontWeight: 500, fontSize: {xs:'28px',lg:"0.9rem"}, color: 'black', "&:hover": { color: "#fc0000" }, display: "block" }}>
                                Read More
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};

export default CardList;
