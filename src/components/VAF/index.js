import React from "react";
import { Container } from "@mui/material";
import OfficeUse from "./officeUse";
import VAFHeader from "./vafHeader";
import CustomerDetails from "./customerDetails";
import SiteAddress from "./siteAddress";
import PrimaryContactPerson from "./primaryContactPerson";
import ContactDetails from "./contactDetails";

const CAA = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <VAFHeader />
        <OfficeUse />
        <CustomerDetails />
        <SiteAddress />
        <PrimaryContactPerson />
        <ContactDetails />
    </Container>
  );
};

export default CAA;
