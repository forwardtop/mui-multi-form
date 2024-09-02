import React from "react";
import { Container } from "@mui/material";
import OfficeUse from "./officeUse";
import VAFHeader from "./vafHeader";
import CustomerDetails from "./customerDetails";
import SiteAddress from "./siteAddress";
import PrimaryContactPerson from "./primaryContactPerson";
import ContactDetails from "./contactDetails";
import AutomaticFailover from "./automaticFailover";
import MobileNumbers from "./mobileNumbers";
import ServiceDetails from "./searchDetails";

const CAA = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <VAFHeader />
        <OfficeUse />
        <CustomerDetails />
        <SiteAddress />
        <PrimaryContactPerson />
        <ContactDetails />
        <AutomaticFailover />
        <MobileNumbers />
        <ServiceDetails />
    </Container>
  );
};

export default CAA;
