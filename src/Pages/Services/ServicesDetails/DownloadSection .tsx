import React from "react";
import { Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Container } from "@mui/material";
import { BsDownload } from "react-icons/bs";
import { ImFilePdf } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

// Import the PDF file
import brochurePDF from "../../../assets/ds-brochure-design-Recovered.pdf";
import AnimatedText from "../../../Components/Inputs/AnimatedText";

const downloads = [
  { name: "Our Brochure", file: brochurePDF, icon: <ImFilePdf style={{ color: "black" }} /> },
  { name: "Documentation", file: "documentation.pdf", icon: <IoDocumentTextOutline style={{ color: "black" }} /> },
];

const DownloadSection = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Box sx={{ p: 2, border: "1px solid #ddd" }}>
        {/* <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "black", textAlign: "left", fontWeight: 700, mb: 1 }}
          gutterBottom
        >
          Download
        </Typography> */}
        <AnimatedText sx={{ color: "black", textAlign: "center", fontWeight: 700, mb: { xs: 1, lg: 1 } , mt: { xs: 4, lg: 1 },fontSize: { xs: "54px", lg: "20px" }}}>
        Download
        </AnimatedText>

        <List>
          {downloads.map((item, index) => (
            <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
              <ListItemIcon sx={{ fontSize: { xs: "86px", lg: "50px" } }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: "black",
                      fontSize: { xs: "38px", lg: "18px" },
                    }}
                  >
                    {item.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#74787C",
                      fontSize: { xs: "28px", lg: "18px" },
                    }}
                  >
                    Download
                  </Typography>
                }
              />
              {/* Download Button */}
              <IconButton
                component="a"
                href={item.file} // Uses the imported PDF file
                download
                sx={{ color: "black" }}
              >
                <DownloadForOfflineIcon sx={{fontSize: { xs: "3.5rem", lg: "1.2rem" }}} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default DownloadSection;
