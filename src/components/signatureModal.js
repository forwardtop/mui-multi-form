import React, { useRef } from "react";
import { Button, Modal, Box, Stack } from "@mui/material";
import ReactSignatureCanvas from "react-signature-canvas";

const SignatureModal = ({ open, handleClose, saveSignature }) => {
  const sigPad = useRef(null);

  const handleSave = () => {
    const signatureData = sigPad.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    saveSignature(signatureData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <Box sx={{border:'solid 1px #0000003b'}}>
            <ReactSignatureCanvas
              ref={sigPad}
              penColor="black"
              canvasProps={{
                width: 500,
                height: 150,
                className: "sigCanvas",
              }}
              sx={{ border: "1px solid #0000003b" }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
          >
            <Button variant="outlined" color="primary" onClick={handleSave}>
              OK
            </Button>
            <Button
              variant="outlined"
              color="info"
              onClick={() => sigPad.current.clear()}
            >
              Clear
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignatureModal;
