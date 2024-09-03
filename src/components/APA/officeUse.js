import React, { useContext } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import TextFieldCheckBox from "../../utils/textFieldCheckBox";
const OfficeUse = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box sx={{ marginY: "1rem" }}>
      <Grid container spacing={1.5}>
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
                1
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography
                  variant="h6"
                  color="secondary.main"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  <b>Please Select</b>
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="secondary.main"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  <b>Payment Method.</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  sx={{
                    paddingBottom: "0.5rem",
                  }}
                >
                  <TextFieldCheckBox
                    labelSize={5}
                    checkBoxSize={2}
                    name="creditCard"
                    label="Credit Card:"
                  />
                </Grid>
                <Grid container>
                  <TextFieldCheckBox
                    labelSize={5}
                    checkBoxSize={2}
                    name="bankDebit"
                    label="Bank Debit:"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            border: 3,
            borderColor: "secondary.main",
            paddingTop: "0px!important",
            paddingLeft: "0px!important",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              backgroundColor: "black",
              width: "40%",
              color: "white",
              padding: "0.5rem",
            }}
          >
            OFFICE USE
          </Typography>
          <Grid
            container
            spacing={1.5}
            sx={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Account Number:</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
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
              sm={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Account Name:</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default OfficeUse;
