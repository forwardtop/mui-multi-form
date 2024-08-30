import React from "react";
import { Box, Typography } from "@mui/material";

export const sectionTitle = (number, title, description) => (
  <>
    <Box sx={{ display: "flex" , alignItems:"center"}}>
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          color="secondary.main"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "1.8rem",
            height: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            margin:"0"
          }}
        >
          {number}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="secondary.main"
          sx={{ marginLeft: "0.5rem" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
    <Box sx={{ paddingLeft: "3.5rem" }}>
      <Typography
        variant="paragraph"
        color="secondary.main"
        sx={{ fontSize: "14px" }}
      >
        {description}
      </Typography>
    </Box>
  </>
);
