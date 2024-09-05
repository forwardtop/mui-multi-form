import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";
const BusinessMarketSector = () => {
  const { CAAFormData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        CIFSectionTitles.businessMarketSector.number,
        CIFSectionTitles.businessMarketSector.title,
        CIFSectionTitles.businessMarketSector.description
      )}
      <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "10px!",
          }}
        >
          <Typography>Market Sector:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Education:</Typography>
                <Checkbox
                  color="primary"
                  name="education"
                  checked={Boolean(Number(CAAFormData.education))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Health Care:</Typography>
                <Checkbox
                  color="primary"
                  name="healthCare"
                  checked={Boolean(Number(CAAFormData.healthCare))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Retail:</Typography>
                <Checkbox
                  color="primary"
                  name="retail"
                  checked={Boolean(Number(CAAFormData.retail))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Manufacturing:</Typography>
                <Checkbox
                  color="primary"
                  name="manufacturing"
                  checked={Boolean(Number(CAAFormData.manufacturing))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Government:</Typography>
                <Checkbox
                  color="primary"
                  name="government"
                  checked={Boolean(Number(CAAFormData.government))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Transport:</Typography>
                <Checkbox
                  color="primary"
                  name="transport"
                  checked={Boolean(Number(CAAFormData.transport))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Finance:</Typography>
                <Checkbox
                  color="primary"
                  name="finance"
                  checked={Boolean(Number(CAAFormData.finance))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Residential / Home:</Typography>
                <Checkbox
                  color="primary"
                  name="residential"
                  checked={Boolean(Number(CAAFormData.residential))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Hospitality:</Typography>
                <Checkbox
                  color="primary"
                  name="hospitality"
                  checked={Boolean(Number(CAAFormData.hospitality))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Legal:</Typography>
                <Checkbox
                  color="primary"
                  name="legal"
                  checked={Boolean(Number(CAAFormData.legal))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Advertising:</Typography>
                <Checkbox
                  color="primary"
                  name="advertising"
                  checked={Boolean(Number(CAAFormData.advertising))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>Building:</Typography>
                <Checkbox
                  color="primary"
                  name="building"
                  checked={Boolean(Number(CAAFormData.building))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Entertainment</Typography>
                <Checkbox
                  color="primary"
                  name="entertainment"
                  checked={Boolean(Number(CAAFormData.entertainment))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>IT Industry:</Typography>
                <Checkbox
                  color="primary"
                  name="industry"
                  checked={Boolean(Number(CAAFormData.industry))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Other:</Typography>
            </Grid>
            <Grid item xs={12} sm={3.5}>
              <TextField
                fullWidth
                name="other"
                size="small"
                variant="outlined"
                defaultValue={CAAFormData.CAAMarketSectorOther}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessMarketSector;
