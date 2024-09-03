import React from "react";
import { Checkbox, FormGroup, Grid, Typography } from "@mui/material";


export const YesNoCheckBoxUtils = (checkName, formData, handleChange) => (
    
  <>
    <Grid
      item
      xs={12}
      sm={6}
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Yes:</Typography>
        <Checkbox
          color="primary"
          name={checkName}
          value="yes"
          checked={formData[checkName] === true}
          onChange={() =>
            handleChange({ target: { name: checkName, value: true } })
          }
          sx={{ marginLeft: 1 }}
        />
      </FormGroup>
    </Grid>
    <Grid
      item
      xs={12}
      sm={6}
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>No:</Typography>
        <Checkbox
          color="primary"
          name={checkName}
          value="no"
          checked={formData[checkName] === false}
          onChange={() =>
            handleChange({ target: { name: checkName, value: false } })
          }
          sx={{ marginLeft: 1 }}
        />
      </FormGroup>
    </Grid>
  </>
);
