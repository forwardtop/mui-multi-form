// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";

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
        PAFSectionTitles.contactDetails.number,
        PAFSectionTitles.contactDetails.title,
        PAFSectionTitles.contactDetails.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
      <Grid container spacing={2}>
            <Grid item xs={6}>
            {renderInput(4, 8, "FNN Tel:", "fnnTel", formData, handleChange)}
            </Grid>
            <Grid item xs={6}>
            {renderInput(4, 8, "Inbound Tel:", "inboundTel", formData, handleChange)}
            </Grid>
        </Grid>
       
      <Grid container spacing={2}>
            <Grid item xs={6}>
            {renderInput(4, 8, "FNN Fax:", "fnnFax", formData, handleChange)}
            </Grid>
            <Grid item xs={6}>
            {renderInput(4, 8, "Inbound Fax:", "inboundFax", formData, handleChange)}
            </Grid>
        </Grid>
        
      <Grid container spacing={2}>
            <Grid item xs={6}>
            {renderInput(4, 8, "Mobile:", "mobile", formData, handleChange)}
            </Grid>
            <Grid item xs={6}>
            {renderInput(4, 8, "Tel AH:", "telAH", formData, handleChange)}
            </Grid>
        </Grid>
       
        {renderInput(2, 10, "Email Address:", "email", formData, handleChange)}
        {renderInput(2, 10, "Web URL:", "webURL", formData, handleChange)}
        
        
      </Box>
    </Box>
  );
};

export default ContactDetails;
