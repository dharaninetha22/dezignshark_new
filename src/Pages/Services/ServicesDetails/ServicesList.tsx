import React from "react";
import { Box, Card, CardActionArea, Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GoArrowRight } from "react-icons/go";

const services = [
  "SEO",
  "PPC Advertising",
  "Social Media Marketing",
  "Email Marketing",
  "Content Marketing",
  "Web Development",
];

const ServicesList = () => {
  return (
    <Container maxWidth="xl">

    <Box sx={{  p: 2, border: "1px solid #ddd", }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="black" textAlign='left' sx={{mb:3}}>
        All Services
      </Typography>

      {services.map((service, index) => (
        <Card key={index} sx={{ mb: 1, boxShadow: 0, border: "1px solid #eee",mt:2 }}>
          <CardActionArea
            sx={{ display: "flex", justifyContent: "space-between", p: 1.5 }}
          >
            <Typography variant="body1" color="black">{service}</Typography>
            <GoArrowRight style={{ fontSize: 16 }} />
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </Container>
  );
};

export default ServicesList;
