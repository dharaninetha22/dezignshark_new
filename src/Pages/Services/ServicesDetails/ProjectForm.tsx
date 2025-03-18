import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import AnimatedText from "../../../Components/Inputs/AnimatedText";
import CustomButton from "../../../Components/Inputs/CustomButton";

// Define Form Data Type
type FormData = {
  name: string;
  phone: string;
  message: string;
};

const ProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Handle Form Submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    reset(); // Clear the form after submission
  };

  return (
    <Container maxWidth="xl" sx={{mt:5}}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 3,
          border: "1px solid #ddd",  
          background: "white",
          textAlign: "left",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom >
          
        </Typography>
        <AnimatedText sx={{color:'black', textAlign:'left',mb:3,fontSize:{xs:"30px",lg:"20px"}}}>
        Let's start new project.
        </AnimatedText>

        {/* Name Input */}
        <TextField
          fullWidth
          placeholder="Your name"
          variant="filled"
          {...register("name", { required: "Name is required" })}
          sx={{ 
            mb: 2, 
            background: "#f6f6f6", 
            borderRadius: 1 ,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none !important" }, // Removes border
            },}}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Phone Number Input */}
        <TextField
          fullWidth
          placeholder="Phone number"
          variant="filled"
          {...register("phone", { required: "Phone number is required" })}
          sx={{ mb: 2, background: "#f6f6f6", borderRadius: 1 }}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        {/* Message Input */}
        <TextField
          fullWidth
          placeholder="Message"
          variant="filled"
          multiline
          rows={4}
          {...register("message", { required: "Message is required" })}
          sx={{ mb: 3, background: "#f6f6f6", borderRadius: 1 }}
          error={!!errors.message}
          helperText={errors.message?.message}
        />

        {/* Submit Button */}
        <CustomButton
        
        >
          Start Project
        </CustomButton>
      </Box>
    </Container>
  );
};

export default ProjectForm;
