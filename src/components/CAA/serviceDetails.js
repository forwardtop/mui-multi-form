import React, { useContext } from "react";
import { Box, Grid, Typography, FormGroup, Checkbox } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
const CompanyContactDetails = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            color="secondary.main"
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "1.8rem",
              height: "1.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
          >
            6
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="secondary.main"
            sx={{ marginLeft: "0.5rem" }}
          >
            Service Details
          </Typography>
        </Box>
      </Box>
      <Grid item xs={12} sx={{ display: "flex", justifyContent:'space-between' }}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex" }}
        >
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex" }}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>Transfer / Churn:</Typography>
            <Checkbox
              color="primary"
              name="transferChurn"
              checked={Boolean(Number(formData.transferChurn))}
              onChange={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex"}}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>New Owner(s):</Typography>
            <Checkbox
              color="primary"
              name="newOwners"
              checked={Boolean(Number(formData.newOwners))}
              onChange={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex" }}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>Relocate Service(s):</Typography>
            <Checkbox
              color="primary"
              name="relocateServices"
              checked={Boolean(Number(formData.relocateServices))}
              onChange={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex" }}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>New Service(s):</Typography>
            <Checkbox
              color="primary"
              name="newServices"
              checked={Boolean(Number(formData.newServices))}
              onChange={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyContactDetails;
