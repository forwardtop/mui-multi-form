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
import ServiceDetails from "./serviceDetails";
import VoipProvisioningDetails from "./voipProvisioningDetails";
import DirectInDialNumberRange from "./directInDialNumberRange";
import PlanAndServiceDetails from "./planAndServiceDetails";
import ContactPeriod from "./contractPeriod";
import ProofOfIdentity from "./proofOfIdentity";

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
        <VoipProvisioningDetails />
        <DirectInDialNumberRange />
        <PlanAndServiceDetails />
        <ContactPeriod />
        <ProofOfIdentity />
    </Container>
  );
};

export default CAA;
