// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { APASectionTitles } from "../../constants/sectionTitles";

const CustomerDetails = () => {
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
        APASectionTitles.customerDetails.number,
        APASectionTitles.customerDetails.title,
        APASectionTitles.customerDetails.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        {renderInput(2, 10, "Company Name:", "companyName", formData, handleChange)}
        {renderInput(2, 10, "Trading As:", "tradingAs", formData, handleChange)}
        <Grid container spacing={2}>
            <Grid item xs={6}>
            {renderInput(4, 8, "ABN:", "abn", formData, handleChange)}
            </Grid>
            <Grid item xs={6}>
            {renderInput(2, 10, "ACN:", "acn", formData, handleChange)}
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerDetails;
