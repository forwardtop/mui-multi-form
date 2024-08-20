// FormDisplay.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

// Import your form components here
import CCF from '../components/CCF/index.js';
import CAA from '../components/CAA/index.js';
import IAF from '../components/IAF/index.js';
import CIF from '../components/CIF/index.js';
import TCT from '../components/TCT/index.js';
import OBS from '../components/OBS/index.js';
import APA from '../components/APA/index.js';
import VAF from '../components/VAF/index.js';
import PAF from '../components/PAF/index.js';
const formComponents = {
  CCF: CCF,
  CAA: CAA,
  IAF: IAF,
  CIF: CIF,
  TCT: TCT,
  OBS: OBS,
  APA: APA,
  VAF: VAF,
  PAF: PAF,
};

const CreatingForms = () => {
  const location = useLocation();
  const { selectedForms } = location.state || { selectedForms: [] };

  return (
    <Container>
      {selectedForms.length > 0 ? (
        selectedForms.map((form, index) => {
          const FormComponent = formComponents[form];

          return (
            <Box key={index} sx={{ marginBottom: 2 }}>
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
  );
};

export default CreatingForms;
