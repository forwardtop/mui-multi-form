import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";
const ServiceDetails = () => {
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
        CIFSectionTitles.companyContactDetails.number,
        CIFSectionTitles.companyContactDetails.title,
        CIFSectionTitles.companyContactDetails.description
      )}
      <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Inbound Tel:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="inboundTel"
            size="small"
            variant="outlined"
            defaultValue={formData.inboundTel}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>FNN Tel:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="fnnTel"
            size="small"
            variant="outlined"
            defaultValue={formData.fnnTel}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={2.5}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>End Point(EP):</Typography>
            <Checkbox
              color="primary"
              name="faxEndPoint"
              checked={Boolean(Number(formData.faxEndPoint))}
              onBlur={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Inbound Fax:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="inboundFax"
            size="small"
            variant="outlined"
            defaultValue={formData.inboundFax}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>FNN Fax:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="fnnFax"
            size="small"
            variant="outlined"
            defaultValue={formData.fnnFax}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={2.5}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography>End Point(EP):</Typography>
            <Checkbox
              color="primary"
              name="telEndPoint"
              checked={Boolean(Number(formData.telEndPoint))}
              onBlur={handleChange}
              sx={{ marginLeft: 1 }}
            />
          </FormGroup>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Email Address:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="email"
            size="small"
            variant="outlined"
            defaultValue={formData.email}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Web URL:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="webURL"
            size="small"
            variant="outlined"
            defaultValue={formData.webURL}
            onBlur={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDetails;
