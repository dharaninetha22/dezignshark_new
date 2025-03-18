import React from "react";
import { Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Container } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { BsDownload } from "react-icons/bs";
import { ImFilePdf } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";

const downloads = [
  { name: "Our Brochures", file: "brochures.pdf", icon: <ImFilePdf style={{ color: "black" }} /> },
  { name: "Documentation", file: "documentation.pdf", icon: <IoDocumentTextOutline style={{ color: "black" }} /> },
];

const DownloadSection = () => {
  return (
    <Container maxWidth="xl" sx={{mt: 5}}>

      <Box sx={{ p: 2, border: "1px solid #ddd",  }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "black" ,textAlign:'left',fontWeight:700,mb:1}} gutterBottom>
          Download
        </Typography>

        <List>
          {downloads.map((item, index) => (
            <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" , gap: 2 ,mt:3}}>
              <ListItemIcon sx={{fontSize:"50px"}}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={<Typography fontWeight="bold" sx={{ color: "black" }}>{item.name}</Typography>}
                secondary={<Typography  variant="body2" sx={{ color: "#74787C" }}>Download</Typography>}
              />
              <IconButton component="a" href={`/${item.file}`} download sx={{ color: "black" }}>
                <BsDownload />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default DownloadSection;
