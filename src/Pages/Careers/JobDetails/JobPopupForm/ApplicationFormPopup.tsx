import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { gsap } from "gsap";
import CustomInput from "../../../../Components/Inputs/CustomInput";



const steps = ["Autofill with Resume", "My Information", "My Experience", "Application Questions", "Submit"];

interface ApplicationFormPopupProps {
  open: boolean;
  handleClose: () => void;
}

const ApplicationFormPopup: React.FC<ApplicationFormPopupProps> = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    experience: "",
    whyJob: "",
    skills: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  }, [open, activeStep]);

  const requiredFields: Record<number, (keyof typeof formData)[]> = {
    1: ["fullName", "email", "phone"],
    2: ["jobTitle", "companyName", "experience"],
    3: ["whyJob", "skills"],
  };

  const handleNext = () => {
    if (requiredFields[activeStep]) {
      const newErrors: Record<string, boolean> = {};
      requiredFields[activeStep].forEach((field) => {
        if (!formData[field].trim()) newErrors[field] = true;
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiBackdrop-root": {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {activeStep > 0 && (
        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: 15,
            left: 20,
            color: "black",
            fontSize: "16px",
            textDecoration: "underline",
            "&:hover": { textDecoration: "underline", backgroundColor: "transparent" },
          }}
        >
          <ArrowBackIcon /> Back
        </IconButton>
      )}

      <Box display="flex" justifyContent="flex-end" p={2}>
        <IconButton
          onClick={handleClose}
          sx={{
            backgroundColor: "red",
            color: "white",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography variant="h4" sx={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
        Job Application
      </Typography>

      <DialogContent ref={formRef}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": {
                    fontSize: "20px !important",
                    color: "white",
                    backgroundColor: activeStep === index ? "red" : "black",
                    borderRadius: "50%",
                    padding: "5px",
                  },
                  "& .MuiStepLabel-label": {
                    color: "black",
                    fontWeight: activeStep === index ? "bold" : "normal",
                    fontSize: "14px",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={3}>
          {activeStep === 1 && (
            <Box display="flex" flexDirection="column" gap={2} width="500px">
              <CustomInput name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} fullWidth required error={errors.fullName} />
              <CustomInput name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} fullWidth required error={errors.email} />
              <CustomInput name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} fullWidth required error={errors.phone} />
            </Box>
          )}

          {activeStep === 2 && (
            <Box display="flex" flexDirection="column" gap={2} width="500px">
              <CustomInput name="jobTitle" placeholder="Current Job Title" value={formData.jobTitle} onChange={handleInputChange} fullWidth required error={errors.jobTitle} />
              <CustomInput name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} fullWidth required error={errors.companyName} />
              <CustomInput name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleInputChange} fullWidth required error={errors.experience} />
            </Box>
          )}

          {activeStep === 3 && (
            <Box display="flex" flexDirection="column" gap={2} width="500px">
              <CustomInput name="whyJob" placeholder="Why do you want this job?" value={formData.whyJob} onChange={handleInputChange} fullWidth required error={errors.whyJob} />
              <CustomInput name="skills" placeholder="What skills make you a great fit?" value={formData.skills} onChange={handleInputChange} fullWidth required error={errors.skills} />
            </Box>
          )}

          {activeStep === 4 && (
            <Typography variant="h6" sx={{ textAlign: "center", color: "black" }}>
              Thank you for your application! 🎉
            </Typography>
          )}
        </Box>

        <Box display="flex" justifyContent="center" mt={3}>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" sx={{ backgroundColor: "red", color: "white" }} onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button variant="contained" sx={{ backgroundColor: "green", color: "white" }} onClick={handleClose}>
              Finish
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationFormPopup;
