import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button, MenuItem, Select } from "@mui/material";
import CustomInput from "../../Components/Inputs/CustomInput";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import { contactusshark1, contactusshark3 } from "../../assets";
import CustomButton from "../../Components/Inputs/CustomButton";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    service: "", // Added service field
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

          <AnimatedText sx={{ color: "black", textAlign: "left", fontWeight: 700, mt: { xs: 1, lg: 1 }, fontSize: { xs: "55px", lg: "35px" } }}>
          Get in touch!
          </AnimatedText>
          {/* <Typography variant="h3" sx={{ fontStyle: "italic", mt: 1, color: "black", textAlign: "left" }}>
            Get in touch!
          </Typography> */}
        </Box>

        <Grid container spacing={2}>
          {/* Form Section */}
          <Grid item xs={12} lg={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12} lg={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Name *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "30px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "20px", lg: "14px" }, // Increased placeholder font size for mobile
                      },
                    }}
                  />
                </Grid>
                {/* Phone Number Field */}
                <Grid item xs={12} lg={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Phone Number *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "30px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "20px", lg: "14px" }, // Increased placeholder font size for mobile
                      },
                    }}
                  />
                </Grid>
                {/* Email Field */}
                <Grid item xs={12} lg={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Email *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "30px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "20px", lg: "14px" }, // Increased placeholder font size for mobile
                      },
                    }}
                  />
                </Grid>
                {/* Services Dropdown */}
                <Grid item xs={12} lg={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Services *
                  </Typography>
                  <Select
                    fullWidth
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    displayEmpty
                    sx={{
                      height: "40px",
                      textAlign: "left", // Align text to the left
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000", // Change border color to red on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000", // Change border color to red on focus (click)
                      },
                    }}
                  >
                    <MenuItem
                      value=""
                      disabled
                      sx={{
                        "&:hover": {
                          color: "#fc0000", // Change text color to red on hover
                        },
                      }}
                    >
                      Select a Service
                    </MenuItem>
                    <MenuItem
                      value="Web Development"
                      sx={{
                        "&:hover": {
                          color: "#fc0000", // Change text color to red on hover
                        },
                      }}
                    >
                      Web Development
                    </MenuItem>
                    <MenuItem
                      value="SEO"
                      sx={{
                        "&:hover": {
                          color: "#fc0000", // Change text color to red on hover
                        },
                      }}
                    >
                      SEO
                    </MenuItem>
                    <MenuItem
                      value="PPC"
                      sx={{
                        "&:hover": {
                          color: "#fc0000", // Change text color to red on hover
                        },
                      }}
                    >
                      PPC
                    </MenuItem>
                  </Select>
                </Grid>
                {/* Message Field */}
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
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
                    sx={{
                      "&::placeholder": {
                        fontSize: { xs: "20px", lg: "14px" }, // Increased placeholder font size for mobile
                      },
                    }}
                  />
                </Grid>
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <CustomButton>
                      Send Message
                    </CustomButton>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={contactusshark3}
                alt="Contact Us"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
