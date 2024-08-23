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
const ClientDetails = () => {
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
            2
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="secondary.main"
            sx={{ marginLeft: "0.5rem" }}
          >
            Client Details
          </Typography>
        </Box>
      </Box>
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
            value={formData.fullName}
            onChange={handleChange}
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
            value={formData.tradingAs}
            onChange={handleChange}
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
            value={formData.abn}
            onChange={handleChange}
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
            value={formData.acn}
            onChange={handleChange}
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
                  checked={Boolean(Number(formData.trader))}
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
                  checked={Boolean(Number(formData.trust))}
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
                  checked={Boolean(Number(formData.partnership))}
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
                  checked={Boolean(Number(formData.company))}
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
                  checked={Boolean(Number(formData.notForProfit))}
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
                name="other"
                size="small"
                variant="outlined"
                value={formData.other}
                onChange={handleChange}
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
                value={dayjs(formData.dateEstablished)}
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
            justifyContent:'flex-end'
          }}
        >
          <Typography>Registered GST:</Typography>
        </Grid>
        <Grid item xs={12} sm={1.4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FormGroup sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Typography>Yes:</Typography>
          <Checkbox
            color="primary"
            name="registeredGST"
            value="yes"
            checked={formData.registeredGST === true}
            onChange={handleChange}
            sx={{ marginLeft: 1 }}
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={1.4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FormGroup sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Typography>No:</Typography>
          <Checkbox
            color="primary"
            name="registeredGST"
            value="no"
            checked={formData.registeredGST === false}
            onChange={handleChange}
            sx={{ marginLeft: 1 }}
          />
        </FormGroup>
      </Grid>
      </Grid>
    </Box>
  );
};

export default ClientDetails;
