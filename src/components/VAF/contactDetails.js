// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/formInputUtils";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

const ContactDetails = () => {
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
        VAFSectionTitles.contactDetails.number,
        VAFSectionTitles.contactDetails.title,
        VAFSectionTitles.contactDetails.description
      )}
      <Box sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem" }}>
        <div style={{display:'flex'}}>
            {renderInput(4, 7, "FNN Tel", "fnnTel", formData, handleChange)}
            {renderInput(4, 8, "InBound Tel", "inboundTel", formData, handleChange)}
        </div>
        <div style={{display:'flex'}}>
            {renderInput(4, 7, "FNN Fax", "fnnFax", formData, handleChange)}
            {renderInput(4, 8, "InBound Fax", "inboundFax", formData, handleChange)}
        </div>
        <div style={{display:'flex'}}>
            {renderInput(4, 7, "Mobile", "mobile", formData, handleChange)}
            {renderInput(4, 8, "Tel AH", "telAh", formData, handleChange)}
        </div>
        {renderInput(2, 10, "Email Address", "email", formData, handleChange)}
        {renderInput(2, 10, "Web URL", "webURL", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default ContactDetails;
