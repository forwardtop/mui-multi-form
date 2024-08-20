// CIFHeader.js
import React from 'react';
import { Box } from '@mui/material';

const CIFHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: "100px",
      }}
    >
      {/* Content Box */}
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            src="/images/UC8 Logo - Square.png"
            alt="Company Logo"
            style={{ maxWidth: "300px", maxHeight: "100px", display: "" }}
          />
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <h1 style={{ marginTop: "0" }}>
            Client Information Form (CIF)
            <br /> Credit Account Application (CAA)
          </h1>
          <span>UC8 Australia Pty Ltd ABN 51 666 810 215 (“UC8”)</span>
        </Box>
      </Box>
      {/* Logo Box */}
      <Box>
        <h3 style={{ textAlign: "right", marginBottom: "0" }}>1300 804 880</h3>
        <p style={{ textAlign: "right", marginTop: "0" }}>
          Level 5, 131 Wickham Terrace<br />
          Brisbane | Queensland | Australia | 4000<br />
          info@uc8.au<br />
          uc8.au
        </p>
      </Box>
    </Box>
  );
};

export default CIFHeader;
