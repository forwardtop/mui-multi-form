import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you use react-router for navigation

const forms = [
  {
    title: "Client Collection Form (CCF)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/ccf",
  },
  {
    title: "Client Information Form (CIF)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/cif",
  },
  {
    title: "Voice Application Form (VAF)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/vaf",
  },
  {
    title: "Automatic Payment Authority (APA)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/apa",
  },
  {
    title: "Porting Application Form (PAF)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/paf",
  },
  {
    title: "Internet Application Form (IAF)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/iaf",
  },
  {
    title: "Terms & Conditions of Trade (TCT)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/tct",
  },
  {
    title: "Offsite Backup & Storage (OBS)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/obs",
  },
  {
    title: "Alarm Monitoring & Security (AMS)",
    description:
      "This is a Business application (see Eligibility for Services).",
    path: "/ams",
  },
];

const FormCards = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "12rem" }}>
      <Grid container spacing={2}>
        {forms.map((form, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ width: "18rem" }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {form.title}
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                  {form.description}
                </Typography>
                <Button
                  component={Link}
                  to={form.path}
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "2rem" }}
                >
                  View Form
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FormCards;
