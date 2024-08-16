import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  FormGroup,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate

const MultiSectionForm = () => {
  const { id } = useParams(); // Extract id from URL
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [pageLoading, setPageLoading] = useState(true);
  const [formData, setFormData] = useState({
    clientAccount: "",
    approvedCredit: "",
    approvedBy: "",
    fullName: "",
    tradingAs: "",
    abn: "",
    acn: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    suburb: "",
    postcode: "",
    city: "",
    state: "",
    title: "",
    firstName: "",
    position: "",
    middleNames: "",
    surname: "",
    tel: "",
    fax: "",
    mobile: "",
    email: "",
    webUrl: "",
    bsb: "",
    bank: "",
    accountNumber: "",
    branch: "",
    accountName: "",
    idCheck: false,
    copyBills: false,
  });
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch existing data if id is provided
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/cif/${id}`
          );
          console.log(response.data);
          setFormData(response.data);
          setIsEditing(true);
          setPageLoading(false);
        } catch (error) {
          console.error("Error fetching client data:", error);
        }
      };
      fetchData();
    } else {
      setPageLoading(false);
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        // Update existing client data
        await axios.put(
          `${process.env.REACT_APP_API_URL}/api/cif/${id}`,
          formData
        );
        console.log("Client updated successfully");
      } else {
        // Create new client data
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/cif`,
          formData
        );
        console.log("Client created successfully");
      }
      navigate("/cif"); // Redirect after save
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  if (pageLoading) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "100px",
          }}
        >
          {/* Content Box */}
          <Box>
            <h1 style={{ marginTop: "0" }}>
              Client Information Form (CIF)
              <br /> Client Document List (CDL)
            </h1>
            <p>
              Business Made Better, ABN 51 666 810 215 (“<strong>BMB</strong>”)
            </p>
          </Box>
          {/* Logo Box */}
          <Box>
            <img
              src="/images/logo.png"
              alt="Company Logo"
              style={{ maxWidth: "300px", maxHeight: "100px" }} // Adjust size as needed
            />
            <h3 style={{ textAlign: "right", marginBottom: "0" }}>
              (07) 3339 7997
            </h3>
            <p style={{ textAlign: "right", marginTop: "0" }}>
              Level 5, 131 Wickham Terrace<br></br> Brisbane Queensland
              Australia 4000 <br></br>E | accounts@uc8.com.au <br></br>W |
              BusinessMadeBetter.com.au
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh", // Full viewport height for centering
          }}
        >
          <CircularProgress size={80} thickness={4} />
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        {/* Content Box */}
        <Box>
          <h1 style={{ marginTop: "0" }}>
            Client Information Form (CIF)
            <br /> Client Document List (CDL)
          </h1>
          <span>
            Business Made Better, ABN 51 666 810 215 (“<strong>BMB</strong>”)
          </span>
        </Box>
        {/* Logo Box */}
        <Box>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            style={{ maxWidth: "300px", maxHeight: "100px" }} // Adjust size as needed
          />
          <h3 style={{ textAlign: "right", marginBottom: "0" }}>
            (07) 3339 7997
          </h3>
          <p style={{ textAlign: "right", marginTop: "0" }}>
            Level 5, 131 Wickham Terrace<br></br> Brisbane Queensland Australia
            4000 <br></br>E | accounts@uc8.com.au <br></br>W |
            BusinessMadeBetter.com.au
          </p>
        </Box>
      </Box>

      <form onSubmit={handleSave}>
        {/* Section 1: Office USE */}
        <Box sx={{ marginY: "3rem" }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6} sx={{ paddingTop: "0px!important" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                PLEASE USE BLACK/BLUE INK
              </Typography>

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
                    1
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color="secondary.main"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    This is a Business Application
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="secondary.main"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    (see Eligibility for Services).
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="secondary.main"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    One application per site location
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
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
                spacing={1.5}
                sx={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingBottom: "0.5rem",
                }}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="clientAccount"
                    label="Client Account"
                    size="small"
                    variant="outlined"
                    value={formData.clientAccount}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="approvedCredit"
                    size="small"
                    label="Approved Credit"
                    variant="outlined"
                    value={formData.approvedCredit}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="approvedBy"
                    label="Approved By"
                    size="small"
                    variant="outlined"
                    value={formData.approvedBy}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Section 2: Client Details */}
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
          <Grid container spacing={1.5} sx={{ paddingLeft: "2rem" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="fullName"
                size="small"
                label="Full Legal Name"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="tradingAs"
                size="small"
                label="Trading As"
                variant="outlined"
                value={formData.tradingAs}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="abn"
                label="ABN"
                size="small"
                variant="outlined"
                value={formData.abn}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="acn"
                label="ACN"
                size="small"
                variant="outlined"
                value={formData.acn}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Section 3: Site Address */}
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
                Site Address
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1.5} sx={{ paddingLeft: "2rem" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="addressLine1"
                size="small"
                label="Address Line 1"
                variant="outlined"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="addressLine2"
                size="small"
                label="Address Line 2"
                variant="outlined"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="addressLine3"
                size="small"
                label="Address Line 3"
                variant="outlined"
                value={formData.addressLine3}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="suburb"
                size="small"
                label="Suburb"
                variant="outlined"
                value={formData.suburb}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="postcode"
                size="small"
                label="Postcode"
                variant="outlined"
                value={formData.postcode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="city"
                size="small"
                label="City"
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="state"
                size="small"
                label="State"
                variant="outlined"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Section 4: Contact Details */}
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
                4
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                Contact Details
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1.5} sx={{ paddingLeft: "2rem" }}>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                name="title"
                size="small"
                label="Title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                name="firstName"
                size="small"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                name="position"
                size="small"
                label="Position"
                variant="outlined"
                value={formData.position}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="middleNames"
                size="small"
                label="Middle Name/s"
                variant="outlined"
                value={formData.middleNames}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="surname"
                size="small"
                label="Surname"
                variant="outlined"
                value={formData.surname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="tel"
                size="small"
                label="Tel"
                variant="outlined"
                value={formData.tel}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="fax"
                size="small"
                label="Fax"
                variant="outlined"
                value={formData.fax}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="mobile"
                size="small"
                label="Mobile"
                variant="outlined"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                size="small"
                label="Email Address"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="webUrl"
                size="small"
                label="Web URL"
                variant="outlined"
                value={formData.webUrl}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Section 5: Documents */}
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
                5
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                Documents
              </Typography>
            </Box>
          </Box>
          <FormGroup sx={{ paddingLeft: "2rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="idCheck"
                  checked={formData.idCheck}
                  onChange={handleChange}
                />
              }
              label="To satisfy 100 point of ID, take copy of DL (Front & Back)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="copyBills"
                  checked={formData.copyBills}
                  onChange={handleChange}
                />
              }
              label="Copy of bills"
            />
          </FormGroup>
        </Box>

        {/* Section 6: Direct Debit */}
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
                6
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ marginLeft: "0.5rem" }}
              >
                For direct debit from a bank account
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1.5} sx={{ paddingLeft: "2rem" }}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="bsb"
                size="small"
                label="BSB"
                variant="outlined"
                value={formData.bsb}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="bank"
                size="small"
                label="Bank / Institution"
                variant="outlined"
                value={formData.bank}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="accountNumber"
                size="small"
                label="Account Number"
                variant="outlined"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                name="branch"
                size="small"
                label="Branch"
                variant="outlined"
                value={formData.branch}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="accountName"
                size="small"
                label="Account Name"
                variant="outlined"
                value={formData.accountName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Submit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          {loading ? (
            <Button variant="contained" color="primary" size="large">
              {isEditing ? "Updating ..." : "Creating ..."}
              <CircularProgress
                size={20}
                sx={{ color: "white", marginLeft: 1 }}
              />
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              {isEditing ? "Update Form" : "Create Form"}
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default MultiSectionForm;
