// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import { checkBoxUtils } from "../../utils/checkBoxUtils";

const VoipProvisioningDetails = () => {
  const { VAFFormData, handleChange } = useContext(AuthContext);
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        VAFSectionTitles.VOIP.number,
        VAFSectionTitles.VOIP.title,
        VAFSectionTitles.VOIP.description
      )}
      <Box sx={{ paddingLeft: "0.5rem", paddingY: "0.8rem" }}>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              9.1 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "3rem" }}>
                How many new VoIP/SIP numbers are you applying for?
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              name="numbersOfVoip"
              size="small"
              variant="outlined"
              defaultValue={VAFFormData.numbersOfVoip}
              onBlur={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginTop: "1rem" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              9.2 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "3rem" }}>
                How many existing numbers are you porting to UC8 ?
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              name="numbersOfPorting"
              size="small"
              variant="outlined"
              defaultValue={VAFFormData.numbersOfPorting}
              onBlur={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginTop: "1rem" }}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6">
              9.3 &nbsp;
              <span style={{ fontSize: "14px", marginLeft: "3rem" }}>
                What VoIP/SIP interface device do you intend to use to make and
                receive calls?
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ marginLeft: "3.5rem" }}>
          {checkBoxUtils(2, "UC8 Cloud:", "uc8Cloud", VAFFormData, handleChange)}
          {checkBoxUtils(2, "Softphone:", "softPhone", VAFFormData, handleChange)}
          {checkBoxUtils(2, "IP PBX:", "ippbx", VAFFormData, handleChange)}
          {checkBoxUtils(
            4,
            "On Premise Hardware:",
            "premiseHardware",
            VAFFormData,
            handleChange
          )}
        </Grid>
        <Grid container spacing={1} sx={{ marginLeft: "3.5rem" }}>
          {checkBoxUtils(2, "IP Cordless:", "ipCordless", VAFFormData, handleChange)}
          {checkBoxUtils(2, "IP Handset:", "ipHandset", VAFFormData, handleChange)}
          {checkBoxUtils(2, "ATA:", "ata", VAFFormData, handleChange)}
          {checkBoxUtils(2, "Other:", "voipOther", VAFFormData, handleChange)}
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              name="voipOtherText"
              size="small"
              variant="outlined"
              defaultValue={VAFFormData.voipOtherText}
              onBlur={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VoipProvisioningDetails;
