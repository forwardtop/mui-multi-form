// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import { checkBoxUtils } from "../../utils/checkBoxUtils";
import { YesNoCheckBoxUtils } from "../../utils/yesNoCheckBoxUtils";
import { renderInput } from "../../utils/renderInput";

const DirectInDialNumberRange = () => {
  const { VAFFormData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        VAFSectionTitles.directInDial.number,
        VAFSectionTitles.directInDial.title,
        VAFSectionTitles.directInDial.description
      )}
      <Box sx={{ paddingLeft: "0.5rem", paddingY: "0.8rem" }}>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              10.1 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "1rem" }}>
                Do you require direct in dial numbers to your handsets?
              </span>
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Grid container spacing={1}>
              {YesNoCheckBoxUtils("requireDN", VAFFormData, handleChange)}
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              10.2 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "1rem" }}>
                If yes, select Qty of DID service(s) required
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={{ display: "flex" }}>
            {checkBoxUtils(3, "10", "qtyOfDIDService10", VAFFormData, handleChange)}
            {checkBoxUtils(3, "25", "qtyOfDIDService25", VAFFormData, handleChange)}
            {checkBoxUtils(3, "50", "qtyOfDIDService50", VAFFormData, handleChange)}
            {checkBoxUtils(3, "100", "qtyOfDIDService100", VAFFormData, handleChange)}
          </Grid>
          <Grid item xs={12} sm={3}>
            {renderInput(
              3,
              9,
              "Other",
              "qtyOfDIDServiceOther",
              VAFFormData,
              handleChange
            )}
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginBottom: "10px" }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">
              10.3 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "1rem" }}>
                Plan Code:
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              name="planCode"
              size="small"
              variant="outlined"
              value={VAFFormData.planCode}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginBottom: "10px" }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">
              10.4 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "1rem" }}>
                Monthly Subscription:
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              name="monthlySubscription"
              size="small"
              variant="outlined"
              value={VAFFormData.monthlySubscription}
              onChange={handleChange}
              InputProps={{
                startAdornment: <Typography>$</Typography>,
              }}
            />
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">
              10.5 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "1rem" }}>
                Administration Fee (one-off):
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              name="administrationFee"
              size="small"
              variant="outlined"
              value={VAFFormData.administrationFee}
              onChange={handleChange}
              InputProps={{
                startAdornment: <Typography>$</Typography>,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ marginLeft: "3.5rem" }}></Grid>
      </Box>
    </Box>
  );
};

export default DirectInDialNumberRange;
