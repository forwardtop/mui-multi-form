// src/MultiSectionForm.js
import React from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  FormGroup,
} from "@mui/material";

const MultiSectionForm = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Business Application Form
      </Typography>

      {/* Section 1: Office USE */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} sx={{ paddingTop: "0px!important" }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              PLEASE USE BLACK/BLUE INK
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="secondary"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "1rem",
                    height: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1" // Use a block-level variant or similar
                  color="secondary"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  This is a Business Application
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  color="secondary"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  (see Eligibility for Services).
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  color="secondary"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  One application per site location
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              border: 3,
              borderColor: "secondary",
              paddingTop: "0px!important",
              paddingLeft: "0px!important",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                backgroundColor: "black",
                width: "30%",
                color: "white",
                padding: "0.5rem",
              }}
            >
              OFFICE USE
            </Typography>
            <Grid
              container
              spacing={1}
              sx={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Client Account"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Approved Credit"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Approved By"
                  size="small"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Section 2: Client Details */}
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
              color="secondary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "1rem",
                height: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              2
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6" // Use a block-level variant or similar
              color="secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              Client Details
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={0.5} sx={{ paddingLeft: "2rem" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Full Legal Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Trading As"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ABN" size="small" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ACN" size="small" variant="outlined" />
          </Grid>
        </Grid>
      </Box>

      {/* Section 3: Site Address */}
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
              color="secondary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "1rem",
                height: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              3
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6" // Use a block-level variant or similar
              color="secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              Site Address
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={0.5} sx={{ paddingLeft: "2rem" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Address Line 1"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Address Line 2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Address Line 3"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              size="small"
              label="Suburb"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Postcode"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField fullWidth size="small" label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="State"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section 4: Contact Details */}
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
              color="secondary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "1rem",
                height: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              4
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6" // Use a block-level variant or similar
              color="secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              Contact Details
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={0.5} sx={{ paddingLeft: "2rem" }}>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              size="small"
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              size="small"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              size="small"
              label="Position"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Middle Name/s"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Surname"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth size="small" label="Tel" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth size="small" label="Fax" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Mobile"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Web URL"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section 5: Documents */}
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
              color="secondary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "1rem",
                height: "1rem",
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
              variant="h6" // Use a block-level variant or similar
              color="secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              Documents
            </Typography>
          </Box>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="To satisfy 100 point of ID, take copy of DL (Front & Back)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Copy of bills"
          />
        </FormGroup>
      </Box>

      {/* Section 6: Direct Debit */}
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
              color="secondary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "1rem",
                height: "1rem",
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
              variant="h6" // Use a block-level variant or similar
              color="secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              For direct debt from a bank account
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={0.5} sx={{ paddingLeft: "2rem" }}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth size="small" label="BSB" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              size="small"
              label="Bank / Institution"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Account Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              size="small"
              label="Branch"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Account Name"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Submit Button */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Button variant="contained" color="primary" size="large">
          Submit Application
        </Button>
      </Box>
    </Container>
  );
};

export default MultiSectionForm;
