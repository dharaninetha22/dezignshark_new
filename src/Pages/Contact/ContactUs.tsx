import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import CustomInput from "../../Components/Inputs/CustomInput";
import AnimatedText from "../../Components/Inputs/AnimatedText";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box sx={{ backgroundColor: "white", py: 8 ,px:{xs:6,lg:0}}}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="subtitle2" sx={{ textTransform: "uppercase", fontWeight: "bold", color: "black", textAlign: "left" ,fontSize: { xs: "28px", lg: "16px" }}}>
          Get in touch!
          </Typography>
          {/* <Typography variant="h2" sx={{ fontWeight: "bold", mt: 1, color: "black", textAlign: "left" }}>
            
          </Typography> */}
          <AnimatedText sx={{ color: "black", textAlign: "left", fontWeight: 700, mt: { xs: 1, lg: 1 }, fontSize: { xs: "55px", lg: "35px" } }}>
            Love to hear from you
          </AnimatedText>
          {/* <Typography variant="h3" sx={{ fontStyle: "italic", mt: 1, color: "black", textAlign: "left" }}>
            Get in touch!
          </Typography> */}
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Name Field */}
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold", color: "black", textAlign: "left" }}>
                Your Name *
              </Typography>
              <CustomInput
                fullWidth
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            {/* Phone Number Field */}
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold", color: "black", textAlign: "left" }}>
                Phone Number *
              </Typography>
              <CustomInput
                fullWidth
                placeholder="Phone Number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold", color: "black", textAlign: "left" }}>
                Your Email *
              </Typography>
              <CustomInput
                fullWidth
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold", color: "black", textAlign: "left" }}>
                What you are interested *
              </Typography>
              <CustomInput
                fullWidth
                placeholder="What you are interested"
                name=""
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>


            <Grid item xs={12}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold", color: "black", textAlign: "left" }}>
                Message *
              </Typography>
              <CustomInput
                fullWidth
                placeholder="Message"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "200px",  // Fixed button width
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 20px",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Post Comment
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
