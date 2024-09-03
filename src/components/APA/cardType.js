// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { renderInput } from "../../utils/renderInput";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { APASectionTitles } from "../../constants/sectionTitles";
import { checkBoxUtils } from "../../utils/checkBoxUtils";
import { FormDatePicker } from "../../utils/datePicker";

const CardType = () => {
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
        APASectionTitles.cardType.number,
        APASectionTitles.cardType.title,
        APASectionTitles.cardType.description
      )}
      <Box
        sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", lineHeight: "3rem" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="text">Card Type:</Typography>
          </Grid>
          <Grid item xs={9} sx={{ display: "flex" }}>
            {checkBoxUtils(3, "Visa Card:", "visaCard", formData, handleChange)}
            {checkBoxUtils(
              4,
              "Master Card:",
              "masterCard",
              formData,
              handleChange
            )}
            {checkBoxUtils(
              5,
              "American Express Card:",
              "americanExpressCard",
              formData,
              handleChange
            )}
          </Grid>
        </Grid>

        {renderInput(3, 9, "Card Number:", "cardNumber", formData, handleChange)}
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="text">Card Expiry Date:</Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            {FormDatePicker("cardExpiryDate", formData, handleChange)}
          </Grid>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Typography variant="text">MM/YY</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
        
          {renderInput(6, 6, "Card CSV Number:", "cardCSVNumber", formData, handleChange)}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex" }}>
            <Typography variant="text">If American Express (4 digits on front of card).</Typography>
          </Grid>
        </Grid>
        {renderInput(3, 9, "Name as Displayed on Card", "nameAsDisplayedOnCard", formData, handleChange)}
        {renderInput(3, 9, "", "", formData, handleChange)}
      </Box>
    </Box>
  );
};

export default CardType;
