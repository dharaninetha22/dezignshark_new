import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import CustomButton from "../../../Components/Inputs/CustomButton";

const CommentForm: React.FC = () => {
  return (
    <Container maxWidth="xl">
      {/* Title Section */}
      <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 600,textAlign:'left',color:'black' ,fontSize: { xs: "44px", lg: "28px" }}}>
            Leave a Reply
          </Typography>
          <Typography sx={{ color: "#74787C", fontSize: { xs: "32px", lg: "16px" },textAlign:'left',mt:{xs:4,lg:0} }}>
            Your email address will not be published. Required fields are marked *
          </Typography>
        </Grid>
      </Grid>

      {/* Form Section */}
      <Grid container spacing={3} sx={{ marginTop: "30px" }} component="form">
        {/* Name Field */}
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ color: "#74787C", fontSize: { xs: "26px", lg: "16px" }, fontWeight: 500, mb: 1,textAlign:'left' ,}}>
            Name*
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Enter your name"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#a3a3a33a",
                borderRadius: "5px",
                color: "#fff",
                "&::placeholder": { color: "#fff" }, // Placeholder stays white
                "&:hover, &:focus, &:focus-within": { backgroundColor: "#a3a3a33a", boxShadow: "none" },
              },
            }}
            sx={{
              input: { color: "#000" },
              "& fieldset": { border: "none" }, // No border
            }}
          />
        </Grid>

        {/* Email Field */}
        <Grid item xs={12} md={4}>
          <Typography  variant="body2" sx={{ color: "#74787C", fontSize: { xs: "26px", lg: "16px" }, fontWeight: 500, mb: 1 ,textAlign:'left'}}>
            Email*
          </Typography>
          <TextField
            fullWidth
            required
            type="email"
            placeholder="Enter your email"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#a3a3a33a",
                borderRadius: "5px",
                color: "#fff",
                "&::placeholder": { color: "#fff" },
                "&:hover, &:focus, &:focus-within": { backgroundColor: "#a3a3a33a", boxShadow: "none" },
              },
            }}
            sx={{
              input: { color: "#000" },
              "& fieldset": { border: "none" },
            }}
          />
        </Grid>

        {/* Website Field */}
        <Grid item xs={12} md={4}>
          <Typography  variant="body2" sx={{ color: "#74787C", fontSize: { xs: "26px", lg: "16px" }, fontWeight: 500, mb: 1 ,textAlign:'left'}}>
            Number*
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your Number"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#a3a3a33a",
                borderRadius: "5px",
                color: "#fff",
                "&::placeholder": { color: "#fff" },
                "&:hover, &:focus, &:focus-within": { backgroundColor: "#a3a3a33a", boxShadow: "none" },
              },
            }}
            sx={{
              input: { color: "#000" },
              "& fieldset": { border: "none" },
            }}
          />
        </Grid>

        {/* Comment Field */}
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Typography  variant="body2" sx={{ color: "#74787C", fontSize: { xs: "26px", lg: "16px" }, fontWeight: 500, mb: 1,textAlign:'left' }}>
            Comment*
          </Typography>
          <TextField
            fullWidth
            required
            multiline
            rows={5}
            placeholder="Write your comment here"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#a3a3a33a",
                borderRadius: "5px",
                color: "#fff",
                "&::placeholder": { color: "#fff" },
                "&:hover, &:focus, &:focus-within": { backgroundColor: "#a3a3a33a", boxShadow: "none" },
              },
            }}
            sx={{
              input: { color: "#000" },
              "& fieldset": { border: "none" },
            }}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} 
        sx={{
            display:'flex',
            justifyContent:'start'
        }}
        >
          <CustomButton
            sx={{
              width: { xs: '330px', lg: '100%' },
              height: { xs: '90px', lg: '55px' },
              fontSize: { xs: "2.2rem", lg: "1.2rem" }
            }}
          >
            Post Comment
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommentForm;
