import React from "react";
import { Container } from "@mui/material";
import APAHeader from "./APAHeader";
import OfficeUse from "./officeUse";
import CardType from "./cardType";


const APA = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <APAHeader />
        <OfficeUse />
        <CardType />

    </Container>
  );
};

export default APA;
