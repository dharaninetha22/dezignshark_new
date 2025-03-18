import React from "react";
import { Box, Container, Typography } from "@mui/material";

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayText?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, backgroundImage, overlayText }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: {
          xs:'30vh',
          lg:'70vh'
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        // paddingTop: { xs: "120px", sm: "60px" },
        // paddingBottom: "60px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box className="breadcrumb-main-wrapper">
          <Box className="inner">
            {subtitle && (
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "26px", sm: "20px" },
                  fontWeight: "500",
                }}
              >
                {subtitle}
              </Typography>
            )}
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: { xs: "36px", sm: "50px", md: "54px", lg: "80px" },
                fontWeight: "600",
                mt: 5,
              }}
            >
              {title}
            </Typography>
            {overlayText && (
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.03)",
                  fontSize: { xs: "128px", lg: "180px !important" },
                  fontWeight: "400",
                  position: "absolute",
                  left: "50%",
                  zIndex: "10",
                  top: { xs: "66%", sm: "55%", md: "50%" },
                  transform: "translate(-50%, -50%)",
                  whiteSpace: "nowrap",
                }}
              >
                {overlayText}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
