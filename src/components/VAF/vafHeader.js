import React from "react";
import { Box } from "@mui/material";
const VAFHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            src="/images/UC8 Logo - Square.png"
            alt="Company Logo"
            style={{ maxWidth: "300px", maxHeight: "100px", display: "" }}
          />
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <h1 style={{ margin: "0" }}>Voice Application Form (VAF)</h1>
          <h3 style={{ marginTop: "0" }}> Credit Account Application (CAA)</h3>
          <span>UC8 Australia Pty Ltd ABN 51 666 810 215 (“UC8”)</span>
        </Box>
      </Box>
    </Box>
  );
};

export default VAFHeader;
