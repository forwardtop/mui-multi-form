// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/formInputUtils";

const PrimaryContactPerson = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          color="secondary.main"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "1.8rem",
            height: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "0.5rem",
          }}
        >
          4
        </Typography>
        <Typography variant="h6" color="secondary.main">
          Primary Contact Person
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3.5rem", paddingY: "2rem" }}>
        {renderInput(2, 4, "Title", "title", formData, handleChange)}
        {renderInput(2, 10, "First Name", "firstName", formData, handleChange)}
        {renderInput(2, 10, "Middle Name/s", "middleName", formData, handleChange)}
        {renderInput(2, 10, "Surname", "surname", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default PrimaryContactPerson;
