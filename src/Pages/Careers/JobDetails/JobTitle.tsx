import React from "react";
import { Card, CardContent, Box, Typography, Chip, Grid } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { shark } from "../../../assets"; // Ensure this path is correct

const JobCard: React.FC = () => {
  return (
    <Card
      sx={{
        padding: 2,
        background: "#0E0E0E ", // 🔥 Red Transparent Background
        // backdropFilter: "blur(20px)", // ✨ Blur Effect
        color: "white", // 🏆 White Text
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shark Image Background with Circular Shape */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 80,
          height: 80,
          backgroundImage: `url(${shark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%", // 🏆 Circular Background
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        }}
      />

      <Grid container spacing={2} alignItems="center" sx={{ pl: 12 }}> {/* Left padding to avoid overlapping */}
        {/* Job Details */}
        <Grid item xs={12}>
          <CardContent sx={{ padding: 0 }}>
            <Typography variant="h6" fontWeight="bold" color="white" textAlign='start'>
              Finance Manager & Health
            </Typography>

            {/* Job Info Row */}
            <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Grid item>
                <WorkIcon sx={{ fontSize: 16, color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="white">
                  Design
                </Typography>
              </Grid>

              <Grid item>
                <LocationOnIcon sx={{ fontSize: 16, color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="white">
                  New York
                </Typography>
              </Grid>

              <Grid item>
                <CalendarTodayIcon sx={{ fontSize: 16, color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="white">
                  May 3, 2021
                </Typography>
              </Grid>

              <Grid item>
                <AttachMoneyIcon sx={{ fontSize: 16, color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="white">
                  $450 - $500 / month
                </Typography>
              </Grid>
            </Grid>

            {/* Tags */}
            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item>
                <Chip 
                  label="Full Time" 
                  sx={{ 
                    backgroundColor: "#dbeafe", 
                    color: "#1e40af", 
                    fontSize: "14px", // 🔥 Increased Font Size
                    fontWeight: "bold",
                  }} 
                />
              </Grid>
              <Grid item>
                <Chip 
                  label="Urgent" 
                  sx={{ 
                    backgroundColor: "#fef3c7", 
                    color: "#b45309", 
                    fontSize: "14px", // 🔥 Increased Font Size
                    fontWeight: "bold",
                  }} 
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default JobCard;
