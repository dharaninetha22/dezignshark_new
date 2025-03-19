import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const ContactInfo: React.FC = () => {
  const contactData = [
    {
      id: 1,
      icon: <FiSend  color="black" />, // Changed color to black
      title: "Email",
      details: [
        { text: "info@dezignshark.com", link: "mailto:info@dezignshark.com" },
      ],
    },
    {
      id: 2,
      icon: <MdLocationOn  color="black" />, // Changed color to black
      title: "Location",
      details: [
        { text: "68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008", link: "#" },
      ],
    },
    {
      id: 3,
      icon: <IoCallSharp  color="black" />, // Changed color to black
      title: "Contacts",
      details: [
        { text: "+91 799 799 2885", link: "tel:+91 799 799 2885" },
      ],
    },
  ];

  return (
    <Box sx={{ background: "white", px: { xs: 6, lg: 0 } }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: 10 }}>
          <Grid container spacing={3} justifyContent="center">
            {contactData.map((item) => (
              <Grid item xs={12} lg={4} key={item.id}>
                <Paper
                  elevation={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    borderRadius: 2,
                    textAlign: "center",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                    height: { xs: '300px', lg: '200px' },
                    mt: {xs:5,lg:0},

                  }}
                >
                  {/* Icon Box */}
                  {/* <Box
                    sx={{
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      mb: 2,
                      fontSize:{xs:'100px',lg:'50px'}
                    }}
                  >
                    {item.icon}
                  </Box> */}

                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      mb: {xs:5,lg:2},
                      fontSize: { xs: "100px", lg: "50px" }, // Correct responsive font size
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: { xs: "100px", lg: "50px" }, // Apply size to the icon correctly
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Box>


                  {/* Title */}
                  <Typography variant="h5" fontWeight="bold" color="black" sx={{ fontSize: { xs: "46px", lg: "16px" } }}>
                    {item.title}
                  </Typography>

                  {/* Contact Details with Links */}
                  {item.details.map((detail, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      component="a"
                      href={detail.link}
                      sx={{
                        color: "text.secondary",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        "&:hover": { color: "#FF5722", textDecoration: "underline" },
                        mt: 2,
                        fontSize: { xs: "36px", lg: "16px" }
                      }}
                    >
                      {detail.text}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfo;
