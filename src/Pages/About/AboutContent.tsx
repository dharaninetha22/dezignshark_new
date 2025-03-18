import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, Modal } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"; // 🎥 Play Icon
import CloseIcon from "@mui/icons-material/Close"; // ❌ Close Icon
import { AboutImages } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [open, setOpen] = useState(false); // ✅ Video Modal State
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, { xPercent: -2, ease: "power2.out" });
      tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.out" });
    });
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height:{
              xs:'50%',
              lg:'100%'
            },
            width: "100%",
            position: "relative",
            px: 5,
            mb:{
              xs:5,
              lg:0
            }
          }}
        >
          {/* Image Container */}
          <Box
            className="reveal"
            sx={{
              visibility: "hidden",
              position: "relative",
              width: "100vw",
              height:{
                xs:'30vh',
                lg: "95vh"
              },
              maxWidth: "100vw",
              overflow: "hidden",
            }}
          >
            <img
              src={AboutImages.aboutimg}
              alt=""
              style={{
                width: "90vw",
                height: "100%",
                objectFit: "cover",
                transformOrigin: "left",
              }}
            />

            {/* ✅ Video Play Button */}
            <IconButton
              onClick={handleOpen}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: "pulse 1.5s infinite",
                "&:hover": { backgroundColor: "rgba(255, 0, 0, 1)" },
              }}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* ✅ Video Modal */}
      <Modal open={open} onClose={handleClose} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            width: { xs: "95vw", lg: "70vw" },
            height: { xs: "30vh", lg: "70vh" },
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
            position: "relative",
          }}
        >
          {/* ✅ Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.8)" },
            }}
          >
            <CloseIcon sx={{ fontSize: "30px" }} />
          </IconButton>

          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // ✅ Replace with your video link
            title="Video"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>

      {/* ✅ Keyframes for Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8);
            }
            50% {
              box-shadow: 0 0 0 15px rgba(255, 0, 0, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
            }
          }
        `}
      </style>
    </>
  );
};

export default App;
