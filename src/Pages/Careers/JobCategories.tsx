import React, { useState } from "react";
import { Box, Typography, Grid, Card, Container } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Accounting
import CampaignIcon from "@mui/icons-material/Campaign"; // Marketing
import BrushIcon from "@mui/icons-material/Brush"; // Design
import CodeIcon from "@mui/icons-material/Code"; // Development
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // Project Management
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // Customer Service
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // Health and Care
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Automotive Jobs

// Define JobCategory Type
interface JobCategory {
  title: string;
  positions: number;
  icon: React.ReactNode;
}

// Job Categories Data with Different Icons
const jobCategories: JobCategory[] = [
  { title: "Accounting / Finance", positions: 0, icon: <AttachMoneyIcon /> },
  { title: "Marketing", positions: 5, icon: <CampaignIcon /> },
  { title: "Design", positions: 7, icon: <BrushIcon /> },
  { title: "Development", positions: 6, icon: <CodeIcon /> },
  { title: "Project Management", positions: 1, icon: <BusinessCenterIcon /> },
  { title: "Customer Service", positions: 4, icon: <SupportAgentIcon /> },
  { title: "Health and Care", positions: 2, icon: <LocalHospitalIcon /> },
  { title: "Automotive Jobs", positions: 1, icon: <DirectionsCarIcon /> },
];

const JobCategories: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container sx={{py: 5}}>
      <Box sx={{ textAlign: "center", py: 5 }}>
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 5, color: "white" }}>
          Popular Job Categories
        </Typography>

        {/* Job Categories Grid */}
        <Grid container spacing={3} justifyContent="center">
          {jobCategories.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "0.3s",
                  boxShadow: hovered === index ? 3 : 1,
                  background: hovered === index ? "linear-gradient(90deg, #910909, #120f0f)" : "white",
                  color: hovered === index ? "white" : "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "180px", // Ensures all cards are the same height
                  "&:hover": {
                    background: "linear-gradient(90deg, #910909, #120f0f)",
                    color: "white",
                    boxShadow: 3,
                  },
                }}
              >
                <Box sx={{ fontSize: 40, mb: 1, color: hovered === index ? "white" : "black" }}>
                  {job.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: hovered === index ? "white" : "black"
                  }}
                >
                  {job.title}
                </Typography>
                <Typography variant="body2" sx={{color: hovered === index ? "white" : "black"}}>{`(${job.positions} open positions)`}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default JobCategories;
