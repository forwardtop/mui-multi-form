import React, { useContext, useState } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import SignatureModal from "../signatureModal";

const DeclarationGuarantor = () => {
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
            12
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="secondary.main"
            sx={{ marginLeft: "0.5rem" }}
          >
            Declaration / Guarantor
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingLeft: "3.5rem" }}>
        <Typography
          variant="paragraph"
          color="secondary.main"
          sx={{ fontSize: "14px" }}
        >
          I certify that the above information is true and correct and that I
          accept the supply of credit by the Seller (if applicable). I have read
          and understand the TERMS AND CONDITIONS OF TRADE (overleaf or
          attached) of UC8 Australia Pty Ltd which form part of, and are
          intended to be read in conjunction with this Application and Client
          Information Form and agree to be bound by these conditions. I
          authorise the use of my personal information as detailed in the
          Privacy Act clause therein. I agree that if I am a
          director/shareholder (owning at least 15% of the shares) of the Client
          I shall be personally liable for the performance of the Client’s
          obligations under this contract. I am an authorised person of the
          company or entity and I am authorised to enter into this agreement.
        </Typography>
      </Box>

      <Grid container sx={{ paddingLeft: "3.5rem", marginTop: "2rem" }}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/images/direct.png" alt="direct" width={180} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={1} sx={{ paddingLeft: "3.5rem" }}>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Title:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="title"
                size="small"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6.5}></Grid>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>First Name:</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField
                fullWidth
                name="firstName"
                size="small"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Middle Name/s:</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField
                fullWidth
                name="middleName"
                size="small"
                variant="outlined"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Surname:</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField
                fullWidth
                name="surname"
                size="small"
                variant="outlined"
                value={formData.surname}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Signature:</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
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
                  border:'solid 1px #0000003b'
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
            <Grid
              item
              xs={12}
              sm={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
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
                    onChange={handleChange}
                    value={dayjs(formData.declarationDate)}
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
              sm={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="p">DD / MM / YYY</Typography>
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

export default DeclarationGuarantor;
