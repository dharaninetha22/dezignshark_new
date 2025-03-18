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
} from "@mui/icons-material";
import { dslogo, Home } from "../../assets";

import { gsap } from "gsap";
import CustomInput from "../../Components/Inputs/CustomInput";
import CustomButton from "../../Components/Inputs/CustomButton";

const socialIcons = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <LinkedIn />, href: "#" },
];

const Footer = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const logoFirstRef = useRef<HTMLDivElement | null>(null);
  const logoSecondRef = useRef<HTMLDivElement | null>(null);
  const shineRef = useRef<HTMLSpanElement | null>(null);

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
        pb:4,
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
      <Container maxWidth='xl'>
        <Grid container spacing={4}>
          {/* Contact Us Section */}
          <Grid item xs={12}  lg={4}>
            <Typography variant="h4" gutterBottom sx={{fontWeight:800,mb:4}}>
              Contact Us
            </Typography>
            <Typography variant="body2" >
              <LocationOn sx={{ verticalAlign: "middle", mr: 1 }} />
              68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
            </Typography>
            <Link
              href="tel:+91 799 799 2885"
              color="inherit"
              sx={{ display: "block", mt: 2, textDecoration: "none" }}
            >
              <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
              +91 799 799 2885
            </Link>
            <Link
              href="mailto:info@dezignshark.com"
              color="inherit"
              sx={{ display: "block", mt: 2, textDecoration: "none" }}
            >
              <Email sx={{ verticalAlign: "middle", mr: 1 }} />
              info@dezignshark.com
            </Link>
            {/* Social Icons */}
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              {socialIcons.map((item, index) => (
                <IconButton
                  key={index}
                  href={item.href}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "white",
                    background: "rgba(255, 255, 255, 0.2)",
                    width: "40px",
                    height: "40px",
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
          <Grid item xs={12}  lg={2}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
              Menu
            </Typography>
            {["About Us", "Services", "Blog", "Pricing", "Contact Us"].map(
              (text, index) => (
                <Link
                  key={index}
                  href={`${text.toLowerCase().replace(" ", "-")}.html`}
                  color="inherit"
                  display="block"
                  sx={{ mt: 1, textDecoration: "none" }}
                >
                  {text}
                </Link>
              )
            )}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12}  lg={2}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
              Quick Links
            </Typography>
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (text, index) => (
                <Link
                  key={index}
                  href={`${text.toLowerCase().replace(" ", "-")}.html`}
                  color="inherit"
                  display="block"
                  sx={{ mt: 1, textDecoration: "none" }}
                >
                  {text}
                </Link>
              )
            )}
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12}  lg={4}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2">
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
              <CustomInput

                type="email"
                placeholder="Enter your email"
                required
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputBase-root": { color: "black" },
                }}
              />
       

              <CustomButton>Subscribe</CustomButton>
            </Box>

          
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4} className="wptb-logo-button">
          <Button
            ref={btnRef}

            variant="outlined"
            href="index.html"
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
        <Typography variant="body2">
          Copyright ©2025 <Link href="index.html" color="inherit" sx={{ textDecoration: "none", color: '#fc0000' }}>DezignShark</Link>. All rights reserved {" "}
          {/* <Link href="https://themeforest.net/user/wpthemebooster" color="inherit" sx={{ textDecoration: "none" }}>
            WPThemeBooster
          </Link>. */}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
