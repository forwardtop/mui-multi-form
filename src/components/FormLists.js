import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const listsData = [
  {
    title: "Credit Account Application (CAA)",
    form: "CAA",
    checked: false,
  },
  {
    title: "Client Information Form (CIF)",
    form: "CIF",
    checked: false,
  },
  {
    title: "Client Collection Form (CCF)",
    form: "CCF",
    checked: false,
  },
  {
    title: "Voice Application Form (VAF)",
    form: "VAF",
    checked: false,
  },
  {
    title: "Automatic Payment Authority (APA)",
    form: "APA",
    checked: false,
  },
  {
    title: "Porting Application Form (PAF)",
    form: "PAF",
    checked: false,
  },
  {
    title: "Internet Application Form (IAF)",
    form: "IAF",
    checked: false,
  },
  {
    title: "Terms & Conditions of Trade (TCT)",
    form: "TCT",
    checked: false,
  },
  {
    title: "Offsite Backup & Storage (OBS)",
    form: "OBS",
    checked: false,
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
  const handleCreate = () => {
    const selectedForms = lists
      .filter((list) => list.checked)
      .map((list) => list.form);
    navigate("/creatingForms", { state: { selectedForms } });
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
  );
};

export default FormCards;
