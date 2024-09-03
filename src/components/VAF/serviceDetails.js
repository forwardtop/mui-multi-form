import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { checkBoxUtils } from "../../utils/checkBoxUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

const ServiceDetails = () => {
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
        VAFSectionTitles.serviceDetails.number,
        VAFSectionTitles.serviceDetails.title,
        VAFSectionTitles.serviceDetails.description
      )}
      <Grid container spacing={2} sx={{marginLeft:"3.5rem"}}>
      {checkBoxUtils(3, "Transfer / Churn:", "transferChurn", formData, handleChange)}
      {checkBoxUtils(2, "New Owner(s):", "newOwners", formData, handleChange)}
      {checkBoxUtils(3, "Relocate Service(s):", "relocateServices", formData, handleChange)}
      {checkBoxUtils(3, "New Service(s):", "newServices", formData, handleChange)}
      </Grid>
    </Box>
  );
};

export default ServiceDetails;
