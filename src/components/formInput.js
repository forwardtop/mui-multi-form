import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const FormInput = ({ x, y, label, name, value, onChange }) => {
  return (
    <Grid container spacing={1} sx={{ marginBottom: "1rem" }}>
      <Grid
        item
        xs={12}
        sm={x}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item xs={12} sm={y}>
        <TextField
          fullWidth
          name={name}
          size="small"
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default FormInput;
