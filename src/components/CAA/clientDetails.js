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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CIFSectionTitles } from "../../constants/sectionTitles";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { YesNoCheckBoxUtils } from "../../utils/yesNoCheckBoxUtils";
const ClientDetails = () => {
  const { formData, CAAFormData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        CIFSectionTitles.clientDetails.number,
        CIFSectionTitles.clientDetails.title,
        CIFSectionTitles.clientDetails.description
      )}
      <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Full Legal Name:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="fullName"
            size="small"
            variant="outlined"
            defaultValue={formData.fullName}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Trading As:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            name="tradingAs"
            size="small"
            variant="outlined"
            defaultValue={formData.tradingAs}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>ABN:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="abn"
            size="small"
            variant="outlined"
            defaultValue={formData.abn}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>ACN:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="acn"
            size="small"
            variant="outlined"
            defaultValue={formData.acn}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "10px",
          }}
        >
          <Typography>Entity Type:</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid item xs={12} sx={{ display: "flex" }}>
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
                <Typography>Sole Trader:</Typography>
                <Checkbox
                  color="primary"
                  name="trader"
                  checked={Boolean(Number(CAAFormData.trader))}
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
                <Typography>Trust:</Typography>
                <Checkbox
                  color="primary"
                  name="trust"
                  checked={Boolean(Number(CAAFormData.trust))}
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
                <Typography>Partnership</Typography>
                <Checkbox
                  color="primary"
                  name="partnership"
                  checked={Boolean(Number(CAAFormData.partnership))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item sm={3}></Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
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
                <Typography>Company:</Typography>
                <Checkbox
                  color="primary"
                  name="company"
                  checked={Boolean(Number(CAAFormData.company))}
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
                <Typography>Not For Profit:</Typography>
                <Checkbox
                  color="primary"
                  name="notForProfit"
                  checked={Boolean(Number(CAAFormData.notForProfit))}
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
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="entityTypeOther"
                size="small"
                variant="outlined"
                defaultValue={CAAFormData.entityTypeOther}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "10px",
          }}
        >
          <Typography>Date Established:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ paddingTop: "0px" }}
            >
              <DatePicker
                onChange={handleChange}
                value={dayjs(CAAFormData.CAADateEstablished)}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "10px",
          }}
        >
          <Typography sx={{ fontStyle: "italic" }}>(Current Owners)</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "10px",
            justifyContent: "flex-end",
          }}
        >
          <Typography>Registered GST:</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {YesNoCheckBoxUtils("registeredGST", CAAFormData, handleChange)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientDetails;
