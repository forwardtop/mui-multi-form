// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";

const ContactPerson = () => {
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
        PAFSectionTitles.contactPerson.number,
        PAFSectionTitles.contactPerson.title,
        PAFSectionTitles.contactPerson.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        {renderInput(2, 3, "Title:", "title", formData, handleChange)}
        {renderInput(2, 10, "First Name:", "firstName", formData, handleChange)}
        {renderInput(2, 10, "Middle Name/s:", "middleName", formData, handleChange)}
        {renderInput(2, 10, "Surname/s:", "surname", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default ContactPerson;
