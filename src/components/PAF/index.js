import React from "react";
import { Container } from "@mui/material";
import PAFHeader from "./PAFHeader";
import OfficeUse from "./officeUse";
import CustomerDetails from "./customerDetails";
import SiteAddress from "./siteAddress";
import ContactPerson from "./contactPerson";
import ContactDetails from "./contactDetails";
import PortingFee from "./portingFee";
import PortingNumbers from "./portingNumbers";


const PAF = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <PAFHeader />
        <OfficeUse />
        <CustomerDetails />
        <SiteAddress />
        <ContactPerson />
        <ContactDetails />
        <PortingFee />
        <PortingNumbers />

    </Container>
  );
};

export default PAF;
