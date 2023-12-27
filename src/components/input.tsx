import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="EMAIL" id="fullWidth" type="email" />
      <div className="flex items-center">
        <TextField
          sx={{ mt: "20px" }}
          fullWidth
          label="PASSWORD"
          type="email"
          id="fullWidth"
        />
      </div>
    </Box>
  );
}
