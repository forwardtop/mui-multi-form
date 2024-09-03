// src/components/PrimaryContactPerson.js
import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import CustomTextFieldAsCheckbox from "../../utils/CustomTextFieldAsCheckbox";

const PlanAndServiceDetails = () => {
  const formRows = Array.from({ length: 12 });
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        VAFSectionTitles.planAndService.number,
        VAFSectionTitles.planAndService.title,
        VAFSectionTitles.planAndService.description
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
            <Grid
              item
              xs={0.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                QTY
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Service<br></br> Details
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Installation <br></br>Upfront
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Unit<br></br>Price
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Plan<br></br> Code
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Monthly<br></br> Cost
              </Typography>
            </Grid>
            <Grid item xs={3.5}>
              <Grid container spacing={1}>
                {[
                  "SIP",
                  "Inbound",
                  "Mobile",
                  "Security",
                  "Hosting",
                  "Support",
                  "Other",
                ].map((label) => (
                  <Grid
                    item
                    xs={1.7142}
                    key={label}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        writingMode: "tb-rl",
                        transform: "rotate(-180deg)",
                      }}
                    >
                      {label}
                    </Typography>
                  </Grid>
                ))}
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
                  xs={0.5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
                <Grid item xs={1.5}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Typography>$</Typography>,
                    }}
                  />
                </Grid>
                <Grid item xs={1.5}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Typography>$</Typography>,
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Typography>$</Typography>,
                    }}
                  />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`sip_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`inbound_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`mobile_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`security_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`hosting_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`support_${index+1}`} index={index+1} />
                </Grid>
                <Grid item xs={0.5}>
                  <CustomTextFieldAsCheckbox name={`other_${index+1}`} index={index+1} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlanAndServiceDetails;
