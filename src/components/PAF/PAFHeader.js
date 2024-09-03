// CIFHeader.js
import React from "react";
import { Box } from "@mui/material";

const PAFHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Content Box */}
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            src="/images/UC8 Logo - Square.png"
            alt="Company Logo"
            style={{ maxWidth: "300px", maxHeight: "100px" }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ marginTop: "0" }}>Porting Application Form (PAF)</h1>
          <span>UC8 Australia Pty Ltd ABN 51 666 810 215 (“UC8”)</span>
        </Box>
      </Box>
    </Box>
  );
};

export default PAFHeader;
