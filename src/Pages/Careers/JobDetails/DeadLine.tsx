import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import ApplicationFormPopup from "./JobPopupForm/ApplicationFormPopup";
import CustomButton from "../../../Components/Inputs/CustomButton";




const ApplicationStatus = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2} sx={{ width: "fit-content" }}>
      <Typography variant="body2" sx={{ color: "black" }}>
        Application ends:{" "}
        <Typography component="span" sx={{ color: "error.main", fontWeight: 500 }}>
          May 19, 2026
        </Typography>
      </Typography>

      {/* Apply Button */}
      <CustomButton >Apply</CustomButton>

      {/* Application Form Popup */}
      <ApplicationFormPopup open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default ApplicationStatus;
