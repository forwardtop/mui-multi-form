import React, { useContext } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";

import CIFHeader from "./cifHeader";
import OfficeUse from "./officeUse";
import ClientDetails from "./clientDetails";
import BusinessMarketSector from "./businessMarketSector";
import SiteAddress from "./siteAddress";
import CompanyContactDetails from "./companyContactDetails";
import ServiceDetails from "./serviceDetails";

const CAA = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <CIFHeader />

      <form>
        <OfficeUse />
        <ClientDetails />
        <BusinessMarketSector />
        <SiteAddress />
        <CompanyContactDetails />
        <ServiceDetails />
       
        <Box
          sx={{
            marginBottom: "2rem",
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
                7
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                For direct debit from a bank accounts
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>BSB:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="bsb"
                size="small"
                variant="outlined"
                value={formData.bsb}
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
              <Typography>Bank / Institution:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="bank"
                size="small"
                variant="outlined"
                value={formData.bank}
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
              }}
            >
              <Typography>Account Number:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="accountNumber"
                size="small"
                variant="outlined"
                value={formData.accountNumber}
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
              <Typography>Branch:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="bank"
                size="small"
                variant="outlined"
                value={formData.bank}
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
              }}
            >
              <Typography>Account Name:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                name="accountName"
                size="small"
                variant="outlined"
                value={formData.accountName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Submit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        ></Box>
      </form>
    </Container>
  );
};

export default CAA;
