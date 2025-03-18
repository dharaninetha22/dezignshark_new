import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import {
  LocationOn,
  AccessTime,
  MonetizationOn,
  HourglassEmpty,
  Work,
  Person,
  School,
  Business,
} from "@mui/icons-material";
import useJobDetails from "./QualificationData";


const JobDetails: React.FC = () => {
  const { jobDetails } = useJobDetails();

  const details = [
    { icon: <AccessTime fontSize="small" />, label: "Date Posted", value: jobDetails.datePosted },
    { icon: <LocationOn fontSize="small" />, label: "Location", value: jobDetails.location },
    { icon: <MonetizationOn fontSize="small" />, label: "Offered Salary", value: jobDetails.salary },
    { icon: <HourglassEmpty fontSize="small" />, label: "Expiration Date", value: jobDetails.expirationDate },
    { icon: <Work fontSize="small" />, label: "Experience", value: jobDetails.experience },
    { icon: <Person fontSize="small" />, label: "Gender", value: jobDetails.gender },
    { icon: <School fontSize="small" />, label: "Degree", value: jobDetails.qualification }, // Avoid "Qualification" name issue
    { icon: <Business fontSize="small" />, label: "Career Level", value: jobDetails.careerLevel },
  ];

  return (
    <Card
      sx={{
        // maxWidth: 320,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        background: "#0E0E0E", // 🔥 Red Transparent Background
        color: "white", // 🏆 White Text
        mt:5
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          {details.map((item, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={1}>
              <span style={{ color: "white" }}>{item.icon}</span> {/* 🏆 White Icons */}
              <Typography variant="body2" fontWeight={600} sx={{ textAlign: "justify", flex: 1 }}>
                {item.label}:
              </Typography>
              <Typography variant="body2" color="white" sx={{ textAlign: "justify" }}>
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobDetails;
