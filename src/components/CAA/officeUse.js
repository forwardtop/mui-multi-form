import React, { useContext } from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import { AuthContext } from '../../config/AuthContext';
const OfficeUse = ( ) => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box sx={{ marginY: "3rem" }}>
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
            <Box>
              <Typography
                variant="body1"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                This is a Business Application
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                (see Eligibility for Services).
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="secondary.main"
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
              <Typography>Client Account:</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="clientAccount"
                size="small"
                variant="outlined"
                value={formData.clientAccount}
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
              <Typography>Approved Credit:</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="approvedCredit"
                size="small"
                variant="outlined"
                value={formData.approvedCredit}
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
              <Typography>Approved By:</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="approvedBy"
                size="small"
                variant="outlined"
                value={formData.approvedBy}
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
