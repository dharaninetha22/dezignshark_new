import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Example icon
import AnimatedText from "../../Components/Inputs/AnimatedText";

// Feature List
const features = [
  { icon: <CheckCircleIcon />, text: "Building Trust" },
  { icon: <CheckCircleIcon />, text: "Speed of Execution" },
  { icon: <CheckCircleIcon />, text: "Dynamic Accuracy" },
  { icon: <CheckCircleIcon />, text: "Revenue Generation" },
  { icon: <CheckCircleIcon />, text: "Client Satisfaction" },
];

const FeatureGrid: React.FC = () => {
  return (
    <Container maxWidth="xl">
        <Box textAlign="center" mb={5}>
                    <AnimatedText>Core Pillers of dezign shark</AnimatedText>
                  </Box>

        <Grid container spacing={3} sx={{ textAlign: "left", mt: 4 }}>
        {features.map((feature, index) => (
            <Grid item xs={12} lg={4} md={3} key={index}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
            >
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    background: "linear-gradient(135deg, #1E1E1E, #333333)",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    "&:hover": {
                    background: "linear-gradient(135deg, #fc0000, #ff5757)",
                    transform: "translateY(-5px)",
                    },
                }}
                >
                {/* Left Side: Animated Icon */}
                <motion.div
                    // initial={{ rotate: 0 }}
                    // animate={{ rotate: 360 }}
                    // transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                    <Box sx={{ color: "white", fontSize: "40px" }}>{feature.icon}</Box>
                </motion.div>

                {/* Right Side: Text */}
                <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
                    {feature.text}
                </Typography>
                </Box>
            </motion.div>
            </Grid>
        ))}
        </Grid>
    </Container>
  );
};

export default FeatureGrid;
