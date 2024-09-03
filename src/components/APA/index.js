import React from "react";
import { Container } from "@mui/material";
import APAHeader from "./APAHeader";
import OfficeUse from "./officeUse";
import CardType from "./cardType";
import DirectDebitFromBankAccount from "./directDebitFromBankAccount";
import Declaration from "./declaration";
import TermsAndConditions from "./termsAndConditions";


const APA = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <APAHeader />
        <OfficeUse />
        <CardType />
        <DirectDebitFromBankAccount />
        <Declaration />
        <TermsAndConditions />

    </Container>
  );
};

export default APA;
