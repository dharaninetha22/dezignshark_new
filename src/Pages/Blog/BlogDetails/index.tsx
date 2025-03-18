import React from "react";
import Author from "./Author";
import BlogContent from "./BlogContent";
import { Box, Container, Grid } from "@mui/material";
import Categories from "../Categories";
import LatestBlogs from "../LatestBlogs";
import GalleryPost from "../GalleryPost";
import PopularTags from "../PopularTags";

const Index = () => {
  return (
    <Box>
      <Author />
      {/* <Grid container sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="flex-start">
         
            <Grid
              item
              xs={12}
              lg={8}
              mt={6}
              
            >
              <BlogContent />
            </Grid>

          
            <Grid item xs={12} lg={4} mt={6}>
              <Categories />
              <LatestBlogs />
              <GalleryPost />
              <PopularTags />
            </Grid>
          </Grid>
        </Container>
      </Grid> */}
    </Box>
  );
};

export default Index;
