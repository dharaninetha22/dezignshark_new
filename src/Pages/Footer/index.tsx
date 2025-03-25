import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowUpward,
  YouTube,
} from "@mui/icons-material";
import { dslogo, Home } from "../../assets";

import { gsap } from "gsap";
import CustomInput from "../../Components/Inputs/CustomInput";
import CustomButton from "../../Components/Inputs/CustomButton";
import { useNavigate } from "react-router-dom";
import XIcon from '@mui/icons-material/X';

const socialIcons = [
  { icon: <Facebook sx={{ fontSize: { xs: "40px", lg: "20px" } }} />, href: "https://www.facebook.com/share/1BZTYjKt2H/", target: "_blank" },
  { icon: <XIcon sx={{ fontSize: { xs: "40px", lg: "20px" } }}/>, href: "https://x.com/DezignShark", target: "_blank" },
  { icon: <Instagram sx={{ fontSize: { xs: "40px", lg: "20px" } }}/>, href: "https://www.instagram.com/dezign__shark?igsh=YTZyMWd1N244MXZx", target: "_blank" },
  { icon: <LinkedIn sx={{ fontSize: { xs: "40px", lg: "20px" } }}/>, href: "https://www.linkedin.com/company/dezignshark/", target: "_blank" },
  { icon: <YouTube sx={{ fontSize: { xs: "40px", lg: "20px" } }}/>, href: "https://youtube.com/@dezignshark?si=7-aInZhNlvvwWfx7 ", target: "_blank" },
];
const menuItems = [
  { text: "About Us", path: "/aboutus" },
  { text: "Services", path: "/services" },
  { text: "Careers", path: "/careers" },
  { text: "Blog", path: "/blog" },
  { text: "Contact Us", path: "/contactus" },
];
const quickLinks = [
  { text: "Branding", path: "/services/branding" },
  { text: "Social Media Marketing", path: "/services/social-media-marketing" },
  { text: "Pay-Per-Click (PPC) Advertising", path: "/services/pay-per-click" },
  { text: "Web Development", path: "/services/web-development" },
  { text: "Search Engine Optimization (SEO)", path: "/services/search-engine-optimization" },
  { text: "Graphic Designing", path: "/services/graphic-designing" },

];

