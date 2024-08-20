import React, { useContext } from 'react';
import { Box, Grid, Typography, TextField, FormGroup, Checkbox } from '@mui/material';
import { AuthContext } from '../../config/AuthContext';
const BusinessMarketSector = ( ) => {
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
                3
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                Business Market Sector
              </Typography>
            </Box>
          </Box>
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
                      checked={Boolean(Number(formData.education))}
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
                      checked={Boolean(Number(formData.healthCare))}
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
                      checked={Boolean(Number(formData.retail))}
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
                      name="retail"
                      checked={Boolean(Number(formData.retail))}
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
                      checked={Boolean(Number(formData.government))}
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
                      name="healthCare"
                      checked={Boolean(Number(formData.healthCare))}
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
                      checked={Boolean(Number(formData.finance))}
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
                      checked={Boolean(Number(formData.residential))}
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
                      checked={Boolean(Number(formData.hospitality))}
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
                      checked={Boolean(Number(formData.legal))}
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
                      checked={Boolean(Number(formData.advertising))}
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
                      checked={Boolean(Number(formData.building))}
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
                      checked={Boolean(Number(formData.entertainment))}
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
                      checked={Boolean(Number(formData.industry))}
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
                    value={formData.other}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

  );
};

export default BusinessMarketSector;
