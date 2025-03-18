import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import { gsap } from "gsap";

const BlogDetails: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const title = titleRef.current;

    // Clear existing content
    title.innerHTML = "";

    // Split title into words (preserving spacing)
    const titleWords = title.dataset.text?.split(" ") || [];
    titleWords.forEach((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.textContent = word + " "; // Add space after each word
      title.appendChild(span);
    });

    // GSAP animations - Right to Left (x: -70 for title)
    gsap.to(title.querySelectorAll("span"), {
      duration: 2,
      x: -20, // Animate from right to left
      autoAlpha: 1,
      stagger: 0.09, // Animate each word separately
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(../images/blog/15.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: 665,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#FFF",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 2.6,
            mb: 2,
            textAlign: "left",
          }}
        >
          Photography <span style={{ color: "#74787C" }}>/ Module Design</span>
        </Typography>

        <Typography
          ref={titleRef}
          className="rts_hero__title"
          data-text="Creative Pattern Limited: A Designer UI/UX Complete Checklist."
          sx={{
            color: "#FFF",
            fontSize: { xs: 28, sm: 45, md: 60 },
            fontWeight: 600,
            lineHeight: { xs: "40px", sm: "60px", md: "70px" },
            textAlign: "left",
            whiteSpace: "pre-wrap",
          }}
        >
          Creative Pattern Limited: A Designer UI/UX Complete Checklist.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}>
          <Avatar alt="Mark Daniel" src="assets/images/banner/20.png" sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography sx={{ color: "#74787C", fontSize: 16, mb: 0.5, textAlign: "left" }}>Author</Typography>
            {/* Normal text (No animation applied) */}
            <Typography sx={{ color: "#FFF", fontSize: 18, fontWeight: 600, textAlign: "left" }}>
              Mark Daniel
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
