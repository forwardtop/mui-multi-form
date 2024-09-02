// src/components/PrimaryContactPerson.js
import React, { useContext } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";
import { checkBoxUtils } from "../../utils/checkBoxUtils";

const VoipProvisioningDetails = () => {
  const { formData, handleChange } = useContext(AuthContext);

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
              value={formData.numbersOfVoip}
              onChange={handleChange}
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
              value={formData.numbersOfPorting}
              onChange={handleChange}
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
          {checkBoxUtils({
            sm: 2,
            label: "UC8 Cloud:",
            name: "uc8Cloud",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 2,
            label: "Softphone:",
            name: "softPhone",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 2,
            label: "IP PBX:",
            name: "ippbx",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 4,
            label: "On Premise Hardware:",
            name: "premiseHardware",
            formData,
            handleChange,
          })}
        </Grid>
        <Grid container spacing={1} sx={{ marginLeft: "3.5rem" }}>
          {checkBoxUtils({
            sm: 2,
            label: "IP Cordless:",
            name: "ipCordless",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 2,
            label: "IP Handset::",
            name: "ipHandset",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 2,
            label: "ATA:",
            name: "ata",
            formData,
            handleChange,
          })}
          {checkBoxUtils({
            sm: 2,
            label: "Other:",
            name: "VoipOther",
            formData,
            handleChange,
          })}
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              name="voipOtherText"
              size="small"
              variant="outlined"
              value={formData.voipOtherText}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VoipProvisioningDetails;
