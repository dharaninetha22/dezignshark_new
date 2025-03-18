import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutImages } from "../../assets"; // Import your image source

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Styled Components
const TeamContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  "&:hover img": {
    transform: "scalex(-1)", // Flip animation
  },
  "&:hover .inner-content": {
    left: "40px",
    opacity: 1,
  },
});

const TeamImage = styled("img")({
  width: "100%",
  transform: "scale(1)",
  transition: "0.8s",
});

const InnerContent = styled(Box)({
  position: "absolute",
  left: "-50px",
  bottom: "40px",
  opacity: 0,
  transition: "0.8s",
});

const RoleTag = styled(Box)({
  display: "block",
  padding: "11px 20px",
  maxWidth: "max-content",
  background: "#141414",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "1.4px",
  textTransform: "uppercase",
});

const NameBox = styled(Box)({
  padding: "18px 25px",
  background: "#fff",
  display: "block",
});

const TeamSection: React.FC = () => {
  const teamRef = useRef<(HTMLDivElement | null)[]>([]); // ✅ Explicitly typed ref

  useEffect(() => {
    let teamItems = teamRef.current.filter((el): el is HTMLDivElement => el !== null);

    teamItems.forEach((item) => {
      gsap.set(item, { opacity: 0.7 });

      gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: 2,
          start: "top bottom+=100",
          end: "bottom center",
          markers: false,
        },
      }).to(item, {
        scale: 1,
        opacity: 1,
        rotateX: 0,
      });
    });

    // Background image animation
    gsap.to(".bg_image img", {
      xPercent: -18,
      scrollTrigger: {
        trigger: ".rts-team__area",
        start: "top top",
        end: "bottom center",
        scrub: 3,
      },
    });
  }, []);

  const teamMembers = [
    { name: "Andrew D. Smith", role: "Designer", img: AboutImages.team },
    { name: "Jane Doe", role: "Developer", img: AboutImages.team },
    { name: "Michael Johnson", role: "Project Manager", img: AboutImages.team },
  ];

  return (
    <Box className="rts-team__area" sx={{ textAlign: "center", p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Meet the Professionals
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <TeamContainer
              ref={(el: HTMLDivElement | null) => {
                teamRef.current[index] = el; // ✅ Explicitly typed `el`
              }}
              className="rts-team__item"
            >
              <Box component="a" href="#" className="thumbnail">
                <TeamImage src={member.img} alt="team-image" />
              </Box>
              <InnerContent className="inner-content">
                <RoleTag>{member.role}</RoleTag>
                <NameBox>
                  <Typography variant="h6" color="black">{member.name}</Typography>
                </NameBox>
              </InnerContent>
            </TeamContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
