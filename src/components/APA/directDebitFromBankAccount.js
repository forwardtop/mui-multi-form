// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { APASectionTitles } from "../../constants/sectionTitles";

const DirectDebitFromBankAccount = () => {
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
        APASectionTitles.directDebitFromBankAccount.number,
        APASectionTitles.directDebitFromBankAccount.title,
        APASectionTitles.directDebitFromBankAccount.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            {renderInput(4, 8, "BSB:", "bsb", formData, handleChange)}
          </Grid>
          <Grid item xs={12} sm={7}>
            {renderInput(
              3,
              9,
              "Bank / Institution:",
              "bankInstitution",
              formData,
              handleChange
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            {renderInput(
              4,
              8,
              "Account Number:",
              "accountNumber",
              formData,
              handleChange
            )}
          </Grid>
          <Grid item xs={12} sm={7}>
            {renderInput(2, 10, "Branch:", "branch", formData, handleChange)}
          </Grid>
        </Grid>
        {renderInput(1.66, 10.34, "Account Name:", "accountName", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default DirectDebitFromBankAccount;
