import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import ApplicationFormPopup from "./JobPopupForm/ApplicationFormPopup";
import CustomButton from "../../../Components/Inputs/CustomButton";




const ApplicationStatus = () => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the popup
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the popup
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2} sx={{ width: "fit-content" }}>
      <Typography variant="body2" sx={{ color: "black" }}>
        Application ends:{" "}
        <Typography component="span" sx={{ color: "error.main", fontWeight: 500 }}>
          May 19, 2026
        </Typography>
      </Typography>

      {/* Apply Button */}
      <CustomButton onClick={handleOpen} >Apply</CustomButton>

      {/* Application Form Popup */}
      <ApplicationFormPopup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ApplicationStatus;
