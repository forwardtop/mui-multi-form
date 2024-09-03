import React from "react";
import { Container } from "@mui/material";
import PAFHeader from "./PAFHeader";
import OfficeUse from "./officeUse";
import CustomerDetails from "./customerDetails";


const PAF = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <PAFHeader />
        <OfficeUse />
        <CustomerDetails />

    </Container>
  );
};

export default PAF;
