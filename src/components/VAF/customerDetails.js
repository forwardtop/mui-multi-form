import React, { useContext } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

const CustomerDetails = () => {
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
        VAFSectionTitles.customerDetails.number,
        VAFSectionTitles.customerDetails.title,
        VAFSectionTitles.customerDetails.description
      )}
      <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Company Name:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="companyName"
            size="small"
            variant="outlined"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Trading As:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="tradingAs"
            size="small"
            variant="outlined"
            value={formData.tradingAs}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>ABN:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="suburb"
            size="small"
            variant="outlined"
            value={formData.abn}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>ACN:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="acn"
            size="small"
            variant="outlined"
            value={formData.acn}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerDetails;
