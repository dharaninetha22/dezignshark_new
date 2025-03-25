import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button, MenuItem, Select, FormHelperText } from "@mui/material";
import CustomInput from "../../Components/Inputs/CustomInput";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import { contactusshark1, contactusshark3 } from "../../assets";
import CustomButton from "../../Components/Inputs/CustomButton";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import { contactForm } from "../../api/services";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .required('Mobile number is required'),
  message: yup.string().optional(),
});

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
}
const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '', // Optional field can default to an empty string
  });

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (newFormData: FormData) => contactForm(newFormData),
    onSuccess: () => {
      toast.success('Successfully submitted!');
      resetForm(); // Reset form on successful submission
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  const resetForm = () => {
    // Reset form state in react-hook-form
    reset({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
    // Reset local state
    setFormValues({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  const onSubmit = (data: FormData) => {
    const temp = { ...data, type: 'contact' };
    mutation.mutate(temp);
  };

  return (
    <Box sx={{ backgroundColor: "black", px: { xs: 6, lg: 0 }, }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>

          <AnimatedText sx={{ color: "white", textAlign: "left", fontWeight: 700, mt: { xs: 1, lg: 4 }, fontSize: { xs: "55px", lg: "45px" }, }}>
            Struggling online? We’re here to help.
          </AnimatedText>
          {/* <Typography variant="h3" sx={{ fontStyle: "italic", mt: 1, color: "white", textAlign: "left" }}>
            Get in touch!
          </Typography> */}
        </Box>

        <Grid container spacing={4} >
          {/* Form Section */}
          <Grid item xs={12} lg={6} mt={2} mb={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12} lg={12} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Name *
                  </Typography>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Your Name"
                        fullWidth
                        {...field}
                        error={!!errors.name}
                        required
                        sx={{
                          height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                  
                          // Ensure input text is white
                          "& .MuiInputBase-input": {
                            color: "white !important",
                          },
                  
                          // Ensure placeholder color is white
                          "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.7) !important", 
                          },
                  
                        }}
                      />
                    )}
                  />
                  <FormHelperText error>{errors.name?.message}</FormHelperText>
                </Grid>
                {/* Phone Number Field */}
                <Grid item xs={12} lg={6} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Phone Number *
                  </Typography>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        {...field}
                        error={!!errors.phoneNumber}
                        required
                        sx={{
                          "&.MuiInputBase-root .MuiInputBase-input": { color: "white" },
                          height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                         // Ensure input text is white
                         "& .MuiInputBase-input": {
                          color: "white !important",
                        },
                
                        // Ensure placeholder color is white
                        "& .MuiInputBase-input::placeholder": {
                          color: "rgba(255, 255, 255, 0.7) !important", 
                        },
                
                        }}
                      />
                    )}
                  />
                  <FormHelperText error>{errors.phoneNumber?.message}</FormHelperText>
                </Grid>
                {/* Email Field */}
                <Grid item xs={12} lg={6} mb={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Email *
                  </Typography>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Your Email"
                        fullWidth
                        {...field}
                        error={!!errors.email}
                        required
                        sx={{
                          "&.MuiInputBase-root .MuiInputBase-input": { color: "white" },
                          height: { xs: "60px", lg: "25px" }, // Increased height for mobile
                          // Ensure input text is white
                          "& .MuiInputBase-input": {
                            color: "white !important",
                          },
                  
                          // Ensure placeholder color is white
                          "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.7) !important", 
                          },
                        }}
                      />
                    )}
                  />
                  <FormHelperText error>{errors.email?.message}</FormHelperText>
                </Grid>
                {/* Services Dropdown */}
                <Grid item xs={12} lg={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Services *
                  </Typography>
                  <Select
                    fullWidth
                    name="service"
                    displayEmpty
                    sx={{
                      height: { xs: "60px", lg: "45px" },
                      textAlign: "left",
                      backgroundColor: "transparent", // Ensure background stays transparent
                      color: "white",

                      // Ensuring no background color on focus
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "transparent !important",
                      },

                      // Ensuring text color for both placeholder and selected value
                      // "& .MuiSelect-select": {
                      //   color: service ? "white" : "rgba(255, 255, 255, 0.7)",
                      // },

                      // Dropdown icon color change
                      "& .MuiSvgIcon-root": {
                        color: "white", // Make dropdown icon white
                      },

                      // Border color adjustments
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fc0000",
                      },
                    }}
                  >
                    <MenuItem
                      value=""
                      disabled
                      sx={{
                        color: "white", // Placeholder color
                        "&:hover": {
                          color: "#fc0000",
                        },
                      }}
                    >
                      Select a Service
                    </MenuItem>
                    <MenuItem value="Branding" sx={{ "&:hover": { color: "#fc0000" } }}>

                      Branding
                    </MenuItem>

                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Social Media Marketing
                    </MenuItem><MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Pay-Per-Click Advertising
                    </MenuItem>
                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Web Development
                    </MenuItem>
                    <MenuItem value="SEO" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Search Engine Optimization
                    </MenuItem>
                    <MenuItem value="PPC" sx={{ "&:hover": { color: "#fc0000" } }}>
                      Graphic Designing
                    </MenuItem>
                  </Select>




                </Grid>
                {/* Message Field */}
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",

                      fontSize: { xs: "30px", lg: "18px" }, // Font size for mobile and desktop
                    }}
                  >
                    Message *
                  </Typography>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Your Message"
                        fullWidth
                        multiline
                        rows={3}
                        {...field}
                        error={!!errors.message}
                        sx={{
                          "&.MuiInputBase-root .MuiInputBase-input": { color: "white" },
                          // Ensure input text is white
                          "& .MuiInputBase-input": {
                            color: "white !important",
                          },
                  
                          // Ensure placeholder color is white
                          "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.7) !important", 
                          },
                  
                        }}
                      />
                    )}
                  />
                  <FormHelperText error>{errors.message?.message}</FormHelperText>
                </Grid>
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <CustomButton>
                      Send Message
                    </CustomButton>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={contactusshark3}
                alt="Contact Us"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
// Removed the conflicting local yupResolver function declaration

