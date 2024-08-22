import React from "react";
import { Container } from "@mui/material";
import CIFHeader from "./cifHeader";
import OfficeUse from "./officeUse";
import ClientDetails from "./clientDetails";
import BusinessMarketSector from "./businessMarketSector";
import SiteAddress from "./siteAddress";
import CompanyContactDetails from "./companyContactDetails";
import ServiceDetails from "./serviceDetails";
import AccountTerms from "./accountTerms";
import BillingDetails from "./billingDetails";
import PrimaryContactPerson from "./primaryContactPerson";
import ProofOfIdentity from "./proofOfIdentity";

const CAA = () => {

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <CIFHeader />
      <OfficeUse />
      <ClientDetails />
      <BusinessMarketSector />
      <SiteAddress />
      <CompanyContactDetails />
      <ServiceDetails />
      <AccountTerms />
      <BillingDetails />
      <PrimaryContactPerson />
      <ProofOfIdentity />
    </Container>
  );
};

export default CAA;
