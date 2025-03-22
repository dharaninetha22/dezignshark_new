import React, { useEffect, useRef, useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, { xPercent: -2, ease: "power2.out" });
    });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Box
        className="container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: {
            xs: "30vh",
            lg: "95vh",
          },
          width: "100%",
          position: "relative",
        }}
      >
        {/* ✅ Auto-Playing and Looping Video */}
        <video
          ref={videoRef}
          src="https://dprstorage.b-cdn.net/dprstorage/dezign_shark.mp4"
          autoPlay
          loop
          muted={isMuted}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* ✅ Always Visible Sound Icon */}
        <IconButton
          onClick={toggleSound}
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </Box>
    </Container>
  );
};

export default App;
