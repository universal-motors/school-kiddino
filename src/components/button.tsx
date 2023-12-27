import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ButtonSizes() {
  return (
    <Button
      sx={{
        background: "#5048e5",
        width: "90%",
        mt: "10px",
        color: "#ffffff",
        hover: { backgroundColor: "#3832A0" },
      }}
      fullWidth
      variant="contained"
    >
      SUBMIT
    </Button>
  );
}

{
  /* <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button sx={{
                    background: "#3832A0", width: "90%", mt: "10px"
                }} fullWidth variant="contained" size="large">
                    Large
                </Button>
            </div>
        </Box > */
}
