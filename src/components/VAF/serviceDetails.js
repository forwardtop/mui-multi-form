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
        {checkBoxUtils({
          sm: 2.5,
          label: "Transfer / Churn:",
          name: "transferChurn",
          formData,
          handleChange,
        })}
        {checkBoxUtils({
          sm: 2.5,
          label: "New Owner(s):",
          name: "newOwners",
          formData,
          handleChange,
        })}
        {checkBoxUtils({
          sm: 2.5,
          label: "Relocate Service(s):",
          name: "relocateServices",
          formData,
          handleChange,
        })}
        {checkBoxUtils({
          sm: 2.5,
          label: "New Service(s):",
          name: "newServices",
          formData,
          handleChange,
        })}
      </Grid>
    </Box>
  );
};

export default ServiceDetails;
