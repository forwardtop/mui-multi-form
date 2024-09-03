// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";

const PortingFee = () => {
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
        PAFSectionTitles.portingFee.number,
        PAFSectionTitles.portingFee.title,
        PAFSectionTitles.portingFee.description
      )}
      <Box sx={{ paddingLeft: "3.5rem", paddingY: "0.8rem" }}>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12} sm={8}></Grid>
          <Grid item sm={4}>
            <Grid container spacing={1} sx={{ textAlign: "center" }}>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="h6">Qty</Typography>
              </Grid>
              <Grid
                item
                xs={4.5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="h6">Unit Cost</Typography>
              </Grid>
              <Grid
                item
                xs={4.5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="h6">Porting Fee (one-off)</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginBottom: "0.5rem" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              6.1 &nbsp;
                Simple Port (Single number on one bill):
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="simplePortQty"
                  size="small"
                  variant="outlined"
                  value={formData.simplePortQty}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "center", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="simplePortUnitCost"
                  size="small"
                  variant="outlined"
                  value={formData.simplePortUnitCost}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="simplePortPortingFee"
                  size="small"
                  variant="outlined"
                  value={formData.simplePortPortingFee}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginBottom: "0.5rem"}}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              6.2 &nbsp;
                Complex Port (Multiple numbers on one bill)
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="complexPortQty"
                  size="small"
                  variant="outlined"
                  value={formData.complexPortQty}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "center", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="complexPortUnitCost"
                  size="small"
                  variant="outlined"
                  value={formData.complexPortUnitCost}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="complexPortPortingFee"
                  size="small"
                  variant="outlined"
                  value={formData.complexPortPortingFee}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              6.3 &nbsp;
              100 Number Range (100 DID Block):
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name="numberRangeQty"
                  size="small"
                  variant="outlined"
                  value={formData.numberRangeQty}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "center", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="numberRangeUnitCost"
                  size="small"
                  variant="outlined"
                  value={formData.numberRangeUnitCost}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  fullWidth
                  name="numberRangePortingFee"
                  size="small"
                  variant="outlined"
                  value={formData.numberRangePortingFee}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Typography>$</Typography>,
                    sx: {
                      "& input": {
                        textAlign: "right", // Align text to the right
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PortingFee;
