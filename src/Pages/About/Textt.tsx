import React from "react";
import { Box } from "@mui/material";
import videoBg from "../assets/images/about/11.jpg"; // Adjust path as needed
import { AboutImages } from "../../assets";

const VideoSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${AboutImages.backgroundabout})`,
        height: "700px",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        paddingY: { xs: "100px", md: "150px" }, // Responsive padding
      }}
      className="rts-video-area-about"
    ></Box>
  );
};

export default VideoSection;
