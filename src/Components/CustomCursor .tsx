import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { shark } from "../assets";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile (Reacts to viewport changes)
    const checkIfMobile = () => {
      const mobileCheck = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobileCheck);
    };

    checkIfMobile(); // Run on mount
    window.addEventListener("resize", checkIfMobile);

    // Function to move cursor (Only if NOT mobile)
    const moveCursor = (e: MouseEvent) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    // Disable cursor when touch is detected
    const disableCursorOnTouch = () => setIsMobile(true);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("touchstart", disableCursorOnTouch);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("touchstart", disableCursorOnTouch);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  // Completely hide the custom cursor in mobile view
  if (isMobile) return null;

  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src={shark}
        alt="Cursor"
        style={{
          width: "100%",
          height: "auto",
          transition: "transform 0.3s ease",
        }}
      />
    </Box>
  );
};

export default CustomCursor;
