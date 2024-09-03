// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

const ContactPeriod = () => {
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
        VAFSectionTitles.contactPeriod.number,
        VAFSectionTitles.contactPeriod.title,
        VAFSectionTitles.contactPeriod.description
      )}
      <Box sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem", }}>
        <Grid container spacing={1} sx={{display:"flex", alignItems:"center" }}>
          <Grid item xs={3}>
            <Typography variant="subtitle1">
              Minimum Contract Period:
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              name="minimumContractPeriod"
              size="small"
              variant="outlined"
              value={formData.minimumContractPeriod}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Months</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPeriod;
