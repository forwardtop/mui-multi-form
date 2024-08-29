import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Import your form components here
import CCF from '../components/CCF/index.js';
import CAA from '../components/CAA/index.js';
import VAF from '../components/VAF/index.js';
import PAF from '../components/PAF/index.js';
import IAF from '../components/IAF/index.js';
import OBS from '../components/OBS/index.js';
import APA from '../components/APA/index.js';
import AAF from '../components/AAF/index.js';
import TCT from '../components/TCT/index.js';


const formComponents = {
  CCF: CCF,
  CAA: CAA,
  IAF: IAF,
  AAF: AAF,
  TCT: TCT,
  OBS: OBS,
  APA: APA,
  VAF: VAF,
  PAF: PAF,
};

const CreatingForms = () => {
  const location = useLocation();
  const { selectedForms } = location.state || { selectedForms: [] };
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const sendingEmail = () => {
    setSending(true); // Start sending email
    setTimeout(() => {
      setSending(false); // Stop sending email after 5 seconds
    }, 2000);
  }

  const generatePDF = () => {
    setLoading(true); // Start loading

    const input = document.getElementById("pdfContent");
    if (!input) {
      console.error("Element not found: #pdfContent");
      setLoading(false); // Stop loading if element not found
      return;
    }

    html2canvas(input, {
      scale: 2, // Higher scale for better resolution
      scrollX: -window.scrollX, 
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: [canvas.width * 0.264583, canvas.height * 0.264583], // Adjust dimensions based on canvas size
        });

        pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save("caa_document.pdf"); // Download the PDF

        setLoading(false); // Stop loading after download
      })
      .catch((error) => {
        console.error("Failed to generate PDF:", error);
        setLoading(false); // Stop loading on error
      });
  };

  return (
    <>
      <Container id="pdfContent">
        {selectedForms.length > 0 ? (
          selectedForms.map((form, index) => {
            const FormComponent = formComponents[form];

            return (
              <Box key={index} sx={{ marginBottom: 2 }} className="pdf-container">
                {FormComponent ? (
                  <FormComponent />
                ) : (
                  <Typography variant="body1">
                    Component {form} not found.
                  </Typography>
                )}
              </Box>
            );
          })
        ) : (
          <Typography variant="h6">No forms selected.</Typography>
        )}
      </Container>
      <div style={{ display: "flex", justifyContent: "center", marginBottom:"3rem" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={generatePDF}
          sx={{ marginTop: "2rem" }}
        >
          {loading ? (
            <>
              Downloading...  
              <CircularProgress size={18} sx={{marginLeft:'5px'}} />
            </>
          ) : (
            "Download PDF"
          )}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={sendingEmail}
          sx={{ marginTop: "2rem", marginLeft: "2rem" }}
        >
          {sending ? (
            <>
              Sending PDF...
              <CircularProgress size={18} sx={{marginLeft:'5px'}} />
            </>
          ) : (
            "Send PDF"
          )}
        </Button>
      </div>
    </>
  );
};

export default CreatingForms;
