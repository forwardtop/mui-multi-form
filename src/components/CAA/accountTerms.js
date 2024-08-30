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
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";
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
      {sectionTitle(
        CIFSectionTitles.accountTerms.number,
        CIFSectionTitles.accountTerms.title,
        CIFSectionTitles.accountTerms.description
      )}

      <Box sx={{ marginLeft: "3.5rem" }}>
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
                      Number(formData.monthlyReoccurringCost14Days)
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="p">Equipment Purchases:</Typography>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="equipmentPurchasesCOD"
                    checked={Boolean(Number(formData.equipmentPurchasesCOD))}
                    onChange={handleChange}
                  />
                }
                label="COD"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="equipmentPurchases7Days"
                    checked={Boolean(Number(formData.equipmentPurchases7Days))}
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
                    checked={Boolean(Number(formData.equipmentPurchases14Days))}
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
                  checked={Boolean(Number(formData.equipmentPurchasesOther))}
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="p">Consumables:</Typography>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="consumablesCOD"
                    checked={Boolean(Number(formData.consumablesCOD))}
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
                    checked={Boolean(Number(formData.consumables7Days))}
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
                    checked={Boolean(Number(formData.consumables14Days))}
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
                  checked={Boolean(Number(formData.consumablesOther))}
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
