import React, { useContext } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
const SiteAddress = () => {
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
        VAFSectionTitles.siteAddress.number,
        VAFSectionTitles.siteAddress.title,
        VAFSectionTitles.siteAddress.description
      )}
      <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Address Line 1:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="addressLine1"
            size="small"
            variant="outlined"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Address Line 2:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="addressLine2"
            size="small"
            variant="outlined"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Address Line 3:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="addressLine3"
            size="small"
            variant="outlined"
            value={formData.addressLine3}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Suburb:</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            name="suburb"
            size="small"
            variant="outlined"
            value={formData.suburb}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Postcode:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="postcode"
            size="small"
            variant="outlined"
            value={formData.postcode}
            onChange={handleChange}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>City:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="city"
            size="small"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>State:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="state"
            size="small"
            variant="outlined"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SiteAddress;
