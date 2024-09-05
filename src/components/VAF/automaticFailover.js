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

const AutomaticFailover = () => {
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
        VAFSectionTitles.automaticFailover.number,
        VAFSectionTitles.automaticFailover.title,
        VAFSectionTitles.automaticFailover.description
      )}
      <Box sx={{ paddingLeft: "0.5rem", paddingY: "0.8rem" }}>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              6.1 &nbsp;
              <span style={{ fontSize: "18px", marginLeft: "3rem" }}>
                Are you requesting an automatic failover service?
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Yes:</Typography>
                <Checkbox
                  color="primary"
                  name="requestAFS"
                  value="yes"
                  checked={formData.requestAFS === true}
                  onChange={() =>
                    handleChange({
                      target: { name: "requestAFS", value: true },
                    })
                  }
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>No:</Typography>
                <Checkbox
                  color="primary"
                  name="requestAFS"
                  value="no"
                  checked={formData.requestAFS === false}
                  onChange={() =>
                    handleChange({
                      target: { name: "requestAFS", value: false },
                    })
                  }
                  sx={{ marginLeft: 1 }}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ display: "flex", marginTop: "1rem" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              6.2 &nbsp;
              <span style={{ fontSize: "18px", marginLeft: "3rem" }}>
                If yes, you must nominate the default number for redirected
                calls:
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              name="tradingAs"
              size="small"
              variant="outlined"
              defaultValue={formData.numberOfRedirectedCalls}
              onBlur={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AutomaticFailover;
