import React from "react";
import { Container, Grid, CardMedia, CardContent, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // "+" Icon
import { Services } from "../../../assets"; // Your image imports

const BusinessSections = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "white", color: "black", borderRadius: 2 }}>
      {/* First Section: Image on Top, Content Below */}
      <Box sx={{ mb: 6, textAlign: "left" }}>
        <CardMedia
          component="img"
          image={Services.service1}
          alt="Market Research"
          sx={{ width: "100%", height: "auto", borderRadius: 2 }}
        />
        <CardContent sx={{ mt: 3 }}>
          <Typography variant="h3"  gutterBottom sx={{ color: "black" ,fontWeight:700,mb:4}}>
            Market Research
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#74787c" }}>
          Understand your target market’s needs, preferences, and behavior. Identify trends, competitors, and gaps in the market that your business can capitalize on. Conduct surveys, analyze data, and gather insights to inform your strategy. Divide your potential customers into distinct segments based on factors such as demographics, psychographics, and behaviors. This allows you to tailor your marketing efforts to specific audience groups and create personalized messaging.
          </Typography>

          {/* Flexbox for List & Services Challenge */}
          <Grid container spacing={2} alignItems="center" mt={5}>
            {/* Updated: List Items in One Column */}
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["UI/UX Design", "Content Development", "Marketing Strategies", "Shopify Development"].map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                  <AddIcon sx={{ fontSize: 24, mr: 1 ,color: "#74787c"}} />
                  <Typography variant="body2" sx={{ color: "#74787c" }}>{item}</Typography>
                </Box>
              ))}
            </Grid>

            {/* Services Challenge Section */}
            <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  color: "black",
                  borderBottom: "2px solid black",
                  pb: 1,
                  width: "fit-content",
                }}
              >
                Services Challenge
              </Typography>
              <Typography variant="body2" sx={{ color: "#74787c", mt: 2 }}>
              Maintaining consistent service quality across all customer interactions can be difficult, leading to dissatisfaction and negative feedback.
              
              </Typography>
              <Typography variant="body2" sx={{ color: "#74787c", mt: 1 }}>
             
              Solution: Implement clear service standards, provide comprehensive training to your team, and establish regular quality control checks. Solicit customer feedback and use it to make improvements.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>

      {/* Second Section: Two Images in Grid, Content Below */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            image={Services.service2}
            alt="Feedback"
            sx={{ width: "100%", height: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="img"
            image={Services.service3}
            alt="Customer Support"
            sx={{ width: "100%", height: "250px" }}
          />
        </Grid>
      </Grid>

      <CardContent sx={{ mt: 3, textAlign: "left" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "black" }}>
          Feedback Management :
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          <b>Challenge:</b> Handling customer feedback, both positive and negative, can be overwhelming.
        </Typography>
        <Typography variant="body1" sx={{ color: "black", mt: 1 }}>
          <b>Solution:</b> Establish a feedback system that encourages open communication. Acknowledge and address feedback promptly, and use it as an opportunity for improvement. Celebrate positive feedback internally.
        </Typography>
      </CardContent>
    </Container>
  );
};

export default BusinessSections;
