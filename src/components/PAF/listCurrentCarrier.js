// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";

const ListCurrentCarrier = () => {
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
        PAFSectionTitles.listCurrentCarrier.number,
        PAFSectionTitles.listCurrentCarrier.title,
        PAFSectionTitles.listCurrentCarrier.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        {renderInput(2, 10, "Current Provider:", "currentProvider", formData, handleChange)}
        {renderInput(2, 10, "Account Number #:", "currentProviderAccountNumber", formData, handleChange)}
       
      </Box>
    </Box>
  );
};

export default ListCurrentCarrier;
