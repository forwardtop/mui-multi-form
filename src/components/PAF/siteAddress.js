// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";

const SiteAddress = () => {
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
        PAFSectionTitles.siteAddress.number,
        PAFSectionTitles.siteAddress.title,
        PAFSectionTitles.siteAddress.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        {renderInput(2, 10, "AddressLine 1:", "addressLine1", formData, handleChange)}
        {renderInput(2, 10, "AddressLine 2:", "addressLine2", formData, handleChange)}
        {renderInput(2, 10, "AddressLine 3:", "addressLine3", formData, handleChange)}
        
        <Grid container spacing={2}>
            <Grid item xs={8}>
            {renderInput(3, 9, "Suburb:", "suburb", formData, handleChange)}
            </Grid>
            <Grid item xs={4}>
            {renderInput(4, 8, "Post Code:", "postCode", formData, handleChange)}
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={9}>
            {renderInput(2.7, 7.3, "City:", "city", formData, handleChange)}
            </Grid>
            <Grid item xs={3}>
            {renderInput(3, 9, "State:", "state", formData, handleChange)}
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SiteAddress;
