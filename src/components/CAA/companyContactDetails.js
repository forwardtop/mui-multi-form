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
const ServiceDetails = () => {
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
            5
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="secondary.main"
            sx={{ marginLeft: "0.5rem" }}
          >
            Company Contact Details
          </Typography>
        </Box>
      </Box>
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
            value={formData.inboundTel}
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
            value={formData.fnnT}
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
              onChange={handleChange}
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
            value={formData.inboundFax}
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
            value={formData.fnnFax}
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
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            name="webUrl"
            size="small"
            variant="outlined"
            value={formData.webUrl}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDetails;
