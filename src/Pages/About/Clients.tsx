import React, { useEffect, useRef } from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  sx?: SxProps<Theme>; // ✅ Allows custom styling
}

const Animated: React.FC<AnimatedTextProps> = ({ text, sx }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const textElement = textRef.current;

    // Split text into words and wrap each word in a span
    const words = text.split(" ").map((word) => `<span class="mask-word">${word}</span>`).join(" ");
    textElement.innerHTML = words;

    const wordSpans = textElement.querySelectorAll(".mask-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top 60%", // Starts animation when text enters viewport
        end: "bottom 20%", // Ends when fully visible
        scrub: true, // Syncs animation with scrolling
        toggleActions: "play none none reverse", // Reverses when scrolling up
      },
    });

    // Animate words one by one, ensuring each fills before the next starts
    wordSpans.forEach((word, index) => {
      tl.to(
        word,
        {
          backgroundSize: "100% 100%", // Fill word completely
          duration: 1, // Each word takes 1 second to fill
          ease: "power2.out",
        },
        `+=${index * 0.3}` // Delay each word until the previous one is filled
      );
    });
  }, []);

  return (
    <Box sx={{ textAlign: "center", overflow: "hidden", display: "flex", justifyContent: "center" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "40px", sm: "70px", md: "80px" }, // Default font size
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "1.2",
          position: "relative",
          display: "inline-block",
          ...sx, // ✅ Allows custom styles via props
          "& .mask-word": {
            position: "relative",
            display: "inline-block",
            WebkitTextFillColor: "rgba(139, 139, 139, 0.15)", // Default faded color
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(270deg, #d8d8d8 0%, #1d1c1c 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0% 100%", // Initially no fill
            transition: "background-size 1s ease-in-out",
            marginRight: "8px", // Space between words
          },
        }}
      >
        <Box ref={textRef} sx={{ display: "inline-block" }} />
      </Typography>
    </Box>
  );
};

export default Animated;
