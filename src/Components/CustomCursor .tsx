import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { shark } from "../assets";

// ✅ Styled Cursor Component
const CursorWrapper = styled("div")({
  position: "fixed",
  width: "50px",
  height: "50px",
  pointerEvents: "none", // ✅ Prevents interactions
  top: 0,
  left: 0,
  display: "none",
  zIndex: 10000,
  transform: "translate(-50%, -50%)",
  transition: "transform 0.15s ease-out",
  "& img": {
    width: "100%",
    height: "auto",
    transform: "scale(1)",
    transition: "transform 0.2s ease",
  },
  "&.hover img": {
    transform: "scale(1.5)", // ✅ Expands on hover
  },
});

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    // ✅ Show cursor on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY - window.scrollY });
      cursor.style.display = "block";
    };

    // ✅ Hide cursor on mouse leave
    const handleMouseLeave = () => {
      cursor.style.display = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <CursorWrapper
      className="custom-cursor"
      sx={{
        display: "block",
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    >
      <img src={shark} alt="Custom Cursor" />
    </CursorWrapper>
  );
};

export default CustomCursor;
