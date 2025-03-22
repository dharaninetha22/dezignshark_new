import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import hoverEffect from "hover-effect";

interface HoverCardProps {
  image1: string;
  image2: string;
  displacementImage: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ image1, image2, displacementImage }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  // Get image dimensions dynamically
  useEffect(() => {
    const img = new Image();
    img.src = image1;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [image1]);

  // Initialize hover effect once dimensions are set
  useEffect(() => {
    if (itemRef.current && dimensions) {
      new hoverEffect({
        parent: itemRef.current,
        intensity: 0.2,
        image1,
        image2,
        displacementImage,
      });
    }
  }, [image1, image2, displacementImage, dimensions]);

  return (
    <Box
      sx={{
        position: "relative",
        width: dimensions ? `${dimensions.width}px` : "100%",
        height: dimensions ? `${dimensions.height}px` : "auto",
        overflow: "hidden",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <Box ref={itemRef} sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default HoverCard;
