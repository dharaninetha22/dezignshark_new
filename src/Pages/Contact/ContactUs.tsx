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
    <Box sx={{ backgroundColor: "black",  px: { xs: 6, lg: 0 },}}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>

          <AnimatedText sx={{ color: "white", textAlign: "left", fontWeight: 700, mt: { xs: 1, lg: 4 }, fontSize: { xs: "55px", lg: "45px" } ,}}>
            Struggling online? We’re here to help.
          </AnimatedText>
          {/* <Typography variant="h3" sx={{ fontStyle: "italic", mt: 1, color: "white", textAlign: "left" }}>
            Get in touch!
          </Typography> */}
        </Box>

        <Grid container spacing={4} >
          {/* Form Section */}
          <Grid item xs={12} lg={6} mt={2}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12} lg={12} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Name *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "30px", lg: "18px" }, // Increased placeholder font size for mobile
                        color: 'white'
                      },

                    }}
                  />
                </Grid>
                {/* Phone Number Field */}
                <Grid item xs={12} lg={6} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Phone Number *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Enter Your Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "30px", lg: "18px" }, // Increased placeholder font size for mobile
                      },
                    }}
                  />
                </Grid>
                {/* Email Field */}
                <Grid item xs={12} lg={6} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Email *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                      "&::placeholder": {
                        fontSize: { xs: "30px", lg: "18px" }, // Increased placeholder font size for mobile
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
                      color: "white",
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
                      height: { xs: "60px", lg: "45px" },
                      textAlign: "left",
                      backgroundColor: "transparent", // Ensure background stays transparent
                      color: "white",

                      // Ensuring no background color on focus
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "transparent !important",
                      },

                      // Ensuring text color for both placeholder and selected value
                      "& .MuiSelect-select": {
                        color: formData.service ? "white" : "rgba(255, 255, 255, 0.7)",
                      },

                      // Dropdown icon color change
                      "& .MuiSvgIcon-root": {
                        color: "white", // Make dropdown icon white
                      },

                      // Border color adjustments
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000",
                      },
                    }}
                  >
                    <MenuItem
                      value=""
                      disabled
                      sx={{
                        color: "white", // Placeholder color
                        "&:hover": {
                          color: "#fc0000",
                        },
                      }}
                    >
                      Select a Service
                    </MenuItem>
                    <MenuItem value="Branding" sx={{ "&:hover": { color: "#fc0000" } }}>

                      Branding
                    </MenuItem>

                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Social Media Marketing
                    </MenuItem><MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Pay-Per-Click Advertising
                    </MenuItem>
                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Web Development
                    </MenuItem>
                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Search Engine Optimization
                    </MenuItem>
                    <MenuItem value="PPC" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Graphic Designing
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
                      color: "white",
                      textAlign: "left",

                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Message *
                  </Typography>
                  <CustomInput
                    fullWidth
                    placeholder="Enter Your Message"
                    multiline
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      "&::placeholder": {
                        fontSize: { xs: "30px", lg: "18px" }, // Increased placeholder font size for mobile
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
