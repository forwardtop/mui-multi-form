import React from "react";
import { Container, Button } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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
import PersonalDirectorGuarantee from "./personalDirectorGuarantee";
import DeclarationGuarantor from "./declarationGuarantor";

const CAA = () => {
  
  const generatePDF = () => {
    const input = document.getElementById('pdfContent');
    if (!input) {
      console.error("Element not found: #pdfContent");
      return;
    }
  
    html2canvas(input, {
      scale: 2, // Higher scale for better resolution
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait', // 'portrait' or 'landscape'
        unit: 'mm',
        format: 'a4',
      });
  
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
  
      // Add the first image
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      // Add additional pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save("caa_document.pdf"); // Download the PDF
    }).catch((error) => {
      console.error('Failed to generate PDF:', error);
    });
  };
  
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <div id="pdfContent">
        <CIFHeader />
        <OfficeUse />
        <ClientDetails />
        <BusinessMarketSector />
        <SiteAddress />
        <div className="page-break"></div>
        <CompanyContactDetails />
        <ServiceDetails />
        <AccountTerms />
        <BillingDetails />
        <PrimaryContactPerson />
        <div className="page-break"></div>
        <ProofOfIdentity />
        <PersonalDirectorGuarantee />
        <div className="page-break"></div>
        <DeclarationGuarantor />
      </div>
      <Button variant="contained" color="primary" onClick={generatePDF}>
        Download PDF
      </Button>
    </Container>
  );
};

export default CAA;
