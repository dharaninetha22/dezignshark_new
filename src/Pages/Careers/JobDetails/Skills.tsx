import React, { useState } from "react";
import { Card, CardContent, Typography, Stack, Chip, Box } from "@mui/material";
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

const JobDetailsAndSkills: React.FC = () => {
 
  // Job Skills State
  const [skills] = useState<string[]>(["App", "Design", "Superio"]);

  return (
    <Stack spacing={3} mt={5}>
      
      {/* Job Skills Card */}
      <Card sx={{  p: 2, borderRadius: 2, boxShadow: 1,  background: "#0E0E0E", 
       
           }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Job Skills
          </Typography>
          <Stack direction="row" spacing={1}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} sx={{ backgroundColor: "white", color: "#333", fontWeight: 500 ,fontSize:"20px"}} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default JobDetailsAndSkills;
