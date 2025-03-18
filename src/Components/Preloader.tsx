import React, { useEffect, useState } from "react";
import { Box, CircularProgress, GlobalStyles } from "@mui/material";
import { styled } from "@mui/system";

// Define prop types
interface PreloaderProps {
  onFinish: () => void;
}

// Styled Preloader Wrapper (No Change)
const PreloaderWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "hide",
})<{ hide: boolean }>(({ hide }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: hide ? "0%" : "100%",
  height: "100%",
  backgroundColor: "var(--color-four, #121212)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  opacity: hide ? 0 : 1,
  visibility: hide ? "hidden" : "visible",
  transition: "all 1s ease",
}));

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 1000); // Trigger onFinish after fade-out
    }, 3000); // Hide preloader after 3s
  }, [onFinish]);

  return (
    <>
      {/* Global Styles for Keyframes */}
      <GlobalStyles
        styles={{
          "@keyframes stroke": {
            "0%": {
              fill: "rgba(252,0,0,0)", // Transparent at start
              stroke: "rgba(252,0,0,1)", // Red stroke
              strokeDashoffset: "25%",
              strokeDasharray: "0 50%",
              strokeWidth: 2,
            },
            "70%": { fill: "rgba(252,0,0,0)", stroke: "rgba(252,0,0,1)" },
            "80%": {
              fill: "rgba(252,0,0,0)",
              stroke: "rgba(252,0,0,1)",
              strokeWidth: 3,
            },
            "100%": {
              fill: "rgba(252,0,0,1)", // Fully red at end
              stroke: "rgba(252,0,0,0)", // No stroke
              strokeDashoffset: "-25%",
              strokeDasharray: "50% 0",
              strokeWidth: 0,
            },
          },
        }}
      />

      {/* Preloader Wrapper */}
      <PreloaderWrapper hide={hide}>
        <Box sx={{ textAlign: "center", position: "relative" }}>
          {/* Loading Spinner */}
          

          {/* SVG Text Animation */}
          <Box
            component="svg"
            viewBox="0 0 1320 300"
            sx={{
              fontFamily: "'Russo One', sans-serif",
              width: "100%",
              height: "300px",
            }}
          >
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              style={{
                textTransform: "uppercase",
                fontSize: "140px",
                strokeWidth: 2,
                stroke: "#fc0000", // Red stroke
                animation: "stroke 5s infinite alternate",
                fill: "transparent",
              }}
            >
              DEZIGNSHARK
            </text>
          </Box>
        </Box>
      </PreloaderWrapper>
    </>
  );
};

export default Preloader;
