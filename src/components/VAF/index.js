import React from "react";
import { Container } from "@mui/material";
import OfficeUse from "./officeUse";
import VAFHeader from "./vafHeader";

const CAA = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <VAFHeader />
        <OfficeUse />
    </Container>
  );
};

export default CAA;
