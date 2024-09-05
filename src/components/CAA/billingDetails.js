import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import { AuthContext } from "../../config/AuthContext";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { CIFSectionTitles } from "../../constants/sectionTitles";
const BillingDetails = () => {
  const { formData, handleChange } = useContext(AuthContext);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
    <div style={{display:'flex', alignItems:'center'}}>
    {sectionTitle(
        CIFSectionTitles.billingDetails.number,
        CIFSectionTitles.billingDetails.title,
      )}
      <Typography variant="h6" color="secondary.main" style={{fontSize:'14px', fontStyle:'italic', marginLeft:'-40px'}}>(The best person to contact regarding accounts and payments)</Typography>
    </div>
    
      <Grid container spacing={1} sx={{ paddingLeft: "3.5rem" }}>
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Title:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            name="title"
            size="small"
            variant="outlined"
            defaultValue={formData.title}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>First Name:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="firstName"
            size="small"
            variant="outlined"
            defaultValue={formData.firstName}
            onBlur={handleChange}
          />
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
            
          }}
        >
          <Typography>Surname:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="surname"
            size="small"
            variant="outlined"
            defaultValue={formData.surname}
            onBlur={handleChange}
          />
        </Grid>
        
        <Grid item xs={12} sm={4.5}>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Position:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="position"
            size="small"
            variant="outlined"
            defaultValue={formData.position}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Tel:</Typography>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            fullWidth
            name="tel"
            size="small"
            variant="outlined"
            defaultValue={formData.tel}
            onBlur={handleChange}
          />
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },
          }}
        >
          <Typography>Mobile:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="mobile"
            size="small"
            variant="outlined"
            defaultValue={formData.mobile}
            onBlur={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Email Address:</Typography>
        </Grid>
        <Grid item xs={12} sm={10.5}>
          <TextField
            fullWidth
            name="email"
            size="small"
            variant="outlined"
            defaultValue={formData.email}
            onBlur={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillingDetails;
