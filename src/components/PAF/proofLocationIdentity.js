import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import SignatureModal from "../signatureModal";
import { PAFSectionTitles } from "../../constants/sectionTitles";
import { sectionTitle } from "../../utils/sectionTitleUtils";

const ProofLocationIdentity = () => {
  const { formData, handleChange } = useContext(AuthContext);
  const [signature, setSignature] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const saveSignature = (data) => {
    setSignature(data);
  };

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        PAFSectionTitles.proofLocationIdentity.number,
        PAFSectionTitles.proofLocationIdentity.title,
        PAFSectionTitles.proofLocationIdentity.description
      )}
      <Grid
        container
        spacing={1}
        sx={{ paddingLeft: "3.5rem", marginTop: "1rem" }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Driver License Number:</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            name="driverLicenseNumber"
            size="small"
            variant="outlined"
            defaultValue={formData.driverLicenseNumber}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Expiry Date:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{padding:"0px"}}>
              <DatePicker
                format="DD/MM/YYYY"
                onBlur={handleChange}
                value={dayjs(formData.expiryDate)}
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
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>State/Territory:</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            name="stateTerritory"
            size="small"
            variant="outlined"
            defaultValue={formData.stateTerritory}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Date of Birth:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{padding:"0px"}}>
              <DatePicker
                onBlur={handleChange}
                value={dayjs(formData.birthDate)}
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
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
            <Typography variant="p">DD/MM/YYY</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ paddingLeft: "3.5rem", marginTop: "2rem" }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Photo Id Plus</Typography>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Rate Notice:</Typography>
                <Checkbox
                  color="primary"
                  name="rateNotice"
                  checked={Boolean(Number(formData.rateNotice))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Electricity Bill:</Typography>
                <Checkbox
                  color="primary"
                  name="electricityBill"
                  checked={Boolean(Number(formData.electricityBill))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Telephone Bill:</Typography>
                <Checkbox
                  color="primary"
                  name="telephoneBill"
                  checked={Boolean(Number(formData.telephoneBill))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Rent Recept:</Typography>
                <Checkbox
                  color="primary"
                  name="rentRecept"
                  checked={Boolean(Number(formData.rentRecept))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>18+ Card:</Typography>
                <Checkbox
                  color="primary"
                  name="card18"
                  checked={Boolean(Number(formData.card18))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Other (Specify):</Typography>
                <Checkbox
                  color="primary"
                  name="otherSpecify"
                  checked={Boolean(Number(formData.otherSpecify))}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="otherSpecifyText"
                size="small"
                variant="outlined"
                defaultValue={formData.otherSpecifyText}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                border: 3,
                borderColor: "secondary.main",
                paddingTop: "0px!important",
                paddingLeft: "0px!important",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  backgroundColor: "black",
                  width: "40%",
                  color: "white",
                  padding: "0.5rem",
                }}
              >
                OFFICE USE
              </Typography>
              <Grid
                container
                spacing={1}
                sx={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingBottom: "0.5rem",
                }}
              >
                <Typography variant="p" sx={{ marginTop: "1rem" }}>
                  I have sighted the applicant’s original identification.
                  Evidence of the applicant’s identity and site address is
                  attached to this application form. The applicant has stated to
                  me that the information supplied is true and correct.
                </Typography>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography>Salesperson:</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    fullWidth
                    name="salesperson"
                    size="small"
                    variant="outlined"
                    defaultValue={formData.salesperson}
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
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography>Date:</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker"]}
                      sx={{ paddingTop: "0px" }}
                    >
                      <DatePicker
                        format="DD/MM/YYYY"
                        onBlur={handleChange}
                        value={dayjs(formData.signDate)}
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
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <span>DD / MM / YYY</span>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography>Signature:</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      border: "solid 1px #0000003b",
                    }}
                    onClick={handleOpenModal}
                  >
                    {signature ? (
                      <img
                        src={signature}
                        alt="Signature"
                        style={{
                          height: "auto",
                        }}
                      />
                    ) : (
                      <Typography>Click to Sign</Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SignatureModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        saveSignature={saveSignature}
      />
    </Box>
  );
};

export default ProofLocationIdentity;
