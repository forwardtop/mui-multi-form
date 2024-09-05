import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

export const renderInput = (x, y, label, name, formData, handleChange) => (
  <Grid container spacing={1}>
    <Grid item xs={12} sm={x} sx={{ display: "flex", alignItems: "center" }}>
      <Typography>{label}</Typography>
    </Grid>
    <Grid item xs={12} sm={y}>
      <TextField
        fullWidth
        name={name}
        size="small"
        variant="outlined"
        defaultValue={formData[name]}
        onBlur={handleChange}
      />
    </Grid>
  </Grid>
);
