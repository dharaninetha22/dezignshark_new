import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, List, ListItem } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { jobData } from "./JobData";


const JobDescription = () => {
  const { id } = useParams<{ id: string }>(); // Get job ID from URL
  const job = jobData.find((job) => job.id === Number(id)); // Find matching job

  if (!job) {
    return <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>Job not found</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#fc0000" ,textAlign:'start',fontSize:{xs:'34px',lg:'16px'}}}>
        {job.jobTitle}
      </Typography>

      <Typography variant="body2" sx={{ color: "#555" }} paragraph>
        {job.jobDetails}
      </Typography>

      {job.sections.map((section, index) => (
        <Box key={index} sx={{ mt: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#fc0000",textAlign:'start' ,fontSize:{xs:'34px',lg:'16px'}}}>
            {section.title}
          </Typography>
          <List>
            {section.items.map((item, idx) => (
              <ListItem key={idx} sx={{ display: "flex", alignItems: "flex-start" }}>
                <FiberManualRecordIcon sx={{ fontSize: 8, color: "#74787c", mr: 1 }} />
                <Typography variant="body2" sx={{color:'#74787c'}}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default JobDescription;