const Footer = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const logoFirstRef = useRef<HTMLDivElement | null>(null);
  const logoSecondRef = useRef<HTMLDivElement | null>(null);
  const shineRef = useRef<HTMLSpanElement | null>(null);
  const navigate = useNavigate(); // ✅ Initialize navigate function

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Set initial position for second logo
    gsap.set(logoSecondRef.current, { x: "-200%", y: "200%" });

    const hoverAnimation = gsap.timeline({ paused: true });

    hoverAnimation.to(logoFirstRef.current, {
      x: "200%",
      y: "-200%",
      duration: 0.3,
      ease: "power2.out",
    });

    hoverAnimation.to(
      logoSecondRef.current,
      {
        x: "0%",
        y: "0%",
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

    // Shine effect animation
    const shineAnimation = gsap.to(shineRef.current, {
      left: "130%",
      duration: 0.8,
      ease: "power2.out",
      paused: true,
    });

    // Event Handlers
    const handleMouseEnter = () => {
      hoverAnimation.play();
      shineAnimation.restart();
    };

    const handleMouseLeave = () => {
      hoverAnimation.reverse();
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(90deg, #2F057B 0%, #6441C1 100%)",
        color: "white",
        pt: 8,
        pb: 4,
        backgroundImage: `url(${Home.bgfooterimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "left",
        zIndex: 1,
        "::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          backgroundImage: "url('/img/background/bg-13.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth='xl' >
        <Grid container spacing={4} sx={{px:{xs:'63px',lg:'0'}}}>
          {/* Contact Us Section */}
          <Grid item xs={12} lg={3}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 4 }}>
              Contact Us
            </Typography>

            {/* Contact Info: Icons on Left, Text on Right */}
            <Box sx={{ display: "flex", alignItems: "start", mb: 2 ,gap:{xs:2,lg:0}}}>
              <LocationOn sx={{ fontSize: {xs:50,lg:24}, color: "#fc0000", minWidth: "40px" }} />
              <Typography variant="body2" sx={{fontSize: {xs:"30px",lg:"16px"}}}>
                68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", mb: 2 ,gap:{xs:2,lg:0}}}>
              <Phone sx={{  fontSize: {xs:50,lg:24}, color: "#fc0000", minWidth: "40px" ,}} />
              <Link href="tel:+91 799 799 2885" color="inherit" sx={{ textDecoration: "none",fontSize: {xs:"30px",lg:"16px"} }}>
                +91 799 799 2885
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start" ,gap:{xs:2,lg:0}}}>
              <Email sx={{ fontSize: {xs:50,lg:24}, color: "#fc0000", minWidth: "40px" }} />
              <Link href="mailto:info@dezignshark.com" color="inherit" sx={{ textDecoration: "none",fontSize: {xs:"30px",lg:"16px"} }}>
                info@dezignshark.com
              </Link>
            </Box>
            {/* Social Icons */}
            <Box sx={{ mt: {xs:5,lg:4}, display: "flex", gap: 1 }}>
              {socialIcons.map((item, index) => (
                <IconButton
                  key={index}
                  href={item.href}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    // fontSize: {xs:'50px',lg:'16px'},
                    textAlign: "center",
                    color: "white",
                    background: "rgba(255, 255, 255, 0.2)",
                    width: {xs:'100px',lg:'40px'},
                    height: {xs:'100px',lg:'40px'},
                    lineHeight: "40px",
                    borderRadius: "100%",
                    transition: "0.3s",
                    "&:hover": {
                      background: "white",
                      color: "#fc0000",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>

          </Grid>


          {/* Menu Section */}
          <Grid item xs={5} lg={3}

          >
            <Box sx={{
              paddingLeft: {
                xs: 0,
                lg: 8
              },
              mt: {
                xs: 3,
                lg: 0
              }
            }}>

              <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Menu
              </Typography>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  onClick={() => navigate(item.path)} // ✅ Navigate on click
                  sx={{
                    display: "block",
                    mt: {xs:3,lg:2},
                    textDecoration: "none",
                    color: "white",
                    transition: "color 0.3s ease", // ✅ Smooth transition
                    cursor: "pointer", // ✅ Indicate clickable
                    "&:hover": { color: "red" }, // ✅ Change color on hover
                    fontSize: {xs:"34px",lg:"16px"}
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={7} lg={3} 
          sx={{
            mt: {
                xs: 3,
                lg: 0
              }}}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Quick Links
            </Typography>
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.path} // ✅ Link to correct page
                sx={{
                  display: "block",
                  mt: {xs:3,lg:2},
                  textDecoration: "none",
                  color: "white",
                  transition: "color 0.3s ease", // ✅ Smooth transition
                  "&:hover": { color: "red" }, // ✅ Change color on hover
                  fontSize: {xs:"34px",lg:"16px"}
                }}
              >
                {item.text}
              </Link>
            ))}
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} lg={3}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4,mt: {xs:3,lg:0}, }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{fontSize: {xs:"34px",lg:"16px"},mb:2}}>
              Stay up-to-date with the latest trends in digital marketing and
              receive exclusive tips and insights.
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              sx={{ mt: 2, display: "flex", gap: 1 }}
            >
              {/* <CustomInput

                type="email"
                placeholder="Enter your email"
                required
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { color: "black" },
                }}
              /> */}


              <CustomButton
              sx={{
                width: { xs: '330px', lg: '80%' },
                height: { xs: '90px', lg: '55px' },
                fontSize: { xs: "2.2rem", lg: "1.2rem" },
                mt:{xs:4,lg:0}
              }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7271814903529652224",
                    "_blank", // ✅ Opens in a new tab
                    
                  );
                }}
              >
                Subscribe
              </CustomButton>

            </Box>


          </Grid>
        </Grid>

        <Box textAlign="center" mt={4} className="wptb-logo-button">
          <Button
            ref={btnRef}
            variant="outlined"
            onClick={() => navigate("/")} // ✅ Navigate to home page on click
            className="btn btn-default"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              borderRadius: "50px",
              borderColor: "#FDFDFD4D",
              color: "white",
              padding: "22px 42px",
              position: "relative",
              overflow: "hidden",
              backgroundImage:
          "linear-gradient(180deg, rgba(2,1,1,0) 0%, rgba(242,41,91,0) 100%)",
              "&:hover": {
          borderColor: "#fff",
          backgroundColor: "transparent",
              },
              width: '300px',
              height: "100px"
            }}
          >
            {/* Logo Hover Effect */}
            <span
              className="button-arrow-hover"
              style={{
          marginRight: "12px",
          position: "relative",
          fontSize: "0",
          display: "inline-block",
              }}
            >
              {/* First Logo (Visible Initially) */}
              <Box
          ref={logoFirstRef}
          sx={{
            position: "absolute",
            left: '-113px',
            top: '-30px',
            width: "auto",
            height: "auto",
          }}
              >
          <img src={dslogo} alt="DigiCove Logo" />
              </Box>

              {/* Second Logo (Hidden Initially, Appears on Hover) */}
              <Box
          ref={logoSecondRef}
          sx={{
            position: "absolute",
            left: '-113px',
            top: '-30px',
            width: "auto",
            height: "auto",
          }}
              >
          <img src={dslogo} alt="DigiCove Logo" />
              </Box>
            </span>

            {/* Shine Effect */}
            <span
              ref={shineRef}
              className="shine-effect"
              style={{
          content: '""',
          background: "#fff",
          position: "absolute",
          height: "120%",
          width: "15px",
          opacity: 0.2,
          left: "-45%",
          top: "-10%",
          transform: "rotate(15deg)",
              }}
            />
          </Button>
        </Box>

      </Container>
      <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.5)" }} />
      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography
      variant="body2"
      sx={{ fontSize: { xs: "30px", lg: "16px" } }}
    >
      Copyright ©2025{" "}
      <Link
                onClick={() => navigate("/")}

        sx={{ textDecoration: "none", color: "#fc0000", fontSize:'22px' }}
      >
        DezignShark
      </Link>
      . All rights reserved{" "}
      <Link
        sx={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "white",
          "&:hover": {
        color: "red",
          },
        }}
        onClick={() => navigate("/privacy-policy")}
      >
        Privacy Policy
      </Link>
    </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
