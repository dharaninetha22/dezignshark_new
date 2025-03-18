import React from "react";
import { Button, Box, styled } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"; // MUI Icon

// Styled MUI Button (Fixed with callback function)
const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  background: "rgba(145, 9, 9, 0.8)", // 🔥 Red Transparent Background
  backdropFilter: "blur(20px)", // ✨ Blur Effect
  color: "white",
  padding: "12px 35px",
  border: "none",
  borderRadius: "10px",
  letterSpacing: "0.005em",
  cursor: "pointer",
  boxShadow: "0 4px 30px rgba(89, 100, 255, .1)",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  "&:hover .btn-arrow-hover .arrow-first": {
    transform: "translateX(200%) translateY(-200%) translateZ(0)",
  },
  "&:hover .btn-arrow-hover .arrow-second": {
    transform: "translateX(0) translateY(0) translateZ(0)",
  },
  "&:hover": {
    background: "rgba(145, 9, 9, 0.8)", // 🔥 Red Transparent Background
    backdropFilter: "blur(20px)",
    border: "none !important",
    color: "white !important",
  },
  "&:active": {
    background: "transparent !important", // Ensure it stays transparent on click
    color: "white !important",
  },
  // fontSize: theme.breakpoints.down("md") ? "30px" : "14px !important",
  // width: theme.breakpoints.down("md") ? "300px" : "100px",
}));

// Arrow Container
const ArrowContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  display: "inline-flex",
  width: "20px",
  height: "20px",
});

// Styled MUI Icons
const ArrowIconStyled = styled(ArrowOutwardIcon)({
  fontSize: "16px",
  transition: "transform 0.3s ease-out",
  color: "white", // Ensures visibility
});

const ArrowIconFirst = styled(ArrowIconStyled)({
  transform: "translateX(0) translateY(0) translateZ(0)",
});

const ArrowIconLast = styled(ArrowIconStyled)({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translateX(-200%) translateY(200%) translateZ(0)",
});

// Reusable Button Component
interface CustomButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      {children}
      <ArrowContainer className="btn-arrow-hover">
        {/* First Arrow (Visible initially) */}
        <ArrowIconFirst className="arrow-first" />

        {/* Second Arrow (Hidden initially, appears on hover) */}
        <ArrowIconLast className="arrow-second" />
      </ArrowContainer>
    </StyledButton>
  );
};

export default CustomButton;
