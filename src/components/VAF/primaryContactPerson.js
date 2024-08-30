// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/formInputUtils";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

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
      {sectionTitle(
        VAFSectionTitles.primaryContactPerson.number,
        VAFSectionTitles.primaryContactPerson.title,
        VAFSectionTitles.primaryContactPerson.description
      )}
      <Box sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem" }}>
        {renderInput(2, 4, "Title", "title", formData, handleChange)}
        {renderInput(2, 10, "First Name", "firstName", formData, handleChange)}
        {renderInput(2, 10, "Middle Name/s", "middleName", formData, handleChange)}
        {renderInput(2, 10, "Surname", "surname", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default PrimaryContactPerson;
