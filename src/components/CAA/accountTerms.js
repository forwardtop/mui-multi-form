import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
const AccountTerms = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
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
            Account Terms
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginLeft: "3.5rem" }}>
        <Typography variant="p" sx={{ fontSize: "14px" }}>
          Monthly Reoccurring Cost (MRC), UC8 will issue an electronic invoice
          which will be sent to your nominated email address.
          <br></br>Invoice are issued on the 1st day of each month but may vary
          from time to time.
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="p">Monthly Reoccurring Cost (MRC):</Typography>
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: "flex" }}>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="monthlyReoccurringCostDays"
                    checked={Boolean(
                      Number(formData.monthlyReoccurringCostDays)
                    )}
                    onChange={handleChange}
                  />
                }
                label="14 Days"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="monthlyReoccurringCostOther"
                  checked={Boolean(
                    Number(formData.monthlyReoccurringCostOther)
                  )}
                  onChange={handleChange}
                />
              }
              label="other"
            />
            <TextField
              fullWidth
              size="small"
              name="monthlyReoccurringCostOtherText"
              onChange={handleChange}
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="p">Equipment Purchases:</Typography>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="monthlyReoccurringCostCOD"
                    checked={Boolean(
                      Number(formData.monthlyReoccurringCostCOD)
                    )}
                    onChange={handleChange}
                  />
                }
                label="COD"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="monthlyReoccurringCost7Days"
                    checked={Boolean(
                      Number(formData.monthlyReoccurringCost7Days)
                    )}
                    onChange={handleChange}
                  />
                }
                label="7 Days"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: "flex" }}>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="equipmentPurchases14Days"
                    checked={Boolean(
                      Number(formData.equipmentPurchases14Days)
                    )}
                    onChange={handleChange}
                  />
                }
                label="14 Days"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="equipmentPurchasesOther"
                  checked={Boolean(
                    Number(formData.equipmentPurchasesOther)
                  )}
                  onChange={handleChange}
                />
              }
              label="other"
            />
            <TextField
              fullWidth
              size="small"
              name="equipmentPurchasesOtherText"
              onChange={handleChange}
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="p">Consumables:</Typography>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="consumablesCOD"
                    checked={Boolean(
                      Number(formData.consumablesCOD)
                    )}
                    onChange={handleChange}
                  />
                }
                label="COD"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="consumables7Days"
                    checked={Boolean(
                      Number(formData.consumables7Days)
                    )}
                    onChange={handleChange}
                  />
                }
                label="7 Days"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: "flex" }}>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="consumables14Days"
                    checked={Boolean(
                      Number(formData.consumables14Days)
                    )}
                    onChange={handleChange}
                  />
                }
                label="14 Days"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="consumablesOther"
                  checked={Boolean(
                    Number(formData.consumablesOther)
                  )}
                  onChange={handleChange}
                />
              }
              label="other"
            />
            <TextField
              fullWidth
              size="small"
              name="consumablesOtherText"
              onChange={handleChange}
              type="text"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AccountTerms;
