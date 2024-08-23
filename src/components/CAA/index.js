import React from "react";
import { Container } from "@mui/material";
import CIFHeader from "./CifHeader";
import OfficeUse from "./OfficeUse";
import ClientDetails from "./ClientDetails";
import BusinessMarketSector from "./BusinessMarketSector";
import SiteAddress from "./SiteAddress";
import CompanyContactDetails from "./CompanyContactDetails";
import ServiceDetails from "./ServiceDetails";
import AccountTerms from "./AccountTerms";
import BillingDetails from "./BillingDetails";
import PrimaryContactPerson from "./PrimaryContactPerson";
import ProofOfIdentity from "./ProofOfIdentity";
import PersonalDirectorGuarantee from "./PersonalDirectorGuarantee";
import DeclarationGuarantor from "./DeclarationGuarantor";

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
        <PersonalDirectorGuarantee />
        <DeclarationGuarantor />
    </Container>
  );
};

export default CAA;
