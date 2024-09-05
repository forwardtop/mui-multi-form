// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import { AuthContext } from "../../config/AuthContext";

const MobileNumbers = () => {
  const formRows = Array.from({ length: 12 });
  const { VAFFormData, handleChange } = useContext(AuthContext);
console.log(VAFFormData);
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        VAFSectionTitles.mobileNumber.number,
        VAFSectionTitles.mobileNumber.title,
        VAFSectionTitles.mobileNumber.description
      )}
      <Box sx={{ padding: "2rem" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid item xs={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center" }}
              ></Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Service<br></br> Number(s)
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Service <br></br>Description
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                SIM Cost<br></br> (one-off)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                MRO
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Plan<br></br> Code
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Monthly <br></br>Subscription
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12}>
            {formRows.map((_, index) => (
              <Grid
                container
                spacing={0.5}
                key={index}
                sx={{ marginTop: "0.5rem" }}
              >
                <Grid
                  item
                  xs={0.5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>{index + 1}</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`serviceNumber${index+1}`}
                    defaultValue={VAFFormData[`serviceNumber${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`serviceDescription${index+1}`}
                    defaultValue={VAFFormData[`serviceDescription${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`simCost${index+1}`}
                    defaultValue={VAFFormData[`simCost${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      startAdornment: <Typography>$</Typography>,
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`mro${index+1}`}
                    defaultValue={VAFFormData[`mro${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      startAdornment: <Typography>$</Typography>,
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`planCode${index+1}`}
                    defaultValue={VAFFormData[`planCode${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={1.5}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`monthlySubscription${index+1}`}
                    defaultValue={VAFFormData[`monthlySubscription${index+1}`]}
                    onBlur={handleChange}
                    InputProps={{
                      startAdornment: <Typography variant="body1">$</Typography>,
                      sx: {
                        "& input": {
                          textAlign: "left", // Align text to the right
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "2rem", marginLeft: "3.5rem" }}>
          <Typography variant="body2">
            * Calls within Australia. Call charges apply for special service
            numbers and international calls.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNumbers;
