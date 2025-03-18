import React from "react";
import { CircularProgress, Typography, Box, Container } from "@mui/material";

// Define TypeScript interface for progress data
interface ProgressData {
  label: string;
  value: number;
}

// Data for progress bars
const progressData: ProgressData[] = [
  { label: "PROJECT PROCESS", value: 75 },
  { label: "BRANDING PLANS", value: 95 },
  { label: "ONLINE MARKETING", value: 60 },
  { label: "CONCEPT MAKING", value: 83 },
];

// Define TypeScript props for CircularProgressWithLabel
interface CircularProgressWithLabelProps {
  value: number;
  label: string;
}

// Functional component for a circular progress bar
const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ value, label }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", mx: 2 }}>
      {/* Background Circle */}
      <CircularProgress variant="determinate" value={100} sx={{ color: "#222" }} size={200} thickness={1} />
      
      {/* Foreground Circle */}
      <CircularProgress variant="determinate" value={value} sx={{ color: "white", position: "absolute", left: 0 }} size={200} thickness={1} />

      {/* Percentage Label */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: 800 }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

// Main Progress Section component
const ProgressSection: React.FC = () => {
  return (
    <Container maxWidth="xl">

            <Box sx={{ display: "flex", justifyContent: "space-evenly", gap: 5,  py: 8 }}>
            {progressData.map((item, index) => (
                <Box key={index} textAlign="center">
                <CircularProgressWithLabel value={item.value} label={item.label} />
                <Typography variant="body1" sx={{ color: "white", mt: 3, fontWeight: "bold" ,}}>
                    {item.label}
                </Typography>
                </Box>
            ))}
            </Box>
    </Container>
  );
};

export default ProgressSection;
