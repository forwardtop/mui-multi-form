import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const listsData = [
  {
    title: "Form 1 | Client Collection Form (CCF)  ",
    form: "CCF",
    checked: true,
  },
  {
    title: "Form 2 | Client Account Application Form (CAA)",
    form: "CAA",
    checked: true,
  },
  {
    title: "Form 3 | Voice Application Form (VAF)",
    form: "VAF",
    checked: true,
  },
  {
    title: "Form 4 | Porting Application Form (PAF)",
    form: "PAF",
    checked: true,
  },
  {
    title: "Form 5 | Internet Application Form (IAF)",
    form: "IAF",
    checked: true,
  },
  {
    title: "Form 6 | Offsite Backup Form (OBS)",
    form: "OBS",
    checked: true,
  },
  {
    title: "Form 7 | Alarm Application Form (AAF)",
    form: "AAF",
    checked: true,
  },
  {
    title: "Form 8 | Automatic Payment Authority (APA)",
    form: "APA",
    checked: true,
  },
  {
    title: "Form 9 | Terms and Conditions (TCT)",
    form: "TCT",
    checked: true,
  },
];

const FormCards = () => {
  const [lists, setLists] = useState(listsData);
  const navigate = useNavigate();
  const handleChange = (index) => {
    setLists((prevLists) => {
      const updatedLists = prevLists.map((list, i) =>
        i === index ? { ...list, checked: !list.checked } : list
      );

      const checkedForms = updatedLists
        .filter((list) => list.checked)
        .map((list) => list.form);
      console.log("Selected Forms:", checkedForms);

      return updatedLists;
    });
  };
  const [loading, setLoading] = useState(false);
  const handleCreate = async () => {
    setLoading(true);

    // Simulate data syncing delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    const selectedForms = lists
      .filter((list) => list.checked)
      .map((list) => list.form);
    navigate("/creatingForms", { state: { selectedForms } });
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Ensures it appears on top
          }}
        >
          <CircularProgress size={80} color="primary" />
        </Box>
      )}
      <Container
        sx={{
          height: "100vh",
          width: "700px",
          margin: "auto",
        }}
      >
        <Typography variant="h4"></Typography>
        <Grid container spacing={2} sx={{}}>
          {lists.map((list, index) => (
            <Grid
              item
              xs={12}
              key={index}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  color="primary"
                  size="large"
                  checked={list.checked}
                  onChange={() => handleChange(index)}
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
              <Typography
                variant="h5"
                onClick={() => handleChange(index)}
                sx={{ cursor: "pointer", marginLeft: 1 }}
              >
                {list.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <Button variant="contained" color="info" onClick={handleCreate}>
            Create A Form
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default FormCards;
