import React, { useContext, useMemo } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import CustomTextFieldAsCheckbox from "../../utils/CustomTextFieldAsCheckbox";
import { AuthContext } from "../../config/AuthContext";

const PlanAndServiceDetails = () => {
  const { VAFFormData, handleChange } = useContext(AuthContext);

  // Memoize the formRows array
  const formRows = useMemo(() => Array.from({ length: 18 }), []);

  // Memoize the rendering of form fields to prevent re-rendering
  const renderFormFields = useMemo(() => {
    return formRows.map((_, index) => (
      <Grid container spacing={0.5} key={index} sx={{ marginTop: "0.5rem" }}>
        <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name={`qty${index + 1}`}
            defaultValue={VAFFormData[`qty${index + 1}`]}
            onBlur={handleChange}
            sx={{
                "& input": {
                  textAlign: "center",
                },
              }}
          />
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name={`serviceDetails${index + 1}`}
            defaultValue={VAFFormData[`serviceDetails${index + 1}`]}
            onBlur={handleChange}
            InputProps={{
              sx: {
                "& input": {
                  textAlign: "left",
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
            name={`installationUpfront${index + 1}`}
            defaultValue={VAFFormData[`installationUpfront${index + 1}`]}
            onBlur={handleChange}
            className="centered-content"
            InputProps={{
              startAdornment: <div>$</div>,
              sx: {
                "& input": {
                  textAlign: "left",
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
            name={`unitPrice${index + 1}`}
            defaultValue={VAFFormData[`unitPrice${index + 1}`]}
            onBlur={handleChange}
            InputProps={{
              startAdornment: <Typography>$</Typography>,
              sx: {
                "& input": {
                  textAlign: "left",
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
            name={`planCodeService${index + 1}`}
            defaultValue={VAFFormData[`planCodeService${index + 1}`]}
            onBlur={handleChange}
            InputProps={{
              sx: {
                "& input": {
                  textAlign: "left",
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
            name={`monthlyCost${index + 1}`}
            defaultValue={VAFFormData[`monthlyCost${index + 1}`]}
            onBlur={handleChange}
            InputProps={{
              startAdornment: <Typography>$</Typography>,
              sx: {
                "& input": {
                  textAlign: "left",
                },
              },
            }}
          />
        </Grid>
        {["sip", "inbound", "mobile", "security", "hosting", "support", "other"].map((label) => (
          <Grid item xs={0.5} key={`${label}_${index + 1}`}>
            <CustomTextFieldAsCheckbox
              name={`${label}_${index + 1}`}
              index={index + 1}
            />
          </Grid>
        ))}
      </Grid>
    ));
  }, [formRows, VAFFormData, handleChange]);

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
              xs={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                QTY
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Service<br /> Details
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Installation <br />Upfront
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Unit<br />Price
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Plan<br /> Code
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                Monthly<br /> Cost
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
                  <Grid item xs={1.7142} key={label}>
                    <Typography sx={{ transform: "rotate(-90deg)" }}>
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
            {renderFormFields}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlanAndServiceDetails;
