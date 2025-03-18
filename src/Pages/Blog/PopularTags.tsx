import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const tags = ["Marketing", "Digital", "Education", "Poor"];

// Styled tag item with hover effect
const TagItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid #E6E9F0",
  padding: '5px',
  textAlign: "center",
  boxShadow: "none",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  borderRadius: "none !important",
  width:'100%',
  "& a": {
    textDecoration: "none",
    color: "#000",
    fontSize: "14px",
    fontWeight: "600",
  },
 
}));

const PopularTags: React.FC = () => {
  return (
    <Box
      sx={{
       p:5,
        border: "1px solid #E6E9F0",
        mt: 4,
      }}
    >
      <Box sx={{ textAlign: "start", marginBottom: "12px" }}>
        <Typography variant="h6" sx={{ color: "#000", fontWeight: "600" ,mb:4}}>Post Tags</Typography>
      </Box>
      <Grid container spacing={2}>
        {tags.map((tag, index) => (
          <Grid item xs={6} key={index}>
            <TagItem>
              <Link href="#">{tag}</Link>
            </TagItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularTags;
