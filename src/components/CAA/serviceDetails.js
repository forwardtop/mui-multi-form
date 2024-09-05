import React, { useContext } from "react";
import { Box, Grid, Typography, FormGroup, Checkbox } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";
const CompanyContactDetails = () => {
  const { CAAFormData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
    {sectionTitle(
        CIFSectionTitles.serviceDetails.number,
        CIFSectionTitles.serviceDetails.title,
        CIFSectionTitles.serviceDetails.description
      )}
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
              checked={Boolean(Number(CAAFormData.transferChurn))}
              onBlur={handleChange}
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
              checked={Boolean(Number(CAAFormData.newOwners))}
              onBlur={handleChange}
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
              checked={Boolean(Number(CAAFormData.relocateServices))}
              onBlur={handleChange}
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
              checked={Boolean(Number(CAAFormData.newServices))}
              onBlur={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyContactDetails;
