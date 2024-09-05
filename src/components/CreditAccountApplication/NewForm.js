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

const NewForm = () => {
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
    idCheck: "",
    copyBills: "",
  });

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch existing data if id is provided
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/cif/read.php?id=${id}`
          );
          console.log(response.data[0]);
          setFormData(response.data[0]);
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
          `${process.env.REACT_APP_API_URL}/cif/update.php?id=${id}`,
          formData
        );
        console.log("Form updated successfully");
      } else {
        // Create new client data
        await axios.post(
          `${process.env.REACT_APP_API_URL}/cif/create.php`,
          formData
        );
        console.log("Form created successfully");
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
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={120} thickness={4} />
      </Box>
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
        <Box sx={{ display: "flex" }}>
          <Box>
            <img
              src="/images/UC8 Logo - Square.png"
              alt="Company Logo"
              style={{ maxWidth: "300px", maxHeight: "100px", display: "" }}
            />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <h1 style={{ marginTop: "0" }}>
              Client Information Form (CIF)
              <br /> Credit Account Application (CAA)
            </h1>
            <span>UC8 Australia Pty Ltd ABN 51 666 810 215 (“UC8”)</span>
          </Box>
        </Box>
        {/* Logo Box */}
        <Box>
          <h3 style={{ textAlign: "right", marginBottom: "0" }}>
            1300 804 880
          </h3>
          <p style={{ textAlign: "right", marginTop: "0" }}>
            Level 5, 131 Wickham Terrace<br></br>Brisbane | Queensland |
            Australia | 4000<br></br>info@uc8.au<br></br>uc8.au
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
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "flex-end",
                    },
                  }}
                >
                  <Typography>Client Account:</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    name="clientAccount"
                    size="small"
                    variant="outlined"
                    defaultValue={formData.clientAccount}
                    onBlur={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "flex-end",
                    },
                  }}
                >
                  <Typography>Approved Credit:</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    name="approvedCredit"
                    size="small"
                    variant="outlined"
                    defaultValue={formData.approvedCredit}
                    onBlur={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "flex-end",
                    },
                  }}
                >
                  <Typography>Approved By:</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    name="approvedBy"
                    size="small"
                    variant="outlined"
                    defaultValue={formData.approvedBy}
                    onBlur={handleChange}
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
                marginTop:'10px'
              }}
            >
              <Typography>Entity Type:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Grid
                  item
                  xs={12}
                  sm={2}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
                      sx={{ marginLeft: 1 }}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Grid
                  item
                  xs={12}
                  sm={2}
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
                    <Typography>Company</Typography>
                    <Checkbox
                      color="primary"
                      name="company"
                      checked={Boolean(Number(formData.company))}
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    name="other"
                    size="small"
                    variant="outlined"
                    defaultValue={formData.other}
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
                marginTop:'10px'
              }}
            >
              <Typography>Date Established:</Typography>
            </Grid>
            
            
          </Grid>
        </Box>
        {/* Section 3: Business Market Sector */}
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
                marginTop:'10px!'
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                    defaultValue={formData.other}
                    onBlur={handleChange}
                  />
                </Grid>
              </Grid>
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
          <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Address Line 1:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                name="addressLine1"
                size="small"
                variant="outlined"
                defaultValue={formData.addressLine1}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Address Line 2:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                name="addressLine2"
                size="small"
                variant="outlined"
                defaultValue={formData.addressLine2}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Address Line 3:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                name="addressLine3"
                size="small"
                variant="outlined"
                defaultValue={formData.addressLine3}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Suburb:</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                name="suburb"
                size="small"
                variant="outlined"
                defaultValue={formData.suburb}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Postcode:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="postcode"
                size="small"
                variant="outlined"
                defaultValue={formData.postcode}
                onBlur={handleChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>City:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="city"
                size="small"
                variant="outlined"
                defaultValue={formData.city}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>State:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="postcode"
                size="small"
                variant="outlined"
                defaultValue={formData.state}
                onBlur={handleChange}
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
          <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
            <Grid
              item
              xs={12}
              sm={0.5}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Title:</Typography>
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <TextField
                fullWidth
                name="title"
                size="small"
                variant="outlined"
                defaultValue={formData.title}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>First Name:</Typography>
            </Grid>
            <Grid item xs={12} sm={4.9}>
              <TextField
                fullWidth
                name="firstName"
                size="small"
                variant="outlined"
                defaultValue={formData.firstName}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>Position:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="position"
                size="small"
                variant="outlined"
                defaultValue={formData.position}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Middle Name/s:</Typography>
            </Grid>
            <Grid item xs={12} sm={4.5}>
              <TextField
                fullWidth
                name="middleName"
                size="small"
                variant="outlined"
                defaultValue={formData.middleName}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Surname:</Typography>
            </Grid>
            <Grid item xs={12} sm={4.5}>
              <TextField
                fullWidth
                name="surname"
                size="small"
                variant="outlined"
                defaultValue={formData.surname}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.5}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Tel:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="tel"
                size="small"
                variant="outlined"
                defaultValue={formData.tel}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Fax:</Typography>
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <TextField
                fullWidth
                name="fax"
                size="small"
                variant="outlined"
                defaultValue={formData.fax}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Mobile:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="mobile"
                size="small"
                variant="outlined"
                defaultValue={formData.mobile}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.5}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Email Address:</Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <TextField
                fullWidth
                name="email"
                size="small"
                variant="outlined"
                defaultValue={formData.email}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.5}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Web URL:</Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <TextField
                fullWidth
                name="webUrl"
                size="small"
                variant="outlined"
                defaultValue={formData.webUrl}
                onBlur={handleChange}
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
          <FormGroup sx={{ paddingLeft: "3.5rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="idCheck"
                  checked={Boolean(Number(formData.idCheck))}
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
                  checked={Boolean(Number(formData.copyBills))}
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
          <Grid container spacing={1.5} sx={{ paddingLeft: "3.5rem" }}>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography>BSB:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="bsb"
                size="small"
                variant="outlined"
                defaultValue={formData.bsb}
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
              <Typography>Bank / Institution:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="bank"
                size="small"
                variant="outlined"
                defaultValue={formData.bank}
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
              }}
            >
              <Typography>Account Number:</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                name="accountNumber"
                size="small"
                variant="outlined"
                defaultValue={formData.accountNumber}
                onBlur={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-end",
                },
              }}
            >
              <Typography>Branch:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="bank"
                size="small"
                variant="outlined"
                defaultValue={formData.bank}
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
              }}
            >
              <Typography>Account Name:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                name="accountName"
                size="small"
                variant="outlined"
                defaultValue={formData.accountName}
                onBlur={handleChange}
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

export default NewForm;
