import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";

// Import your form components here
import CCF from "../components/CCF/index.js";
import CAA from "../components/CAA/index.js";
import VAF from "../components/VAF/index.js";
import PAF from "../components/PAF/index.js";
import IAF from "../components/IAF/index.js";
import OBS from "../components/OBS/index.js";
import APA from "../components/APA/index.js";
import AAF from "../components/AAF/index.js";
import TCT from "../components/TCT/index.js";
import { usePDF } from "react-to-pdf";

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
  const { toPDF, targetRef } = usePDF({ filename: "BMB-Staff-form.pdf" });
  const sendingEmail = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <div ref={targetRef}>
          <Container id="pdfContent">
            {selectedForms.length > 0 ? (
              selectedForms.map((form, index) => {
                const FormComponent = formComponents[form];

                return (
                  <Box
                    key={index}
                    sx={{ marginBottom: 2 }}
                    className="pdf-container"
                  >
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
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: "2rem" }}
          onClick={async () => {
            setLoading(true); // Start loading when PDF generation starts
            await toPDF(); // Wait for the PDF generation to complete
            setLoading(false); // Stop loading when it's done
          }}
        >
          {loading ? (
            <>
              Downloading...
              <CircularProgress size={18} sx={{ marginLeft: "5px" }} />
            </>
          ) : (
            "Download PDF"
          )}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: "2rem", marginLeft: "2rem" }}
          onClick={sendingEmail}
        >
          {sending ? (
            <>
              Sending...
              <CircularProgress size={18} sx={{ marginLeft: "5px" }} />
            </>
          ) : (
            "Send to my Email"
          )}
        </Button>
        </div>
        
      </div>
    </>
  );
};

export default CreatingForms;
