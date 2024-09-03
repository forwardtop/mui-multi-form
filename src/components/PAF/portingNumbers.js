// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { PAFSectionTitles } from "../../constants/sectionTitles";
import CustomTextFieldAsCheckbox from "../../utils/CustomTextFieldAsCheckbox";
import { AuthContext } from "../../config/AuthContext";
const PortingNumbers = () => {
  const formRows = Array.from({ length: 18 });
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
        PAFSectionTitles.portingNumbers.number,
        PAFSectionTitles.portingNumbers.title,
        PAFSectionTitles.portingNumbers.description
      )}
      <Box sx={{ padding: "2rem" }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              paddingLeft: "0px!important",
              paddingTop: "0px!important",
              alignItems: "flex-end",
            }}
          >
            <Grid item xs={1.2}></Grid>
            <Grid item xs={2.93}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Number
              </Typography>
            </Grid>
            <Grid item xs={2.93}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Losing Carrier
              </Typography>
            </Grid>
            <Grid item xs={2.93}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Account Number
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container spacing={1}>
                {["Single Number", "Multi Numbers", "100 Numbers", "Other"].map(
                  (label) => (
                    <Grid item xs={3} key={label}>
                      <Typography
                        sx={{
                          transform: "rotate(-90deg)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {label}
                      </Typography>
                    </Grid>
                  )
                )}
              </Grid>
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
                  xs={1.2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Service {index + 1}:
                </Grid>
                <Grid
                  item
                  xs={2.93}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`service${index + 1}Number`} // Corrected template literal
                    value={formData[`service${index + 1}Number`]} // Corrected template literal
                    onChange={handleChange}
                    InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "center", 
                      },
                    },
                  }}
                  />
                </Grid>
                <Grid
                  item
                  xs={2.93}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`service${index + 1}LosingCarrier`} 
                    value={formData[`service${index + 1}LosingCarrier`]} 
                    onChange={handleChange}
                    InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "center",
                      },
                    },
                  }}
                  />
                </Grid>
                <Grid
                  item
                  xs={2.93}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name={`service${index + 1}AccountNumber`} // Corrected template literal
                    value={formData[`service${index + 1}AccountNumber`]} // Corrected template literal
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

                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox
                    name={`singleNumber_${index + 1}`}
                    index={index + 1}
                  />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox
                    name={`multiNumbers_${index + 1}`}
                    index={index + 1}
                  />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox
                    name={`numbers100_${index + 1}`}
                    index={index + 1}
                  />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox
                    name={`security_${index + 1}`}
                    index={index + 1}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PortingNumbers;
