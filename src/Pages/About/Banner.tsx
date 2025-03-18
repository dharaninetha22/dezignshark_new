import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { breadcrumbbanner } from "../../assets";


const Breadcrumb = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${breadcrumbbanner})`,
        height: '60vh',
        borderBottom: "1px solid #1b1b1b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        paddingTop: { xs: "120px", sm: "60px" },
        paddingBottom: "60px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box className="row">
          <Box className="col-lg-12">
            <Box className="breadcrumb-main-wrapper">
              <Box className="inner">
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "16px", sm: "20px" },
                    fontWeight: "500",
                  }}
                >
                  Our Selected Works
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "36px", sm: "50px", md: "54px", lg: "80px" },
                    fontWeight: "600",
                    mt: 5,
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  
                  sx={{
                    color: "rgba(255, 255, 255, 0.03)",
                    fontSize: {
                      xs: "55px",
                      lg: "180px !important",
                    
                    },
                    fontWeight: "400",
                    position: "absolute",
                    left: "50%",
                    zIndex: "10",
                    top: { xs: "66%", sm: "55%", md: "50%" },
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                  }}
                >
                  About Us
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
