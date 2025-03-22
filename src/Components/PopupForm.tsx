import React from "react";
import { Grid, IconButton, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import CustomInput from "./Inputs/CustomInput";
import CustomButton from "./Inputs/CustomButton";
import { Home } from "../assets"; // Ensure this import is correct

// Ensure your video is inside `public/videos/popup.mp4`
const videoUrl = "https://dprstorage.b-cdn.net/dezignshark/popup.mp4";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Styled Components
const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      {/* Close Button (Outside Popup, Top Right Corner) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={{
          position: "absolute",
          top: "40px",
          right: "24%",
          zIndex: 1100,
        }}
      >
        <IconButton
          onClick={onClose}
          component={motion.div}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9, rotate: -90 }}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </motion.div>

      {/* Popup Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          borderRadius: "15px",
          overflow: "hidden",
          width: "700px",
          maxWidth: "90%",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <Grid container spacing={0}>
          {/* Left Side - Video Animation (Hidden on Mobile) */}
            <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", lg: "block" }, // Hide on mobile
              position: "relative",
              overflow: "hidden",
            }}
            >
            <img
              src={Home.downloadbrochure1} // Ensure this property exists in the Home object
              alt="Popup Illustration"
              style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              }}
            />
            </Grid>

          {/* Right Side - Form (Full Width on Mobile) */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.8)",
              // borderRadius: "10px",
              borderTopLeftRadius:'none',
            }}
          >
            <Form>
              <Typography
                variant="h4"
                sx={{
                  color: "#910909cc",
                  padding: 2,
                  fontWeight: 600,
                  mb: 3,
                  textAlign: "left",
                }}
              >
                We Would Love to Hear From You
              </Typography>
              <CustomInput placeholder="Name" type="text" fullWidth required size="small" />
              <CustomInput placeholder="Email" type="email" fullWidth required size="small" />
              <CustomInput placeholder="Phone Number" type="number" fullWidth required size="small" />
              <CustomInput placeholder="Message" type="text" fullWidth required size="small" />

              <CustomButton>Send</CustomButton>
            </Form>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default PopupForm;
