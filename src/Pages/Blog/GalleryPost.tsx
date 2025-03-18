import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Blog } from "../../assets";

// Sample Gallery Images (Replace with actual URLs)
const galleryImages = [
  Blog.blogsmall,
  Blog.blogsmall,
  Blog.blogsmall,
  Blog.blogsmall,
  Blog.blogsmall,
  Blog.blogsmall,
];

const GalleryPosts: React.FC = () => {
  return (
    <Box sx={{ p: 4, mx: "auto", border: "1px solid #E6E9F0" }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="600" sx={{ mb: 4, color: "#000",textAlign:'left' }}>
        Gallery Posts
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={2}>
        {galleryImages.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover img": {
                  transform: "scale(1.2)", // Scale effect on hover
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryPosts;
