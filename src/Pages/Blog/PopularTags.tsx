import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import AnimatedText from "../../Components/Inputs/AnimatedText";

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
  width: '100%',
  "& a": {
    textDecoration: "none",
    color: "#000",
    fontWeight: "600",
  },

}));

const PopularTags: React.FC = () => {
  return (
    <Box
      sx={{
        p: 5,
        border: "1px solid #E6E9F0",
        mt: 4,
        mb: 4
      }}
    >
      <Box sx={{ textAlign: "start", marginBottom: "12px" }}>
        <Typography variant="h6" sx={{ color: "#000", fontWeight: "600", mb: 4 }}></Typography>
        <AnimatedText sx={{ color: "black", textAlign: "center", fontWeight: 700, mb: { xs: 4, lg: 4 }, py: { xs: 4, lg: 0 }, fontSize: { xs: "54px", lg: "20px" } }}>
          Post Tags
        </AnimatedText>
      </Box>
      <Grid container spacing={2}>
        {tags.map((tag, index) => (
          <Grid item xs={6} key={index}>
            <TagItem sx={{py:{xs:4,lg:0}}}>
              <Link href="#"  sx={{fontSize: { xs: "32px", lg: "14px" }}}>{tag}</Link>
            </TagItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularTags;
